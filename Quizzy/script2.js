const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        answer: "William Shakespeare"
    },
    {   
        question: "What is the chemical symbol for water?",
        options: ["H2O", "O2", "CO2", "NaCl"],
        answer: "H2O"
    }           

];

const quizContainer = document.getElementById("quiz");
const quizContent = document.getElementById("quiz-content");
const startBtn = document.getElementById("start-btn");

let currentQuestion = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  let questionObj = quizData[currentQuestion];
  quizContent.innerHTML = `
    <h2>${questionObj.question}</h2>
    <div>
      ${questionObj.options.map(option => `
        <button class="btn option-btn">${option}</button>
      `).join("")}
    </div>
    <button id="next-btn" class="btn hidden">Next Question</button>
  `;

  const optionBtns = document.querySelectorAll(".option-btn");
  const nextBtn = document.getElementById("next-btn");

  optionBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      optionBtns.forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      if (btn.textContent === questionObj.answer) {
        score++;
      }

      nextBtn.classList.remove("hidden");
    });
  });

  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showScore();
    }
  });
}

function showScore() {
  quizContent.innerHTML = `
    <h2>Your Score:</h2>
    <p>${score} out of ${quizData.length}</p>
    <button id="restart-btn" class="btn">Restart Quiz</button>
  `;

  document.getElementById("restart-btn").addEventListener("click", startQuiz);
}
