var timeEl = document.querySelector(".time");
var mainEl = document.querySelector(".main");
var h1El = document.getElementById("page-heading");
var pEl = document.getElementById("quiz-info")
var startButton = document.getElementById("start-button")
var secondsLeft = 5;

var questionsArray = [
    {
        questionAsked:"Commonly used data types DO NOT include:",
        questionOptions:["strings","booleans","alerts","numbers"],
        questionAnswer:"alerts"
    },
    {
        questionAsked:"The condition in an if / else statement is enclosed with __________.",
        questionOptions:["quotes","curly brackets","paranthesis","square brackets"],
        questionAnswer:"paranthesis"
    },
    {
        questionAsked:"Arrays in JavaScript can be used to store _________.",
        questionOptions:["numbers and strings","other arrays","booleans","all of the above"],
        questionAnswer:"all of the above"
    },
    {
        questionAsked:"String values must be enclosed within __________ when being assigned to variables.",
        questionOptions:["commas","curly brackets","quotes","paranthesis"],
        questionAnswer:"quotes"
    }
];

startButton.addEventListener("click", function startTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);

    displayQuestions();
  });
  
  function displayQuestions() {
    pEl.setAttribute("hidden", true);
    startButton.setAttribute("hidden", true);
    var questionNumber = 0;
    var currentQuestion = questionsArray[questionNumber];
    var questionListEl = document.createElement("ol");

    while (questionNumber < 1) {
        h1El.textContent = currentQuestion.questionAsked;
        for (var i=0; i < currentQuestion.questionOptions.length; i++){
            var questionOptionEl = document.createElement("li");
            questionOptionEl.append(currentQuestion.questionOptions[i]);
            questionListEl.append(questionOptionEl);
        }
        mainEl.append(questionListEl);
        questionNumber++;
    }
  }

  function sendMessage() {
    h1El.textContent = "All done!";  
    pEl.textContent = "Your final score is " + secondsLeft.toString() + ".";
}

 