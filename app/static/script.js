document.getElementById("fitness-form").addEventListener("submit", async function(e) {
    e.preventDefault();

    document.getElementById("loading").style.display = "block";
    document.getElementById("result").style.display = "none";

    const payload = {
        age: parseInt(document.getElementById("age").value),
        weight: parseFloat(document.getElementById("weight").value),
        height: parseFloat(document.getElementById("height").value),
        gender: document.getElementById("gender").value,
        activity_level: document.getElementById("activity_level").value,
        fitness_goal: document.getElementById("fitness_goal").value,
        dietary_restrictions: document.getElementById("dietary_restrictions").value
            ? document.getElementById("dietary_restrictions").value.split(",").map(s => s.trim())
            : [],
        injuries: document.getElementById("injuries").value
            ? document.getElementById("injuries").value.split(",").map(s => s.trim())
            : [],
        preferred_workout_time: document.getElementById("preferred_workout_time").value,
        available_equipment: document.getElementById("available_equipment").value
            ? document.getElementById("available_equipment").value.split(",").map(s => s.trim())
            : [],
        workout_days_per_week: parseInt(document.getElementById("workout_days_per_week").value)
    };

    try {
        const res = await fetch("/analyze", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error(`Server error: ${res.status}`);

        const data = await res.json();

        // Convert markdown to HTML
        const markdownText = typeof data === "string" ? data : JSON.stringify(data, null, 2);
        document.getElementById("result-content").innerHTML = marked.parse(markdownText);

    } catch (err) {
        document.getElementById("result-content").innerHTML = `<p style="color:red;">${err.message}</p>`;
    } finally {
        document.getElementById("loading").style.display = "none";
        const resultDiv = document.getElementById("result");
        resultDiv.classList.remove("show");
        resultDiv.style.display = "block";
        setTimeout(() => resultDiv.classList.add("show"), 50);
    }
});
