from pydantic_ai import Agent, RunContext
from pydantic_ai.models.google import GoogleModel
from pydantic_ai.providers.google import GoogleProvider
from app.fitness_advisor.models import FitnessProfile, FitnessReportResult
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

if not os.getenv("GOOGLE_API_KEY"):
    raise RuntimeError("GOOGLE_API_KEY not loaded from .env")

provider = GoogleProvider(api_key=os.getenv("GOOGLE_API_KEY"))
model = GoogleModel('gemini-2.5-flash-lite', provider=provider)

fitness_agent = Agent(
    model=model,
    deps_type=FitnessProfile,
    system_prompt="Create personalized FitnessReportResult based on user's information provided."
    "for motivational quotes call the get_motivation tool and pick the single best one from the list you receive."
)

motivational_agent = Agent(
    model=model,
    system_prompt="Give motivational quotes based on the user's fitness goals and current status.",
)

@fitness_agent.system_prompt
async def add_user_fitness_data(ctx: RunContext[FitnessProfile]) -> str:
    fitness_data = ctx.deps
    return f"User fitness profile and goals: {fitness_data!r}"


@fitness_agent.tool
async def get_motivation(ctx: RunContext, result_type=list[str]) -> list[str]:
    return await motivational_agent.run(
        f"Please generate 5 motivational quotes about working out and eating healthy.")
    
    
async def analyze_profile(profile: FitnessProfile, result_type=FitnessReportResult, result_retries=3) -> FitnessReportResult:
    result = await fitness_agent.run("Create a personalized fitness and nutrition plan.", deps=profile)
    return result.output