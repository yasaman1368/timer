const timerDisplay = document.querySelector(".my-timer");
const audioEye = document.querySelector('.eye-1');
const audioRest = document.querySelector('.rest-10');
const startBtn = document.querySelector('.start-timer');
const downCount20 = document.querySelector('.downcount-20');
const downCount40 = document.querySelector('.downcount-40');
const resetTimer = document.querySelector('.reset-timer');
const resetDiv = document.querySelector('.reset-div');
const pauseTimer = document.querySelector('.pause-timer');
let levelOne = 1200;
let timerInterval;
let workTime = localStorage.getItem('workTime') || 0;
let workTimeDiv = workTime.toString().padStart(2, '0');
resetDiv.innerHTML = workTimeDiv;





function timer() {
    audioRest.pause();
    let timerValue = 2460;
    levelOne = 1200;
    downCount20.innerHTML = levelOne;


    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timerValue--;
        levelOne--;
        downCount20.innerHTML = levelOne;

        if (timerValue === 0) {
            audioRest.play();
            clearInterval(timerInterval);
        } else if (timerValue > 1200 && timerValue <= 1260) {
            audioEye.play();
        } else if (timerValue === 1200) {
            audioEye.pause();
            workTime++;
            localStorage.setItem('workTime', workTime);
            resetDiv.innerHTML = workTime.toString().padStart(2, '0');
        }
    }, 1000);
}

function reset() {
    localStorage.removeItem('workTime');
    workTime = 0;
    resetDiv.innerHTML = workTime.toString().padStart(2, '0');
}
function pause() {
    clearInterval(timerInterval);
    let pauseFlag = true

    if (pauseFlag) {

    } else {

    }


}

startBtn.addEventListener('click', timer);
resetTimer.addEventListener('click', reset);
pauseTimer.addEventListener('click', pause)