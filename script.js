const questions = {
    1: { 
        q: "What is the common brand name for Atorvastatin?", 
        options: ["Zocor", "Lipitor", "Livalo", "Crestor"],
        a: "Lipitor", 
        insult: "Back to the counting tray for you! That's Day 1 stuff." 
    },
    5: { 
        q: "Which auxiliary label is most critical for Metronidazole?", 
        options: ["Take with Food", "May Cause Drowsiness", "Avoid Alcohol", "Finish All Medication"],
        a: "Avoid Alcohol", 
        insult: "Did you skip the clinical pearls lecture? No drinking with this one!" 
    },
    10: { 
        q: "Calculate the drip rate for 1L NS over 8 hours with a drop factor of 15 gtt/mL.", 
        options: ["21", "31", "42", "60"],
        a: "31", 
        insult: "A math error? In a pharmacy? Jennifer is going to hear about this." 
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
        quizArea.innerHTML = `<p>Difficulty not loaded yet.</p>`;
        return;
    }

    // Create the question text and a container for the multiple choice buttons
    let html = `<p>${data.q}</p><div class="options-grid">`;

    // Map through the options to create buttons
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
            <h3 class="congrats">Correct! Maybe you *do* deserve that CPhT.</h3>
            <button onclick="generateQuestion()">Next Question</button>
        `;
    } else {
        quizArea.innerHTML = `
            <h3 class="mockery">${roast}</h3>
            <p>The correct answer was: <strong>${correct}</strong></p>
            <button onclick="generateQuestion()">Try Again</button>
        `;
    }
}
