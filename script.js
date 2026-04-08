// --- Questions Object ---
const questions = {
    1: {
        q: "What is the common brand name for Atorvastatin?",
        options: ["Zocor", "Lipitor", "Livalo", "Crestor"],
        a: "Lipitor",
        insult: "That's Day 1 stuff. Step it up!"
    },
    // ... add your other levels here
};

// --- Timer Logic ---
let startTime;
function startTimer() {
    startTime = Date.now();
    setInterval(() => {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
        const timerElement = document.getElementById('stopwatch');
        if (timerElement) timerElement.innerText = elapsed;
    }, 100);
}

// --- Difficulty UI ---
function updateDiff(val) {
    const label = document.getElementById('diffLabel');
    if (label) label.innerText = val;
}

// --- Core Logic ---
function generateQuestion() {
    const diffElement = document.getElementById('difficulty');
    const quizArea = document.getElementById('quiz-area');
    if (!diffElement || !quizArea) return;

    const diff = Number(diffElement.value);
    const data = questions[diff];

    // Clear previous question
    quizArea.innerHTML = '';

    // Create container
    const box = document.createElement('div');
    box.className = "question-box";
    box.style = "background: #fdfdfd; padding: 20px; border-radius: 10px; border: 1px solid #eee; margin-top: 10px;";

    box.innerHTML = `
        <h3 style="color: #2c3e50; margin-top: 0;">Level ${diff}: Challenge</h3>
        <p style="font-size: 1.05rem; color: #34495e;">${data.q}</p>
    `;

    const btnGrid = document.createElement('div');
    btnGrid.style = "display: grid; grid-template-columns: 1fr 1fr; gap: 10px;";

    // Create buttons with Event Listeners (No more quoting errors!)
    data.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt;
        btn.style = "padding: 10px; font-size: 0.9rem;";
        btn.onclick = () => checkAnswer(opt, data.a, data.insult);
        btnGrid.appendChild(btn);
    });

    box.appendChild(btnGrid);
    quizArea.appendChild(box);
    
    if(!startTime) startTimer();
}

function checkAnswer(selected, correct, insult) {
    const container = document.querySelector('.container');
    
    if (selected === correct) {
        container.classList.add('correct-flash');
        setTimeout(() => container.classList.remove('correct-flash'), 600);
        alert("Correct! Keep moving.");
    } else {
        alert(insult);
    }
}

// Ensure the function is globally accessible
window.generateQuestion = generateQuestion;
window.updateDiff = updateDiff;
