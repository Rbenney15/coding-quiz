//timer
//Quiz questions        
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed with ___________.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis"
    },
    {
        title: "Arrays in JavaScript can be used to store ___________.",
        choices: ["numbers & strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript","terminal/bash","for loops","console.log"],
        answer: "console.log",
    },
    {
        title: "String values must be enclosed within ____________ when being assigned to variables.",
        choices: ["commas","curly brackets","quotes","paranthesis"],
        answer: "quotes",
    }
]; 
//tracking where state of quiz
var currentQuestionIndex = 0;
var time = questions.length * 15;
console.log(time)
var timerId;
//Increment to next question within questions: currentQuestionIndex++;
console.log(questions[currentQuestionIndex].title)


//display title, explanation, start quiz button
    //global var
        //quereyselectors
        var nameEl = document.querySelector("#");
        var nameEl = document.querySelector("#");
        var nameEl = document.querySelector("#");
        var nameEl = document.querySelector("#");
        var nameEl = document.querySelector("#");
//querySelectors
//ids to select
    //question
    //choices
    //hidden or visible
    //submit button to start quiz
    //submit button for choices
    //submit button on high scores
    //feedback for correct and incorrect answers

//   ];      
//"click" start quiz (listener)

function startQuiz() {
//hide start screen
    //querySelector grabs start screen 
    //set attribute give class of hidden
//remove attribute hiding questions using html class 
//start timer
    //timer setInterval
var timerId = setInterval(clock, 1000)
//show timer
    //using text.content to display
timerEl.textContent = time
//call function getQuestions()
getQuestion();
};

function getQuestion() {
    //populate first question from array
    var currentQuestion = questions[currentQuestionIndex];
    //update title to question name
        //querySelector to grab question titleEl 
        //show question and choices with text.content
    //clear any old questions choices
    var answer = "";
    answer = [];
    //loop over choices
    for (var i = 0; i < questions.length; i++) {
        var answer = "";
        answer = [];
        for (questions[i].answer) {
            answer.push()
        }
    }


        //for loop currentQUestion.choices
        //create button for each choice
            //set attribute class for each choice
        //event listener for each choice
            //calls next function userClick()
        //display it on the page appending to button      
}

function userClick() {
    //check if user guessed wrong (if statement)
        //this.value statement !== is for not equals to
    //if wrong penalize time
        //subtract 15 seconds
    //display updated new time using similar to 
    //if (correct answer selected) insert feedback "correct!"
    //currentQuestionIndex = questions.length
    currentQuestion++;
    //check if we run out of questions
        //if currentQuestionIndex === question.length
            //no more questions run end quiz function
        //else more questions available run getQuestion()
}

function endQuiz() {
    //stop timer
        //clearInterval timeId
    //show end screen
        //get element and grab attribute to display results page
    //show final score finalScoreEl
        //time as text.content for final score
    //hide question
}

function clock() {
    //update time
    time--;
    timerEl.textContent = time;
    //check if user ran out of time
    if (time <= 0) {
        endQuiz();
    }
}

function saveHighScore() {
    //value from initials input box
    var intials = ""; 
    //if statement to check if the box is empty
    intials != "";
    //get saved scores from localStorage, if not high scores available set to empty array
    // var higScore || ""
    //format new score for new user
        //object
    //save to localStorage push HighScores array.push method
        //set item on localStorage
        //JSON
        var saveScore = function() {
            localStorage.setItem("intials", JSON.stringify(highScore));
          };
    // go back button
        //window 
}

//click event listener to start quiz
//event listener to save highScore