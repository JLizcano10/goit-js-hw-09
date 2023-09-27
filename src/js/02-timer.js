// Descrito en la documentación
import flatpickr from 'flatpickr';
// Importación adicional de estilos
import 'flatpickr/dist/flatpickr.min.css';

const inputTimePicker = document.querySelector('#datetime-picker');
const startTimeBtn = document.querySelector('button[data-start]');

flatpickr(inputTimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
});
