const questions = {
    1: { q: "What is the common brand name for Atorvastatin?", a: "Lipitor", insult: "Back to the counting tray for you! That's Day 1 stuff." },
    5: { q: "Which auxiliary label is most critical for Metronidazole?", a: "Avoid Alcohol", insult: "Did you skip the clinical pearls lecture? No drinking with this one!" },
    10: { q: "Calculate the drip rate for 1L NS over 8 hours with a drop factor of 15 gtt/mL.", a: "31", insult: "A math error? In a pharmacy? Jennifer is going to hear about this." }
};

function updateDiff(val) {
    document.getElementById('diffLabel').innerText = val;
}

function generateQuestion() {
    const diff = document.getElementById('difficulty').value;
    const quizArea = document.getElementById('quiz-area');
    
    // Logic to pick a question based on difficulty
    const data = questions[diff] || { q: "Difficulty not loaded yet.", a: "N/A", insult: "Error 404: Brain not found." };
    
    quizArea.innerHTML = `
        <p>${data.q}</p>
        <input type="text" id="userAnswer" placeholder="Your answer...">
        <button onclick="checkAnswer('${data.a}', '${data.insult}')">Submit</button>
    `;
}

function checkAnswer(correct, roast) {
    const userAns = document.getElementById('userAnswer').value;
    const quizArea = document.getElementById('quiz-area');
    
    if(userAns.toLowerCase() === correct.toLowerCase()) {
        quizArea.innerHTML = `<h3 class="congrats">Correct! Maybe you *do* deserve that CPhT.</h3>`;
    } else {
        quizArea.innerHTML = `<h3 class="mockery">${roast}</h3><p>Correct answer: ${correct}</p>`;
    }
}
