const timerDisplay = document.querySelector(".my-timer");
const audioEye = document.querySelector('.eye-1');
const audioRest = document.querySelector('.rest-10');
const startBtn = document.querySelector('.start-timer');
const downCount20 = document.querySelector('.downcount-20');
const resetTimer = document.querySelector('.reset-timer');
const resetDiv = document.querySelector('.reset-div');

let levelOne = 1200;
let timerInterval;
let workTime = parseInt(localStorage.getItem('workTime')) || 0;
let startFlag = true;
console.log(localStorage.getItem('timerValue'));

resetDiv.innerHTML = workTime.toString().padStart(2, '0');

function timer(timerValue) {

    timerValue = parseInt(timerValue);
    audioRest.pause();
    downCount20.innerHTML = timerValue;

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerValue--;
        levelOne--;

        downCount20.innerHTML = timerValue;

        if (timerValue === 0) {
            audioRest.play();
            localStorage.removeItem('timerValue');
            clearInterval(timerInterval);
        } else if (timerValue > 1200 && timerValue <= 1260) {
            audioEye.play();
        } else if (timerValue === 1200) {
            audioEye.pause();
            workTime++;
            localStorage.setItem('workTime', workTime);
            resetDiv.innerHTML = workTime.toString().padStart(2, '0');
        }

        currentTime = timerValue;
        localStorage.setItem('timerValue', timerValue);
    }, 1000);
}

function reset() {
    clearInterval(timerInterval);
    localStorage.removeItem('workTime');
    localStorage.removeItem('timerValue');
    workTime = 0;
    resetDiv.innerHTML = workTime.toString().padStart(2, '0');
}

function pauseTimerLL() {
    if (startFlag) {
        startFlag = false;
        let currentTime = localStorage.getItem('timerValue') === null ? 2460 : localStorage.getItem('timerValue');
        timer(currentTime);
        console.log('run :', startFlag, '--', currentTime);
    } else {
        startFlag = true;
        clearInterval(timerInterval);
        console.log('pause: ', startFlag);
    }
}

startBtn.addEventListener('click', pauseTimerLL);
resetTimer.addEventListener('click', reset);