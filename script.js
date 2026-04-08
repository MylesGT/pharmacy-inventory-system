const questions = {
    1: {
        q: "What is the common brand name for Atorvastatin?",
        options: ["Zocor", "Lipitor", "Livalo", "Crestor"],
        a: "Lipitor",
        insult: "Back to the counting tray for you! That's Day 1 stuff."
    },
    2: {
        q: "Which medication is a Proton Pump Inhibitor (PPI)?",
        options: ["Famotidine", "Omeprazole", "Ranitidine", "Sucralfate"],
        a: "Omeprazole",
        insult: "If you can't find the PPIs, Jennifer is going to make you reorganize the entire OTC aisle."
    },
    3: {
        q: "What is the maximum number of refills allowed on a C-III prescription?",
        options: ["5 refills within 6 months", "No refills", "11 refills within 1 year", "5 refills within 1 year"],
        a: "5 refills within 6 months",
        insult: "Law and Ethics? More like 'Lost and Ignorant.' Annie wouldn't have missed that."
    },
    4: {
        q: "Which of these is a typical side effect of Lisinopril?",
        options: ["Dry Cough", "Leg Edema", "Tinnitus", "Yellow Vision"],
        a: "Dry Cough",
        insult: "NAPLEX is going to eat you alive if you don't know the ACE inhibitor cough."
    },
    5: {
        q: "Which auxiliary label is most critical for Metronidazole?",
        options: ["Take with Food", "May Cause Drowsiness", "Avoid Alcohol", "Finish All Medication"],
        a: "Avoid Alcohol",
        insult: "Did you skip the clinical pearls lecture? No drinking with this one!"
    },
    6: {
        q: "What is the generic name for Januvia?",
        options: ["Saxagliptin", "Sitagliptin", "Linagliptin", "Alogliptin"],
        a: "Sitagliptin",
        insult: "Yujin Kim is judging your brand/generic knowledge right now. Do better."
    },
    7: {
        q: "Which of these is the reversal agent for Warfarin?",
        options: ["Protamine", "Naloxone", "Phytonadione (Vitamin K)", "Flumazenil"],
        a: "Phytonadione (Vitamin K)",
        insult: "If you don't know the antidotes, please stay away from the IV room today."
    },
    8: {
        q: "A patient is prescribed 250mg of a drug. You have 1g/10mL. How many mL do you draw up?",
        options: ["2.5 mL", "5 mL", "0.25 mL", "10 mL"],
        a: "2.5 mL",
        insult: "Math error! Jennifer is revoking your calculator privileges."
    },
    9: {
        q: "Which insulin is considered 'Rapid-Acting'?",
        options: ["Lantus", "Humulin N", "Novolog", "Levemir"],
        a: "Novolog",
        insult: "You’re moving slower than NPH insulin. Novolog is the pace we need!"
    },
    10: {
        q: "Calculate the drip rate for 1L NS over 8 hours with a drop factor of 15 gtt/mL.",
        options: ["21", "31", "42", "60"],
        a: "31",
        insult: "A math error at Level 10? Khushboo Patel just shook her head in disappointment."
    }
};

let seconds = 0;
let timerInterval;

// Start timer when the window finishes loading
window.onload = function() {
    startTimer();
};

function startTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
        const secs = (seconds % 60).toString().padStart(2, '0');
        const display = document.getElementById('stopwatch');
        if (display) {
            display.innerText = `${mins}:${secs}`;
        }
    }, 1000);
}

// FIXED: Now correctly updates the text under the slider
function updateDiff(val) {
    const label = document.getElementById('diffLabel');
    if (label) {
        label.innerText = val;
    }
}

// FIXED: Correctly finds the slider value and renders the question
function generateQuestion() {
    const diffElement = document.getElementById('difficulty');
    if (!diffElement) return;

    const diff = Number(diffElement.value);
    const quizArea = document.getElementById('quiz-area');
    const data = questions[diff];

    if (!data) {
        quizArea.innerHTML = `<p>Level ${diff} is still being stocked...</p>`;
        return;
    }

    quizArea.innerHTML = `
        <div class="question-box" style="background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); margin-top: 20px;">
            <h3 style="color: #2c3e50;">Level ${diff}: Clinical Challenge</h3>
            <p style="font-size: 1.1rem; margin-bottom: 20px;">${data.q}</p>
            <div class="options-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                ${data.options.map(opt => `
                    <button style="margin-top: 0;" onclick="checkAnswer('${opt}', '${data.a}', '${data.insult}')">${opt}</button>
                `).join('')}
            </div>
        </div>
    `;
}

function checkAnswer(selected, correct, insult) {
    if (selected === correct) {
        alert("Correct! Keep moving technician.");
        generateQuestion(); // Refresh with a new question at the same level
    } else {
        alert(insult);
    }
}
