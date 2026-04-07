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

function updateDiff(val) {
    document.getElementById('diffLabel').innerText = val;
}

function generateQuestion() {
    const diff = document.getElementById('difficulty').value;
    const quizArea = document.getElementById('quiz-area');
    const data = questions[diff];

    if (!data) {
        quizArea.innerHTML = `<p>Difficulty level ${diff} coming soon!</p>`;
        return;
    }

    let html = `<p class="question-text"><strong>Level ${diff}:</strong> ${data.q}</p><div class="options-grid">`;

    data.options.forEach(option => {
        html += `<button class="option-btn" onclick="checkAnswer('${option}', '${data.a}', '${data.insult}')">${option}</button>`;
    });

    html += `</div>`;
    quizArea.innerHTML = html;
}

function checkAnswer(selected, correct, roast) {
    const quizArea = document.getElementById('quiz-area');
    
    if (selected === correct) {
        quizArea.innerHTML = `
            <div class="result-box success">
                <h3>Correct! Maybe you *do* deserve that CPhT.</h3>
                <button class="next-btn" onclick="generateQuestion()">Next Challenge</button>
            </div>
        `;
    } else {
        quizArea.innerHTML = `
            <div class="result-box failure">
                <h3 class="mockery">${roast}</h3>
                <p>The correct answer was: <strong>${correct}</strong></p>
                <button class="next-btn" onclick="generateQuestion()">Try Again</button>
            </div>
        `;
    }
}
