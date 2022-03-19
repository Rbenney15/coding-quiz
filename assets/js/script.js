var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonsElement = document.getElementById("answer-buttons");
var startScreenElement = document.getElementById("start-screen");
var startScreenTextElement = document.getElementById("start-screen-text");
var endScreenElement = document.getElementById("end-screen");
var timerEl = document.getElementById("timer");

var shuffledQuestions, currentQuestionIndex, timeInterval;

var timeLeft = 80;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startScreenElement.classList.add("hide");
  startScreenTextElement.classList.add("hide");
  startButton.classList.add("hide");
  questionContainerElement.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
  clock();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(event) {
  var selectedButton = event.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    endQuiz();
  }
};

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong")
    timeLeft -10;
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function clock() {
  timeInterval = setInterval(function () {
    console.log(timeLeft);
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
    } else {
      timerEl.textContent = "";
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timeInterval);
  console.log(timeLeft)
  
  questionContainerElement.classList.remove("hide");
  questionElement.classList.add('hide')
  answerButtonsElement.classList.add('hide')
  endScreenElement.classList.remove('hide')

}

function saveHighScore() {
    //value from initials input box
    var intials = "";
    var highScore = timeLeft; 
    //if statement to check if the box is empty
    intials != "";
    //get saved scores from localStorage, if not high scores available set to empty array
    
    //var higScore || "initials", JSON.parse(highScore)
    
    //format new score for new user
        //object
    //save to localStorage push HighScores array.push method
    var saveScore = function() {
        localStorage.setItem("intials", JSON.stringify(highScore));
    };
    // go back button
        //window 
}


var questions = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "alerts", correct: true },
      { text: "numbers", correct: false },
    ],
  },
  {
    question:
      "The condition in an if/else statement is enclosed with ___________.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parenthesis", correct: true },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ___________.",
    answers: [
      { text: "numbers & strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal/bash", correct: false },
      { text: "for loops", correct: false },
      { text: "console.log", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____________ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parenthesis", correct: false },
    ],
  },
];