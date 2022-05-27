var timer = document.querySelector(".timer");
var timeInterval;
var timeLeft = 75;
var startQuiz = document.querySelector(".btn");


// timer for quiz, start
var startTimer = function() {
  timeInterval = setInterval(function(){
    timeLeft--;
    timer.textContent = "TIMER:"+ timeLeft
  }, 1000);
};

//event listeners
startQuiz.addEventListener("click", function() {
  startTimer();
});