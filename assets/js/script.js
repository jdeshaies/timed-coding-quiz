var timeEl = document.querySelector(".time");
var mainEl = document.querySelector(".main");
var h1El = document.getElementById("page-heading");
var pEl = document.getElementById("quiz-info");
var startButton = document.getElementById("start-button");
var secondsLeft = 20;
var quizOver = false;

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

startButton.addEventListener("click", function startQuiz() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        quizOver = true;
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);

    displayQuestions();
});

function displayQuestions() {
    // Makes instructions blank and hides start button so they don't appear when quiz starts
    pEl.textContent = "";
    startButton.setAttribute("hidden", true);

    //Loops through the array containing the question objects to populate the header with the question asked and possible choices as buttons in a list
    for (questionNumber = 0; questionNumber < questionsArray.length; questionNumber++){
        var currentQuestion = questionsArray[questionNumber];
        h1El.textContent = currentQuestion.questionAsked;
        var buttonListEl = document.createElement("ul");
        mainEl.appendChild(buttonListEl);
        buttonListEl.setAttribute("class", "button-list");
        for (i=0; i < currentQuestion.questionOptions.length; i++){
            var optionButtonEl = document.createElement("button");
            optionButtonEl.innerHTML = currentQuestion.questionOptions[i];
            var optionListItem = document.createElement("li");
            optionListItem.appendChild(optionButtonEl);
            buttonListEl.appendChild(optionListItem);
            optionButtonEl.addEventListener("click", function() {
                // alert(this.textContent);
                if (this.textContent === currentQuestion.questionAnswer) {
                    alert("Correct");
                } else {
                    alert("Incorrect");
                }
            });
        }

        questionNumber = 5;
    }
};

function sendMessage() {
    h1El.textContent = "All done!";
    pEl.textContent = "Your final score is " + secondsLeft.toString() + ".";
}

 