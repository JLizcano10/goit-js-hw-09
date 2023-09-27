// Descrito en la documentación
import flatpickr from 'flatpickr';
// Importación adicional de estilos
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  position: 'center-top',
  closeButton: false,
});
const inputTimePicker = document.querySelector('#datetime-picker');
const startTimeBtn = document.querySelector('button[data-start]');
let days = document.querySelector('span[data-days]');
let hours = document.querySelector('span[data-hours]');
let minutes = document.querySelector('span[data-minutes]');
let seconds = document.querySelector('span[data-seconds]');
let actualDate = new Date().getTime();
let futureDate;
startTimeBtn.disabled = false;
inputTimePicker.disabled = false;

// Flatpickr
flatpickr(inputTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    futureDate = selectedDates[0].getTime();
    let dateInMs = calculateTime(actualDate, futureDate);

    if (dateInMs < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      let dates = convertMs(dateInMs);
      printDatesDOM(dates);
    }
  },
});

function calculateTime(actualDate, futureDate) {
  deltaDate = futureDate - actualDate;
  return deltaDate;
}
function printDatesDOM(dates) {
  days.textContent = addLeadingZero(dates.days);
  hours.textContent = addLeadingZero(dates.hours);
  minutes.textContent = addLeadingZero(dates.minutes);
  seconds.textContent = addLeadingZero(dates.seconds);
}
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
// Events
startTimeBtn.addEventListener('click', e => {
  Notiflix.Notify.success('Sol lucet omnibus');
});
