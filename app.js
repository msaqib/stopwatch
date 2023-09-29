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
    if (state === 0) {
        timerInterval = setInterval(() => {
        time = time + 1
        tim.textContent = time
        }, 1000)    
        btnStart.textContent = 'Pause'
        btnReset.disabled = false    
        state = 1
    }
    else {
        clearInterval(timerInterval)
        btnStart.textContent = 'Resume'
        state = 0
    }
    
}

function reset() {
    clearInterval(timerInterval)
    time = 0
    tim.textContent = time
    btnStart.textContent = 'Start'
    state = 0
}