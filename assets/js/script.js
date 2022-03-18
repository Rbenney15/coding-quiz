//display title, explanation, start quiz button
    //global var
        //quereyselectors
var startbtnEl = document.querySelector("#start-btn");
var questionsEl = document.querySelector("#questions");
var titleEl = document.querySelector("#title");
var choicesEl = document.querySelector("#choice");
var startScreenEl = document.querySelector("#start-screen");
var timerEl = document.querySelector("#timer")
//querySelectors
//ids to select
    //question
    //choices
    //hidden or visible
    //submit button to start quiz
    //submit button for choices
    //submit button on high scores
  
//"click" start quiz (listener)
startbtnEl.addEventListener('click', startQuiz)

function startQuiz() {
    startbtnEl.classList.add('hide')
    questionsEl.classList.remove('hide')
    startScreenEl.classList.add('hide')
    currentQuestion = 0
//hide start screen
    //querySelector grabs start screen 
    //set attribute give class of hidden
//remove attribute hiding questions using html class 
//start timer
clock();
    //Do I have to define the timer inside of start quiz or can I call a 
    //function called clock that will activate the clock?
    //timer setInterval
var timerId = setInterval(clock, 1000)
//show timer
    //using text.content to display
timerEl.textContent = timerId
//call function getQuestions()
nextQuestion();
};

function nextQuestion() {
    //populate first question from array
    var currentQuestion = questions[currentQuestionIndex];
    titleEl.textContent = currentQuestion.title;
    console.log(currentQuestion)
    console.log(currentQuestion.choices)
    //update title to question name
        //querySelector to grab question titleEl 
        //show question and choices with text.content
    //clear any old questions choices
    resetState()
    //loop over choices
    for (var i = 0; i < questions.length; i++) {
        var choiceBtn = document.createElement("button")
        button.innerText = choice.text
        button.classList.add('btn')
        if (choice.correct){
            button.dataset.correct = choice.correct
        }
        button.addEventListener('click', userClick)
        choicesEl.appendChild(choicesEl)
        choicesEl.appendChild(choicesEl)
        choicesEl.appendChild(choicesEl)
        choicesEl.appendChild(choicesEl)


        choiceBtn.setAttribute("class", "choice")
        choiceBtn.setAttribute("value", choice)
        choicesEl.setAttribute ()
        
    }

        //for loop currentQUestion.choices
        //create button for each choice
            //set attribute class for each choice
        //event listener for each choice
            //calls next function userClick()
        //display it on the page appending to button      
};
//clear any old question choices
function resetState() {
    choicesEl.innerText = choicesEl.text;
    answer = [];
}

function userClick(event) {
    var selectedButton = event.target
    var correct = selectedButton.dataset.correct
    //check if user guessed wrong (if statement)
    if (wrong) {
        element.classList.add('wrong')
    } else {
        element.classList.add('correct')
    }
        //this.value statement !== is for not equals to
    //if wrong penalize time
        //subtract 15 seconds
    //display updated new time 
    currentQuestionIndex = questions.length
    currentQuestion++;
    //check if we run out of questions
    if (currentQuestionIndex === question.length) {
        endQuiz();
    }

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
    // var timeInterval = setInterval(function () {
    //     // As long as the `timeLeft` is greater than 1
    //     if (timeLeft > 1) {
    //       // Set the `textContent` of `timerEl` to show the remaining seconds
    //       timerEl.textContent = timeLeft + ' seconds remaining';
    //       // Decrement `timeLeft` by 1
    //       timeLeft--;
    //     } else if (timeLeft === 1) {
    //       // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
    //       timerEl.textContent = timeLeft + ' second remaining';
    //       timeLeft--;
    //     } else {
    //       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
    //       timerEl.textContent = '';
    //       // Use `clearInterval()` to stop the timer
    //       clearInterval(timeInterval);
    //       // Call the `displayMessage()` function
    //       displayMessage();
    //     }
    //   }, 1000);

};

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
//tracking where state of quiz is
var currentQuestionIndex = 0;
var time = questions.length * 15;
console.log(time)
var timerId;
//Increment to next question within questions: currentQuestionIndex++;
console.log(questions[currentQuestionIndex].title)

//click event listener to start quiz
//event listener to save highScore