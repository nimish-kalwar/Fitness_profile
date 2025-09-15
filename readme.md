# 🏋️‍♂️ AI Fitness Trainer

This is an **AI-powered fitness and nutrition advisor** built using **FastAPI** with a simple **HTML/CSS/JavaScript** frontend.  
Users can input their personal details such as age, weight, height, gender, activity level, fitness goals, dietary restrictions, and workout preferences.  
The app then returns a **personalized workout and diet plan** in a visually appealing format.

---

## 🚀 Features
- **FastAPI backend** for handling API requests
- **HTML/CSS/JS frontend** served directly by FastAPI
- **Dynamic form** with dropdown menus for better UX
- **Loading animation** while fetching results
- **Smooth fade-in effect** for displaying AI-generated plans
- AI integration using `pydantic_ai` (or other AI provider)
- Fully deployable for free using [Render](https://fitness-profile.onrender.com)

---

## 📂 Tech Stack
- **Backend:** [FastAPI](https://fastapi.tiangolo.com/)  
- **Frontend:** HTML, CSS, JavaScript  
- **Templating:** Jinja2  
- **AI Service:** pydantic_ai (can integrate with OpenAI, Gemini, etc.)
- **Deployment:** [Render](https://fitness-profile.onrender.com) (Free tier)

---

## 🛠 Project Structure
app/
│
├── main.py # FastAPI entry point
├── templates/
│ └── index.html # Main frontend page
├── static/
│ ├── style.css # Styling
│ └── script.js # Frontend logic
└── fitness_advisor/ # Backend logic
├── Procfile # Render startup command
├── runtime.txt # Python version


---

## ⚙️ Installation (Local Development)

### 1️⃣ Clone the repo
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>

### 2️⃣ Create a virtual environment
python -m venv venv
source venv/bin/activate   # Linux/Mac
venv\Scripts\activate      # Windows

### 3️⃣ Install dependencies
bash
Copy
Edit
pip install -r requirements.txt

### 4️⃣ Run the server locally
bash
Copy
Edit
uvicorn app.main:app --reload
Now open your browser at http://127.0.0.1:8000

## ☁️ Deployment on Render
### 1️⃣ Push code to GitHub
bash
Copy
Edit
git add .
git commit -m "Initial commit"
git push origin main
### 2️⃣ Create a new Render Web Service
Go to https://render.com → New → Web Service

Connect your GitHub repo

Environment: Python 3.x

#### Build Command:
##### pip install -r requirements.txt

#### Start Command:
##### uvicorn main:app --host 0.0.0.0 --port $PORT

### 3️⃣ Deploy
Click Deploy and wait for the build to finish.

Once deployed, you’ll get a live URL like:

arduino
Copy
Edit
https://yourapp.onrender.com

## Contact
If you loved what you read here and feel like we can collaborate to produce some exciting stuff, or if you
just want to shoot a question, please feel free to connect with me on 
<a href="mailto:nimish786.kalwar@gmail.com">email</a> or 
<a href="https://www.linkedin.com/in/nimish-kalwar/" target="_blank">LinkedIn</a>