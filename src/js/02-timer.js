import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    startBtn: document.querySelector('button[data-start]'),
    timerDays: document.querySelector('span[data-days]'),
    timerHours: document.querySelector('span[data-hours]'),
    timerMinutes: document.querySelector('span[data-minutes]'),
    timerSeconds: document.querySelector('span[data-seconds]'),
}

refs.startBtn.disabled = true;

const options = {
    enableTime: true,
    dateFormat: "Y-m-d H:i",
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
    console.log(selectedDates[0]);
    
    if (selectedDates[0] < new Date()) {
       return Notiflix.Notify.failure("Please choose a date in the future");
     }

    refs.startBtn.disabled = false;

    refs.startBtn.addEventListener('click', () => {
        timer.start();
    });

    const timer = {
        intervalId: null,
              
        start() {
            const startTime = selectedDates[0];
            refs.startBtn.disabled = true;
            this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const time = convertMs(deltaTime);
            console.log(time);
            if (time.seconds === 0 && time.minutes === 0
                && time.hours === 0 && time.days === 0){
                clearInterval(this.intervalId);
            }; 
            updateClockface(time);
            }, 1000);
        },
    };
},};

flatpickr("input#datetime-picker", options);

function updateClockface ({days, hours, minutes, seconds}) {
    refs.timerDays.textContent = `${days}`;
    refs.timerHours.textContent = `${hours}`;
    refs.timerMinutes.textContent = `${minutes}`;
    refs.timerSeconds.textContent = `${seconds}`;
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    const days = addLeadingZero(Math.floor(ms / day));

    const hours = addLeadingZero(Math.floor((ms % day) / hour));
  
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));

    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }

function addLeadingZero(value){
return String(value).padStart(2, '0');}
  