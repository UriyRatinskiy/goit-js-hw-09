import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    taimerInput: document.querySelector('#datetime-picker'),
    btnStart: document.querySelector('button[data-start]'),
    day: document.querySelector('span.value[data-days]'),
    hour: document.querySelector('span.value[data-hours]'),
    minut: document.querySelector('span.value[data-minutes]'),
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
      console.log(selectedDates[0]);
    },
  };