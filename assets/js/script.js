var timeEl = document.querySelector(".time");
var mainEl = document.getElementsByTagName(main);
var h1El = document.getElementById("page-heading");
var pEl = document.getElementById("quiz-info")
var startButton = document.getElementById("start-button")
var secondsLeft = 10;

var questionsArray = [
    {
        question1Asked:"Commonly used data types DO NOT include:",
        question1Options:["strings","booleans","alerts","numbers"],
        question1Answer:"alerts"
    },
    {
        question2Asked:"The condition in an if / else statement is enclosed with __________.",
        question2Options:["quotes","curly brackets","paranthesis","square brackets"],
        question2Answer:"paranthesis"
    },
    {
        question3Asked:"Arrays in JavaScript can be used to store _________.",
        question3Options:["numbers and strings","other arrays","booleans","all of the above"],
        question3Answer:"all of the above"
    }
    {
        question4Asked:"String values must be enclosed within __________ when being assigned to variables.",
        question4Options:["commas","curly brackets","quotes","paranthesis"],
        question4Answer:"quotes"
    }
]


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
  });
  
  // Function to create and append colorsplosion image
  function sendMessage() {
    h1El.textContent = "All done!"  
    pEl.textContent = "Your final score is " + secondsLeft.toString() + ".";

  }
  
  setTime();