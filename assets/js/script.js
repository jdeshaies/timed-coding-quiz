var timeEl = document.querySelector(".time");
var mainEl = document.querySelector(".main");
var h1El = document.getElementById("page-heading");
var pEl = document.getElementById("quiz-info");
var startButton = document.getElementById("start-button");
var secondsLeft = 60;
var optionsListEl = document.getElementById("button-list");
optionsListEl.style.display = "none";
var optionListItemEl = optionsListEl.getElementsByTagName("li");
var optionButtonEl = optionsListEl.getElementsByTagName("button");
var submitScoreEl = document.querySelector(".submit-score");
submitScoreEl.style.display = "none";
var nextQuestion = true;
var finalScore = 0;

// for (var i = 0; i < optionButtonEl.length; i++){
//     console.log(optionButtonEl[i].textContent);
// }
var quizOver = false;
questionNumber = 0;
var answer = "";

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

var currentQuestion = questionsArray[questionNumber];

startButton.addEventListener("click", function startQuiz() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft;
  
      if(secondsLeft === 0 || secondsLeft < 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        quizOver = true;
        // Calls function to create and append image
        endGame();
      }
  
    }, 1000);

    // Makes instructions blank and hides start button so they don't appear when quiz starts
    pEl.textContent = "";
    startButton.setAttribute("hidden", true);
    
    displayQuestions(); //Try seperate functions like check answer and add questionNumber++ after this
});

function displayQuestions() {
    //Loops through the array containing the question objects to populate the header with the question asked and possible choices as buttons in a list
    currentQuestion = questionsArray[questionNumber];
    h1El.textContent = currentQuestion.questionAsked;
    optionsListEl.style.display = "block";
    console.log("Question Number: " + questionNumber);
    console.log("Current question asked: " + currentQuestion.questionAsked);
    for (i=0; i < currentQuestion.questionOptions.length; i++){
        optionButtonEl[i].textContent = currentQuestion.questionOptions[i];
        console.log("Button: " + optionButtonEl[i].textContent);
        optionButtonEl[i].addEventListener("click", function(event) {
            event.preventDefault;
            var answer = this.textContent;
            console.log(answer);
            checkAnswer(answer);
        });
    }
};

function checkAnswer(answer) {
    console.log("answer picked: " + answer);
    console.log("Correct answer: " + currentQuestion.questionAnswer);
    if (answer === currentQuestion.questionAnswer) {
        alert("Correct");
    } else {
        alert("Incorrect");
        secondsLeft -= 15;
    }
    questionNumber++;
    console.log(questionNumber);
    displayQuestions();
}

function endGame() {
    finalScore = secondsLeft.toString();
    optionsListEl.style.display = "none";
    h1El.textContent = "All done!";
    pEl.textContent = "Your final score is " + finalScore + ".";
    submitScoreEl.style.display = "block";
    
}

function saveHighScore(score) {

}
 