timeLeftEl = document.getElementById("time-left");
mainEl = document.getElementById("main");
titleEl = document.getElementById("title");
contentEl = document.getElementById("content");
introEl = document.getElementById("introduction");
startButtonEl = document.getElementById("start-button");
answerResultEl = document.getElementById("answer-result");
var initialTime = 0;
var currentQuestion = 0;
var timeLeft = 0;
var penalty = false;

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
		answersList: [
			"numbers and strings",
			"other arrays",
			"booleans",
			"all of the above",
		],
		correctAnswerIndex: 3,
	},
	{
		questionText:
			"String values must be enclosed within ___ when being assigned to variables.",
		answersList: ["commas", "curly brackets", "quotes", "parenthesis"],
		correctAnswerIndex: 2,
	},
	{
		questionText:
			"A very useful tool used during development and debugging for printing content to the debugger is:",
		answersList: ["JavaScript", "terminal/bash", "for loops", "console.log"],
		correctAnswerIndex: 3,
	},
];

timeLeftEl.textContent = initialTime;

var handleQuizStart = function () {
	removeIntroContent();
	startTimer();
	getNextQuestion();
};

var removeIntroContent = function () {
	contentEl.removeChild(introEl);
	main.removeChild(startButtonEl);
};

var startTimer = function () {
	timeLeft = 30;
	var timeInterval = setInterval(function () {
		timeLeft--;
		if (timeLeft >= 1) {
			timeLeftEl.textContent = timeLeft;
		} else {
			timeLeftEl.textContent = "GAME OVER";
			clearInterval(timeInterval);
		}
	}, 1000);
};

var addPenalty = function () {
		timeLeft = timeLeft - 10;
}

var getNextQuestion = function () {
	if (currentQuestion < questions.length) {
		titleEl.textContent = questions[currentQuestion].questionText;
		contentEl.appendChild(buildQuestionList());
	} else {
		console.log("GAME OVER!");
	}
};

var buildQuestionList = function () {
	var answeresContainerEl = document.createElement("ul");
	answeresContainerEl.className = "answer-container";
	answeresContainerEl.id = "answer-container";

	for (i = 0; i < 4; i++) {
		var answerItem = document.createElement("li");
		answerItem.className = "button";
		answerItem.textContent = questions[currentQuestion].answersList[i];
		answerItem.setAttribute("data-answer-index", i);

		answeresContainerEl.appendChild(answerItem);
	}
	return answeresContainerEl;
};

var handleAnswer = function (event) {
	oldAnsweres = document.getElementById("answer-container");
	if (
		parseInt(event.target.dataset.answerIndex) ===
		questions[currentQuestion].correctAnswerIndex
	) {
		console.log("GOT IT RIGHT");
		answerResultEl.textContent = "CORRECT!";
		contentEl.removeChild(oldAnsweres);
		currentQuestion++;
		getNextQuestion();
	} else {
		console.log("GOT IT WRONG");
		answerResultEl.textContent="WRONG!"
		contentEl.removeChild(oldAnsweres);
		addPenalty();
		currentQuestion++;
		getNextQuestion();
	}
};

startButtonEl.addEventListener("click", handleQuizStart);
contentEl.addEventListener("click", handleAnswer);
