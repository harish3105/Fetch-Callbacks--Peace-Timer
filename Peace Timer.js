let twentySecondBtnEl = document.getElementById("twentySecondsBtn");
let thirtySecondBtnEl = document.getElementById("thirtySecondsBtn");
let fortySecondBtnEl = document.getElementById("fortySecondsBtn");
let oneMinuteBtnEl = document.getElementById("oneMinuteBtn");
let timerTextEl = document.getElementById("timerText");

let secondsLeft = 0;
let timerCompletedText = "Your moment is complete";
let timerId;

function clearPreviousTimers() {
    clearInterval(timerId);
}

twentySecondBtnEl.onclick = function() {
    secondsLeft = 20;
    clearPreviousTimers();
    setTimerAndShow();
};
thirtySecondBtnEl.onclick = function() {
    secondsLeft = 30;
    clearPreviousTimers();
    setTimerAndShow();
};
fortySecondBtnEl.onclick = function() {
    secondsLeft = 40;
    clearPreviousTimers();
    setTimerAndShow();
};
oneMinuteBtnEl.onclick = function() {
    secondsLeft = 60;
    clearPreviousTimers();
    setTimerAndShow();
};

function setTimerAndShow() {
    timerTextEl.textContent = secondsLeft + " seconds Left";
    timerId = setInterval(startTimer, 1000);
}

function startTimer() {
    if (secondsLeft > 1) {
        secondsLeft = secondsLeft - 1;
        timerTextEl.textContent = secondsLeft + " seconds Left";
    } else {
        clearPreviousTimers();
        timerTextEl.textContent = timerCompletedText;
    }
}