import flatpickr from 'flatpickr';
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
let dateInMilliseconds;
startTimeBtn.disabled = true;
inputTimePicker.disabled = false;

// Flatpickr
flatpickr(inputTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    futureDate = selectedDates[0].getTime();
    dateInMilliseconds = calculateTime(actualDate, futureDate);

    if (dateInMilliseconds < 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      startTimeBtn.disabled = false;
    }
  },
});

function calculateTime(actualDate, futureDate) {
  deltaDate = futureDate - actualDate;
  return deltaDate;
}

function printElementDate(date) {
  days.textContent = date.days;
  hours.textContent = date.hours;
  minutes.textContent = date.minutes;
  seconds.textContent = date.seconds;
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function timeStart() {
  Notiflix.Notify.success('Sol lucet omnibus');
  inputTimePicker.disabled = true;
  startTimeBtn.disabled = true;
  console.log(dateInMilliseconds);

  if (dateInMilliseconds > 0) {
    let millisecondsReference = 1000;
    const timeInterval = setInterval(() => {
      dateInMilliseconds = dateInMilliseconds -= millisecondsReference;
      if (dateInMilliseconds <= 0) {
        clearInterval(timeInterval);
        dateInMilliseconds = 0;
        startTimeBtn.disabled = false;
        inputTimePicker.disabled = false;
      }
      let dateObject = convertMs(dateInMilliseconds);
      printElementDate(dateObject);
    }, millisecondsReference);
  }
}
// Events
startTimeBtn.addEventListener('click', timeStart);
