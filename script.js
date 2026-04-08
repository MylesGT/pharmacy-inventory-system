:root {
    --primary-blue: #2c3e50;
    --medical-blue: #3498db;
    --success-green: #27ae60;
    --bg-light: #f4f7f6;
}

body {
    font-family: 'Segoe UI', sans-serif;
    background: linear-gradient(-45deg, #f4f7f6, #e1e8e7, #ffffff, #d6e0df);
    background-size: 400% 400%;
    animation: gradientPulse 15s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

@keyframes gradientPulse {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.container {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    width: 100%;
    max-width: 450px;
    text-align: center;
    border-top: 8px solid var(--medical-blue);
    transition: all 0.3s ease;
}

.correct-flash {
    animation: flash-green 0.6s ease-out;
}

@keyframes flash-green {
    0% { box-shadow: 0 0 0px var(--success-green); }
    50% { box-shadow: 0 0 30px var(--success-green); border-color: var(--success-green); transform: scale(1.02); }
    100% { box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
}

#diffLabel {
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--medical-blue);
    margin: 10px 0;
    transition: all 0.2s ease;
    display: inline-block;
}

.difficulty-box {
    margin: 25px 0;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 10px;
}

button {
    background-color: var(--primary-blue);
    color: white;
    border: none;
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
    margin-top: 10px;
    transition: 0.2s;
}

button:hover { background-color: #1a252f; }

#stopwatch {
    position: fixed;
    top: 20px;
    right: 20px;
    background: white;
    padding: 10px;
    border: 2px solid var(--primary-blue);
    border-radius: 8px;
}
