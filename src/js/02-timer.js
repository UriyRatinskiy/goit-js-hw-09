import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    timerInput: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    day: document.querySelector('span.value[data-days]'),
    hour: document.querySelector('span.value[data-hours]'),
    minute: document.querySelector('span.value[data-minutes]'),
    second: document.querySelector('span.value[data-seconds]'),
};
console.log(refs);

refs.btnStart.addEventListener('click', onBtnStart),
refs.btnStart.disabled = true;

let futureTime = null;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      futureTime = selectedDates[0].getTime();

        if (selectedDates[0] <= options.defaultDate) {
            refs.btnStart.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            refs.btnStart.disabled = false;
            return futureTime;
        }
    },
  };
  const fp = flatpickr(refs.timerInput, options)

  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function onBtnStart() {
    setInterval(() => {
        const currentTime = Date.now();
        const remainingTime = futureTime - currentTime;

        if (remainingTime < 0) {
            return
        } else {
            const { days, hours, minutes, seconds } = convertMs(remainingTime);
            refs.day.textContent = addLeadingZero(days);
            refs.hour.textContent = addLeadingZero(hours);
            refs.minute.textContent = addLeadingZero(minutes);
            refs.second.textContent = addLeadingZero(seconds);
        }
    }, 1000)
}