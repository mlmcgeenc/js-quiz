timeLeftEl = document.getElementById("time-left");
titleEl = document.getElementById("title");
contentEl = document.getElementById("content");
startButtonEl = document.querySelector("#start-button");
var initialTime = 0;

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
