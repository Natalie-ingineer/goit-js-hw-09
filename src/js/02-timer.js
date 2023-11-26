import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button');

// let timerId = null;
// let targetDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > new Date()) {
      startBtn.disabled = false;
    } else {
      window.alert('Please choose a date in the future');
      startBtn.disabled = true;
    }
  },
};

flatpickr(input, options);

startBtn.addEventListener('click', targetDateTimer);

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
  return value.toString().padStart(2, '0');
}

// const millisecondsInSecond = 1000;
// const secondsInMinutes = 60;
// const minutesInHour = 60;
// const hoursInDay = 24;

function targetDateTimer() {
  const selectedDate = flatpickr('#datetime-picker').selectedDates[0];
  const currentDate = new Date();

  if (selectedDate > currentDate) {
    let timeDifference = selectedDate.getTime() - currentDate.getTime();
    timerInterval = setInterval(() => {
      const timeRemaining = convertMs(timeDifference);

      document.querySelector('[data-days]').textContent = addLeadingZero(
        timeRemaining.days
      );
      document.querySelector('[data-hours]').textContent = addLeadingZero(
        timeRemaining.hours
      );
      document.querySelector('[data-minutes]').textContent = addLeadingZero(
        timeRemaining.minutes
      );
      document.querySelector('[data-seconds]').textContent = addLeadingZero(
        timeRemaining.seconds
      );

      if (timeDifference <= 0) {
        clearInterval(timerInterval);
        document.querySelector('[data-start]').disabled = true;
      } else {
        timeDifference -= 1000; // віднімання 1 секунди
      }
    }, 1000);
  }
}

// setInterval(() => {
//   const delta = new Date(targetDate) - new Date();

//   const seconds = Math.floor(
//     (delta / millisecondsInSecond) % secondsInMinutes
//   );
//   const minutes = Math.floor(
//     (delta / (millisecondsInSecond * secondsInMinutes)) % minutesInHour
//   );
//   const hours = Math.floor(
//     (delta / (millisecondsInSecond * secondsInMinutes * minutesInHour)) %
//       hoursInDay
//   );
//   const days = Math.floor(
//     delta /
//       (millisecondsInSecond * secondsInMinutes * minutesInHour * hoursInDay)
//   );

//   const timerFormat = `${days}d ${hours}:${minutes}:${seconds}`;

//   renderTimer(timerFormat);
// }, 1000);
// }
// const renderTimer = string => {
//   document.querySelector('span').innerText = string;
// }

// timer(new Date('2024/06/03'));

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     const selectedDate = selectedDates[0];
//     const currentDate = new Date();

//     if (selectedDate <= currentDate) {
//       alert('Please choose a date in the future');
//       document.querySelector('[data-start]').disabled = true;
//     } else {
//       document.querySelector('[data-start]').disabled = false;
//     }
//   },
// };

// flatpickr('#datetime-picker', options);

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }

// let timerInterval;

// document.querySelector('[data-start]').addEventListener('click', () => {
//   const selectedDate = flatpickr('#datetime-picker').selectedDates[0];
//   const currentDate = new Date();

//   if (selectedDate > currentDate) {
//     const timeDifference = selectedDate.getTime() - currentDate.getTime();

//     timerInterval = setInterval(() => {
//       const timeRemaining = convertMs(timeDifference);

//       document.querySelector('[data-days]').textContent = addLeadingZero(
//         timeRemaining.days
//       );
//       document.querySelector('[data-hours]').textContent = addLeadingZero(
//         timeRemaining.hours
//       );
//       document.querySelector('[data-minutes]').textContent = addLeadingZero(
//         timeRemaining.minutes
//       );
//       document.querySelector('[data-seconds]').textContent = addLeadingZero(
//         timeRemaining.seconds
//       );

//       if (timeDifference <= 0) {
//         clearInterval(timerInterval);
//         document.querySelector('[data-start]').disabled = true;
//       } else {
//         timeDifference -= 1000; // віднімання 1 секунди
//       }
//     }, 1000);
//   }
// });
