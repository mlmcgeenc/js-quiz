timeLeftEl = document.getElementById("time-left");
mainEl = document.getElementById("main");
titleEl = document.getElementById("title");
contentEl = document.getElementById("content");
introEl = document.getElementById("introduction");
startButtonEl = document.getElementById("start-button");
answerChoiceEl = document.querySelectorAll(".button");
answerResultEl = document.getElementById("answer-result");
formEl = document.getElementById("high-score-entry");
highScoresListEl = document.getElementById("scores-list");
var initialTime = 0;
var currentQuestion = 0;
var timeLeft = 0;

var questions = [
	{
		questionText: "Commonly used data types do NOT include:",
		answersList: ["strings", "booleans", "alerts", "numbers"],
		correctAnswerIndex: 2,
	},
	{
		questionText: "The condition in an if/else statement is enclosed with _____.",
		answersList: ["quotes", "curly brackets", "parenthesis", "square brackets"],
		correctAnswerIndex: 2,
	},
	{
		questionText: "Arrays in JavaScript can be used to store _____.",
		answersList: ["numbers and strings", "other arrays", "booleans", "all of the above"],
		correctAnswerIndex: 3,
	},
	{
		questionText: "String values must be enclosed within ___ when being assigned to variables.",
		answersList: ["commas", "curly brackets", "quotes", "parenthesis"],
		correctAnswerIndex: 2,
	},
	{
		questionText: "A very useful tool used during development and debugging for printing content to the debugger is:",
		answersList: ["JavaScript", "terminal/bash", "for loops", "console.log"],
		correctAnswerIndex: 3,
	},
];

timeLeftEl.textContent = initialTime;

var handleQuizStart = function () {
	titleEl.setAttribute("style", "text-align: left;");
	removeIntroContent();
	startTimer();
	getNextQuestion();
};

var removeIntroContent = function () {
	contentEl.removeChild(introEl);
	main.removeChild(startButtonEl);
};

var startTimer = function () {
	timeLeft = 50;
	var timeInterval = setInterval(function () {
		if (timeLeft >= 1 && currentQuestion < questions.length) {
			timeLeft--;
			timeLeftEl.textContent = timeLeft;
		} else {
			clearInterval(timeInterval);
			endGame();
		}
	}, 1000);
};

var addPenalty = function () {
	timeLeft = timeLeft - 10;
};

var getNextQuestion = function () {
	if (currentQuestion < questions.length) {
		titleEl.textContent = questions[currentQuestion].questionText;
		contentEl.appendChild(buildQuestionList());
	} else {
		endGame();
	}
};

var buildQuestionList = function () {
	var answeresContainerEl = document.createElement("ul");
	answeresContainerEl.className = "answer-container";
	answeresContainerEl.id = "answer-container";

	for (i = 0; i < 4; i++) {
		var answerItem = document.createElement("li");
		answerItem.className = "button";
		answerItem.textContent = [i + 1] + ". " + questions[currentQuestion].answersList[i];
		answerItem.setAttribute("data-answer-index", i);

		answeresContainerEl.appendChild(answerItem);
	}
	return answeresContainerEl;
};

var handleAnswer = function (event) {
	oldAnsweres = document.getElementById("answer-container");
	if (parseInt(event.target.dataset.answerIndex) === questions[currentQuestion].correctAnswerIndex) {
		answerResultEl.textContent = "Correct!";
	} else {
		answerResultEl.textContent = "Wrong!";
		addPenalty();
	}
	answerResultEl.setAttribute("style", "display: inline;");
	contentEl.removeChild(oldAnsweres);
	currentQuestion++;
	getNextQuestion();
};

var finalScore = function () {
	if (timeLeft > 0) {
		return timeLeft;
	} else {
		return 0;
	}
};

var endGame = function () {
	titleEl.textContent = "All done!";
	timeLeftEl.textContent = finalScore();
	contentEl.innerHTML = "<p>Your final score is " + finalScore() + " </p>";
	mainEl.removeChild(answerResultEl);
	formEl.style.display = "flex";
};

var handleHighScoreInput = function (event) {
	event.preventDefault();
	if (event.target.matches("#high-score-entry")) {
		var newScore = {
			initials: document.getElementById("player-initials").value,
			score: finalScore(),
		};
	}
	if (localStorage.getItem("highScores")) {
		highScores = JSON.parse(localStorage.getItem("highScores"));
		highScores.push(newScore);
		localStorage.setItem("highScores", JSON.stringify(highScores));
	} else {
		var highScores = [];
		highScores.push(newScore);
		localStorage.setItem("highScores", JSON.stringify(highScores));
	}
	window.location.href = "./high-scores.html";
};

startButtonEl.addEventListener("click", handleQuizStart);
contentEl.addEventListener("click", handleAnswer);
formEl.addEventListener("submit", handleHighScoreInput);
