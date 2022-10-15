const startBtn = document.querySelector('.btn--start');
const resetBtn = document.querySelector('.btn--reset');
const timer = document.querySelector('.timer');

//* Initialize sec, min and hrs
let sec = 0;
let min = 0;
let hrs = 0;

//* Initialize leading zeros to sec, min , hrs
let leadingSec = 0;
let leadingMin = 0;
let leadingHrs = 0;

//* Initialize state for timerInterval and timerStatus
let timerInterval = null;
let timerStatus = 'stopped';

//* Function that starts the stopwatch
function stopwatch() {
  sec++;
  if (sec / 60 === 1) {
    sec = 0;
    min++;
    if (min / 60 === 1) {
      min = 0;
      hrs++;
    }
  }
  sec < 10 ? (leadingSec = `0${sec}`) : (leadingSec = sec);
  min < 10 ? (leadingMin = `0${min}`) : (leadingMin = min);
  hrs < 10 ? (leadingHrs = `0${hrs}`) : (leadingHrs = hrs);

  timer.innerText = `${leadingHrs}:${leadingMin}:${leadingSec}`;
}

startBtn.addEventListener('click', function () {
  if (timerStatus === 'stopped') {
    timerInterval = setInterval(stopwatch, 1000);
    this.innerHTML = ` <ion-icon name="pause-outline"></ion-icon>`;
    this.classList.add('btn--pause');
    timerStatus = 'started';
  } else {
    clearInterval(timerInterval);
    this.innerHTML = ` <ion-icon name="caret-forward-outline"></ion-icon>`;
    this.classList.remove('btn--pause');
    timerStatus = 'stopped';
  }
});

resetBtn.addEventListener('click', function () {
  clearInterval(timerInterval);
  sec = 0;
  min = 0;
  hrs = 0;
  timer.innerHTML = `00:00:00`;
});
