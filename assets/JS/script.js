timeLeftEl = document.getElementById("time-left");
mainEl = document.getElementById("main");
titleEl = document.getElementById("title");
contentEl = document.getElementById("content");
introEl = document.getElementById("introduction");
startButtonEl = document.getElementById("start-button");
var initialTime = 0;
var currentQuestion = 0;

var questions = [
	{
		questionText: "Commonly used data types do NOT include:",
		answersList: ["strings", "booleans", "alerts", "numbers"],
		correctAnswerIndex: 3,
	},
	{
		questionText: "The condition in an if/else statement is enclosed with _____.",
		answer1: "quotes",
		answer2: "curly brackets",
		answer3: "parenthesis",
		answer4: "square brackets",
		correctAnswerIndex: 2,
	},
	{
		questionText: "Arrays in JavaScript can be used to store _____.",
		answer1: "numbers and strings",
		answer2: "other arrays",
		answer3: "booleans",
		answer4: "all of the above",
		correctAnswerIndex: 3,
	},
	{
		questionText:
			"String values must be enclosed within ___ when being assigned to variables.",
		answer1: "commas",
		answer2: "curly brackets",
		answer3: "quotes",
		answer4: "parenthesis",
		correctAnswerIndex: 2,
	},
	{
		questionText:
			"A very useful tool used during development and debugging for printing content to the debugger is:",
		answer1: "JavaScript",
		answer2: "terminal/bash",
		answer3: "for loops",
		answer4: "console.log",
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
	var timeLeft = 60;
	var timeInterval = setInterval(function () {
		if (timeLeft > 0) {
			timeLeftEl.textContent = timeLeft;
			timeLeft--;
		} else {
			timeLeftEl.textContent = "GAME OVER";
			clearInterval(timeInterval);
		}
	}, 1000);
};

var getNextQuestion = function () {
	titleEl.textContent = questions[currentQuestion].questionText;
	contentEl.appendChild(buildQuestionList());
};

var buildQuestionList = function () {
	var answeresContainer = document.createElement("ul");
	answeresContainer.className = "answer-container";

	for (i = 0; i < 4; i++) {
		var answerItem = document.createElement("li");
		answerItem.className = "button";
		console.log(questions[currentQuestion].answersList[i]);
		answerItem.textContent = questions[currentQuestion].answersList[i];
		answerItem.setAttribute("data-answer-index", i);

		answeresContainer.appendChild(answerItem);
	}
	currentQuestion++;
	return answeresContainer;
};

startButtonEl.addEventListener("click", handleQuizStart);
