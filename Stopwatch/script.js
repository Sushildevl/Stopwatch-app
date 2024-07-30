let startTime, updatedTime, difference, tInterval;
let running = false;
let display = document.getElementById('display');
let startPauseButton = document.getElementById('startPauseButton');
let resetButton = document.getElementById('resetButton');

startPauseButton.addEventListener('click', startPauseTimer);
resetButton.addEventListener('click', resetTimer);

function startPauseTimer() {
  if (!running) {
    startTime = new Date().getTime();
    tInterval = setInterval(updateTime, 10);
    running = true;
    startPauseButton.textContent = 'Pause';
    resetButton.disabled = true;
  } else {
    clearInterval(tInterval);
    running = false;
    startPauseButton.textContent = 'Start';
    resetButton.disabled = false;
  }
}

function resetTimer() {
  clearInterval(tInterval);
  running = false;
  display.textContent = '00:00:00';
  startPauseButton.textContent = 'Start';
  resetButton.disabled = false;
}

function updateTime() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);
  let milliseconds = Math.floor((difference % 1000) / 10);

  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  milliseconds = (milliseconds < 10) ? '0' + milliseconds : milliseconds;

  display.textContent = minutes + ':' + seconds + ':' + milliseconds;
}
