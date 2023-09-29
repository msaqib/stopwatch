const tim = document.getElementById('time')

const btnStart = document.getElementById('start')
const btnReset = document.getElementById('reset')

// initially, the timer is stopped
let state = 0
// the initial timer value
let time = 0

let timerInterval

btnStart.addEventListener('click', startStop)
btnReset.addEventListener('click', reset)

function startStop() {
    console.log('Start')
    timerInterval = setInterval(() => {
        time = time + 1
        tim.textContent = time
    }, 1000)    
    btnStart.textContent = 'Pause'
    btnReset.disabled = false
}

function reset() {
    console.log('Stop')
    clearInterval(timerInterval)
    time = 0
    tim.textContent = time
}