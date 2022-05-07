highScoresListEl = document.getElementById("scores-list");
clearHighScoresButtonEl = document.getElementById("clear-scores");

var showScoresList = function () {
	highScores = JSON.parse(localStorage.getItem("highScores"));
	for (i = 0; i < highScores.length; i++) {
		var score = document.createElement("li");
		score.className = "score-card-entry";
		score.textContent =
			[i + 1] + ". " + highScores[i].initials + " - " + highScores[i].score;
		highScoresListEl.appendChild(score);
	}
};

var handleClearHighScores = function () {
	highScores = [];
	localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.reload();
};

showScoresList();
clearHighScoresButtonEl.addEventListener("click", handleClearHighScores);
