timeLeftEl = document.getElementById("time-left");
titleEl = document.getElementById("title");
contentEl = document.getElementById("content");
startButtonEl = document.querySelector("#start-button");
var initialTime = 0;

var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answer1: "strings",
        answer2: "booleans",
        answer3: "alerts",
        answer4: "numbers",
        correctAnswerIndex: 3,
    },
    {
        question: "The condition in an if/else statement is enclosed with _____.",
        answer1: "quotes",
        answer2: "curly brackets",
        answer3: "parenthesis",
        answer4: "square brackets",
        correctAnswerIndex: 2,
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answer1: "numbers and strings",
        answer2: "other arrays",
        answer3: "booleans",
        answer4: "all of the above",
        correctAnswerIndex: 3,
    },
    {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answer1: "commas",
        answer2: "curly brackets",
        answer3: "quotes",
        answer4: "parenthesis",
        correctAnswerIndex: 2,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer1: "JavaScript",
        answer2: "terminal/bash",
        answer3: "for loops",
        answer4: "console.log",
        correctAnswerIndex: 3,
    },
]

timeLeftEl.textContent = initialTime;

var handleQuizStart = function () {
	startTimer();
	titleEl.textContent = "This is a placeholder for the first question.";
	contentEl.innerHTML = "<ol><li>item</li><li>item</li><li>item</li><li>item</li></ol>";
};

var startTimer = function () {
	var timeLeft = 60;
	var timeInterval = setInterval(function () {
		if (timeLeft > 0) {
			timeLeftEl.textContent = timeLeft;
            timeLeft--
		} else {
			timeLeftEl.textContent = "GAME OVER";
			clearInterval(timeInterval);
		}
	}, 1000);
};

startButtonEl.addEventListener("click", handleQuizStart);
