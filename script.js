const questions = {
    1: { q: "Brand name for Atorvastatin?", options: ["Zocor", "Lipitor", "Livalo", "Crestor"], a: "Lipitor", insult: "That's Day 1 stuff. Step it up!" },
    2: { q: "Brand name for Simvastatin?", options: ["Zocor", "Lipitor", "Livalo", "Crestor"], a: "Zocor", insult: "Are you even trying?" },
    3: { q: "Brand name for Rosuvastatin?", options: ["Zocor", "Lipitor", "Livalo", "Crestor"], a: "Crestor", insult: "Annie wouldn't have missed that." },
    4: { q: "Brand name for Pitavastatin?", options: ["Zocor", "Lipitor", "Livalo", "Crestor"], a: "Livalo", insult: "Wrong. Back to the filling station." },
    5: { q: "Which of these is a Beta-Blocker?", options: ["Lisinopril", "Metoprolol", "Losartan", "Amlodipine"], a: "Metoprolol", insult: "Your heart isn't in this." },
    6: { q: "Brand name for Levothyroxine?", options: ["Synthroid", "Amoxil", "Vicodin", "Prinivil"], a: "Synthroid", insult: "Go check the fridge logic." },
    7: { q: "What class is Lisinopril?", options: ["Beta-Blocker", "ACE Inhibitor", "Statin", "CCB"], a: "ACE Inhibitor", insult: "That's a high-pressure mistake." },
    8: { q: "Brand name for Metformin?", options: ["Glucophage", "Lasix", "Lipitor", "Neurontin"], a: "Glucophage", insult: "Sugar-coat it all you want, you're wrong." },
    9: { q: "Indication for Albuterol?", options: ["Hypertension", "Asthma", "Diabetes", "Infection"], a: "Asthma", insult: "Take a deep breath and try again." },
    10: { q: "Brand name for Gabapentin?", options: ["Lyrica", "Neurontin", "Xanax", "Ambien"], a: "Neurontin", insult: "Nerve-wracking, isn't it?" }
};

let startTime;
let timerInterval;

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    startTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
        document.getElementById('stopwatch').innerText = elapsed;
    }, 100);
}

function updateDiff(val) {
    document.getElementById('diffLabel').innerText = val;
    // This line makes the question change immediately as you slide
    generateQuestion(); 
}
}

function generateQuestion() {
    const diff = Number(document.getElementById('difficulty').value);
    const quizArea = document.getElementById('quiz-area');
    const data = questions[diff];

    if (!data) return;

    quizArea.innerHTML = `
        <div class="question-box" style="background: #fdfdfd; padding: 20px; border-radius: 10px; border: 1px solid #eee; margin-top: 10px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Level ${diff}</h3>
            <p style="font-size: 1.05rem; color: #34495e;">${data.q}</p>
            <div id="btn-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;"></div>
        </div>
    `;

    const grid = document.getElementById('btn-grid');
    data.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        // This is the clean way to handle clicks without quoting issues
        btn.onclick = () => checkAnswer(opt, data.a, data.insult);
        grid.appendChild(btn);
    });

    if (!startTime) startTimer();
}

function checkAnswer(selected, correct, insult) {
    const container = document.getElementById('mainContainer');
    if (selected === correct) {
        container.classList.add('correct-flash');
        setTimeout(() => container.classList.remove('correct-flash'), 600);
        alert("Correct!");
    } else {
        alert(insult);
    }
}

// Attach functions to window so the HTML buttons can see them
window.generateQuestion = generateQuestion;
window.updateDiff = updateDiff;
