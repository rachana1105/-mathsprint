/* Main application logic.
   Handles:
   - Authentication
   - Selecting topics
   - Loading questions
   - Checking answers
   - Scoring
   - Navigation between screens
*/

let currentUser = localStorage.getItem("name") || null;
let selectedTopics = [];
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let answered = false;

// ========================= AUTH =========================

async function handleLogin() {
    const email = loginEmail.value.trim();
    const password = loginPassword.value.trim();

    const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (data.error) return showError(loginError, data.error);

    localStorage.setItem("token", data.token);
    localStorage.setItem("name", data.name);

    currentUser = data.name;
    showTopicScreen();
}

async function handleSignup() {
    const name = signupName.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();

    const res = await fetch("/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    if (!data.success) {
        showError(signupError, data.error || "Signup failed");
        return;
    }

    alert("Signup successful — please login.");
    switchAuthTab("login");
}

function handleLogout() {
    localStorage.clear();
    currentUser = null;
    showScreen("authScreen");
}

function showTopicScreen() {
    document.getElementById("userName").textContent = currentUser;
    showScreen("topicScreen");
}

// ========================= TOPIC SELECTION =========================

function toggleTopic(topic) {
    const btn = event.target.closest(".topic-btn");

    if (selectedTopics.includes(topic)) {
        selectedTopics = selectedTopics.filter(t => t !== topic);
        btn.classList.remove("selected");
    } else {
        selectedTopics.push(topic);
        btn.classList.add("selected");
    }

    const startBtn = document.getElementById("startBtn");
    const total = selectedTopics.length * 10;

    startBtn.disabled = selectedTopics.length === 0;
    startBtn.textContent = `Start Practice (${total} Questions)`;
}

// ========================= PRACTICE FLOW =========================

function startPractice() {
    // TODO: build currentQuestions from questionBank for each selected topic,
    // shuffle them, and take 10; reset currentQuestionIndex and score to 0.

    showScreen("questionScreen");
    displayQuestion();
}

// ========================= DISPLAY QUESTION =========================

function displayQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) return showResults();

    answered = false;

    const question = currentQuestions[currentQuestionIndex];

    const topic = Object.keys(questionBank).find(t =>
        questionBank[t].some(q => q.q === question.q)
    );

    const difficulty = question.difficulty;

    // Update UI
    document.getElementById("currentTopic").textContent = topic;
    document.getElementById("difficultyLevel").textContent = difficulty.toUpperCase();

    const diffEl = document.getElementById("difficultyLevel");
    diffEl.classList.remove("easy", "moderate", "difficult");
    diffEl.classList.add(difficulty);

    document.getElementById("questionNum").textContent =
        `Question ${currentQuestionIndex + 1}/${currentQuestions.length}`;

    document.getElementById("remaining").textContent =
        currentQuestions.length - currentQuestionIndex - 1;

    document.getElementById("correctCount").textContent = score;

    // IMPORTANT FIX — render full LaTeX / symbols
    document.getElementById("questionText").innerHTML = question.q;

    // Render options
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option-btn");
        btn.innerHTML = option;  // FIXED — allows LaTeX inside options
        btn.onclick = () => checkAnswer(index, question.correct, question.explanation);
        optionsContainer.appendChild(btn);
    });

    document.getElementById("explanation").classList.remove("show");
    document.getElementById("nextBtn").style.display = "none";

    // FIX — re-render MathJax after HTML updates
    if (window.MathJax) MathJax.typesetPromise();
}

// ========================= CHECK ANSWER =========================

function checkAnswer(selected, correct, explanation) {
    if (answered) return;
    answered = true;

    // TODO: mark the correct/wrong option buttons, increment `score` if
    // `selected === correct`, and show the explanation + next button.

    if (window.MathJax) MathJax.typesetPromise();
}

// ========================= NEXT QUESTION =========================

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// ========================= RESULTS =========================

function showResults() {
    // TODO: calculate accuracy from score/currentQuestions.length, update the
    // results UI, and call saveScoreToDB() before showing the results screen.

    showScreen("resultsScreen");
}

// ========================= SAVE SCORE =========================

async function saveScoreToDB(score, total, accuracy, topics) {
    const token = localStorage.getItem("token");

    await fetch("/score/save", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({ score, total, accuracy, topics })
    });
}

// ========================= SCREEN HANDLING =========================

function showScreen(id) {
    document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");

    if (window.MathJax) MathJax.typesetPromise();
}

function switchAuthTab(tab) {
    const loginTab = document.querySelector('.auth-tab:first-child');
    const signupTab = document.querySelector('.auth-tab:last-child');

    if (tab === 'login') {
        loginTab.classList.add('active');
        signupTab.classList.remove('active');
        loginForm.classList.add('active');
        signupForm.classList.remove('active');
    } else {
        signupTab.classList.add('active');
        loginTab.classList.remove('active');
        signupForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

function showError(el, msg) {
    el.textContent = msg;
    el.classList.add("show");
}
function goHome() {
    // Reset state
    selectedTopics = [];
    currentQuestions = [];
    currentQuestionIndex = 0;
    score = 0;

    // Unselect topic buttons UI
    document.querySelectorAll(".topic-btn").forEach(btn => {
        btn.classList.remove("selected");
    });

    // Reset start button
    const startBtn = document.getElementById("startBtn");
    startBtn.disabled = true;
    startBtn.textContent = "Start Practice (0 Questions)";

    // Navigate to topic screen
    showScreen("topicScreen");

    // Rerender MathJax if needed
    if (window.MathJax) MathJax.typesetPromise();
}