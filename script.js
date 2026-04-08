const questions = {
    1: { q: "What is the common brand name for Atorvastatin?", options: ["Zocor", "Lipitor", "Livalo", "Crestor"], a: "Lipitor", insult: "Back to the counting tray! That's Day 1 stuff." },
    2: { q: "Which medication is a Proton Pump Inhibitor (PPI)?", options: ["Famotidine", "Omeprazole", "Ranitidine", "Sucralfate"], a: "Omeprazole", insult: "Jennifer is going to make you reorganize the OTC aisle for that one." },
    3: { q: "Max refills allowed on a C-III prescription?", options: ["5 refills / 6 months", "No refills", "11 refills / 1 year", "5 refills / 1 year"], a: "5 refills / 6 months", insult: "Annie wouldn't have missed that. Study your laws!" },
    4: { q: "Which of these is a typical side effect of Lisinopril?", options: ["Dry Cough", "Leg Edema", "Tinnitus", "Yellow Vision"], a: "Dry Cough", insult: "NAPLEX will eat you alive if you don't know the ACE inhibitor cough." },
    5: { q: "Critical auxiliary label for Metronidazole?", options: ["Take with Food", "May Cause Drowsiness", "Avoid Alcohol", "Finish All"], a: "Avoid Alcohol", insult: "No drinking with this one! Did you skip clinical pearls?" },
    6: { q: "Generic name for Januvia?", options: ["Saxagliptin", "Sitagliptin", "Linagliptin", "Alogliptin"], a: "Sitagliptin", insult: "Yujin Kim is judging your knowledge. Do better." },
    7: { q: "Reversal agent for Warfarin?", options: ["Protamine", "Naloxone", "Phytonadione (Vit K)", "Flumazenil"], a: "Phytonadione (Vit K)", insult: "Stay away from the IV room until you learn your antidotes!" },
    8: { q: "Dose: 250mg. Stock: 1g/10mL. How many mL?", options: ["2.5 mL", "5 mL", "0.25 mL", "10 mL"], a: "2.5 mL", insult: "Math error! Jennifer is revoking your calculator privileges." },
    9: { q: "Which insulin is 'Rapid-Acting'?", options: ["Lantus", "Humulin N", "Novolog", "Levemir"], a: "Novolog", insult: "Moving slower than NPH. Novolog is the pace we need!" },
    10: { q: "Drip rate: 1L NS over 8 hrs (15 gtt/mL).", options: ["21", "31", "42", "60"], a: "31", insult: "Khushboo Patel is shaking her head. Level 10 math is no joke." }
};

let seconds = 0;
let timerInterval;

window.onload = () => {
    startTimer();
    const slider = document.getElementById('difficulty');
    if(slider) updateDiff(slider.value);
};

function startTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        const display = document.getElementById('stopwatch');
        if (display) display.innerText = `${mins}:${secs}`;
    }, 1000);
}

function updateDiff(val) {
    const label = document.getElementById('diffLabel');
    if (label) {
        label.innerText = val;
        const scale = 1 + (val * 0.05);
        const redValue = Math.floor((val - 1) * 25);
        label.style.transform = `scale(${scale})`;
        label.style.color = `rgb(${redValue}, 152, 219)`;
    }
}

function generateQuestion() {
    const diffElement = document.getElementById('difficulty');
    const quizArea = document.getElementById('quiz-area');
    if (!diffElement || !quizArea) return;

    const diff = Number(diffElement.value);
    const data = questions[diff];

    quizArea.innerHTML = `
        <div class="question-box" style="background: #fdfdfd; padding: 20px; border-radius: 10px; border: 1px solid #eee; margin-top: 10px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Level ${diff}: Challenge</h3>
            <p style="font-size: 1.05rem; color: #34495e;">${data.q}</p>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                ${data.options.map(opt => `
                    <button style="padding: 10px; font-size: 0.9rem;" onclick="checkAnswer('${opt}', '${data.a}', '${data.insult}')">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;
}

function checkAnswer(selected, correct, insult) {
    const container = document.getElementById('mainContainer');
    if (selected === correct) {
        if (container) {
            container.classList.add('correct-flash');
            setTimeout(() => container.classList.remove('correct-flash'), 600);
        }
        alert("Correct! Keep moving technician.");
        generateQuestion(); 
    } else {
        alert(insult);
    }
}
