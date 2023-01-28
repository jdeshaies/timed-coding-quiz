var timeEl = document.querySelector(".time");
var mainEl = document.getElementsByTagName(main);
var h1El = document.getElementById("page-heading");
var pEl = document.getElementById("quiz-info")
var startButton = document.getElementById("start-button")
var secondsLeft = 10;


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