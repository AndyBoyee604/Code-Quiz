// variables for timer
var timer = document.querySelector(".timer");
var timeInterval;
var timeLeft = 75;
// varibales for question
var start = document.querySelector("#startQuiz");
var question = document.querySelector("#question");
var head = document.querySelector(".head");
var title = document.querySelector(".title");
var quizSection = document.querySelector("#quizSection");
var viewHsBtn = document.querySelector(".btn")
var quest = 0;

var selection = document.querySelector("#multipleChoice")

// timer for quiz, start
function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = "TIMER:" + timeLeft;

    if (timeLeft === 0 || quest >= quizQuestions.length) {
      clearInterval(timeInterval);
    }
  }, 1000);
}

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
start.addEventListener("click", function () {
  startTimer();
  showQC();
  head.style.display = "none";
  title.style.display = "none";
  quizSection.classList.remove("hide");
});



//right or wrong answer clicked
var answer = document.querySelector("#answers")
function rightAnswer(event) {
  if (quest >= quizQuestions.length) {
    finished();
    clearInterval(timeInterval);
  } else {
    if (event === quizQuestions[quest].answer) {
      answer.textContent = "Correct!"
     saveLocal()
    } else {
      timeLeft -=2;
      answer.textContent = "Wrong!"
    }
    score = timeLeft;
    quest++;
    showQC();
  }
}
selection.addEventListener("click", function (event) {
  var event = event.target;
  rightAnswer(event.textContent.trim());
});

//change finsihed
var finished = function() {
  selection.remove("#multipleChoice");
  quizSection.remove("#quizSection");
  answer.remove("#answer")

}

//local saves
var submit = document.querySelector("#submit")
var keepScore = 1

var saveLocal = function () {
  if (answer.textContent === "correct!") {
    localStorage.setItem("score", JSON.stringify(keepScore))
    keepScore++;
  }
};
var user = function () {
  var name = document.querySelector("#player")
  var playerName = (name).value;
  localStorage.setItem("name", JSON.stringify(playerName))
};
var HsBoard = function () {
  var shwlead = document.querySelector(".scoreSection")
  shwlead.style.display = "block"
}

submit.addEventListener("click", function () {
  user()
  hide()
  HsBoard()
});

var player = document.querySelector(".HsSection")
var info = function () {
  player.style.display = "block"
}
var hide = function () {
  player.style.display = "none"
}

var userName = localStorage.getItem("name")
var userScore = localStorage.getItem("score")
var scoreBoard = function () {
  var userInfo = document.querySelector("#playerScore")
  userInfo.textContent = userName + userScore;
}

var finished = function () {
  selection.remove("#choices")
  question.remove("question")
  info()
  scoreBoard()
}


//Questions and Choices
var quizQuestions = [
  {
    question: "Commonly used data types DO Not Include:",
    selection: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "The condition in an if / else statement is enclosed with ______.",
    selection: ["quotes", "curly brackets", "paranthesis", "square brackets"],
    answer: "paranthesis"
  },
  {
    question: "Arrays in JavaScript can be used to store ______.",
    selection: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "String values must be enclosed within ______ when being assigned to variables.",
    selection: ["commas", "curly brackets", "quotes", "paranthesis"],
    answer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    selection: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log"
  },
];