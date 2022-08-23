const modOne = (dedline) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
//----------------------------------------------------------------------------
    
    const getTimeRemaining = () => {
        let dateStop = new Date(dedline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000 + 5300;
        let seconds = 0;
        let minutes = 0;
        let hours = 0;
        if (timeRemaining > 0) {
            seconds = Math.floor(timeRemaining % 60);
            minutes = Math.floor((timeRemaining / 60) % 60);
            hours = Math.floor(timeRemaining / 60 / 60);
        }
        return {timeRemaining, hours, minutes, seconds
        };
    };
//--------------------------------------------------------------------------------

    const updateClock = () => {
        let timer = getTimeRemaining();
        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
        if (timerHours.textContent < 10) {
            timerHours.textContent = "0" + timerHours.textContent
        }
        if (timerSeconds.textContent < 10) {
            timerSeconds.textContent = "0" + timerSeconds.textContent
        }
        if (timerMinutes.textContent < 10) {
            timerMinutes.textContent = "0" + timerMinutes.textContent
        }
        
        if (timer.timeRemaining < 0) {
            clearInterval(setInterval(updateClock, 1000));
            
        }
    };
    setInterval(updateClock, 1000);
};

export default modOne('24 aug 2022')