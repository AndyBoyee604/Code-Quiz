var timer = document.querySelector(".timer");
var timeInterval;
var timeLeft = 75;
var startQuiz = document.querySelector("#startQuiz");
var question = document.querySelector("#question");
var head = document.querySelector(".head");

var quest = 0

// timer for quiz, start
var startTimer = function () {
  timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "TIMER:" + timeLeft
  }, 1000);
};

// show question and choices
function showQC() {
  if (quest < quizQuestions.length) {
    question.textContent = quizQuestions[quest].question
    c1.textContent = quizQuestions[quest].selection[0];
    c2.textContent = quizQuestions[quest].selection[1];
    c3.textContent = quizQuestions[quest].selection[2];
    c4.textContent = quizQuestions[quest].selection[3];
  }
}

//event listeners
startQuiz.addEventListener("click", function () {
  startTimer();
  showQC();
  head.classList.add("hide");
  

});

//Questions
var quizQuestions = [
  {
    question: "Commonly used data types DO Not Include:",
    selection: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed with ______.",
    selection: ["True", "False", "Maybe", "I don't know"],
    answer: "False"
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    selection: ["<script>", "<js>", "<javascript>", "<JS>"],
    answer: "<script>"
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    selection: ["if i = 5", "if (i == 5)", "if i = 5 then", "if i == 5 then"],
    answer: "if (i == 5) "
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    selection: ["<script name='./xxx.js'>", "<script href='./xxx.js'>", "<script scr='./xxx.js'>", "<script ='./xxx.js'>"],
    answer: "<script scr='./xxx.js'>"
  },
];