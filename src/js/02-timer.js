const millisecondsInSecond = 1000;
const secondsInMinutes = 60;
const minutesInHour = 60;
const hoursInDay = 24;

const timer = targetDate => {
  setInterval(() => {
    const delta = new Date(targetDate) - new Date();

    const seconds = Math.floor(
      (delta / millisecondsInSecond) % secondsInMinutes
    );
    const minutes = Math.floor(
      (delta / (millisecondsInSecond * secondsInMinutes)) % minutesInHour
    );
    const hours = Math.floor(
      (delta / (millisecondsInSecond * secondsInMinutes * minutesInHour)) %
        hoursInDay
    );
    const days = Math.floor(
      delta /
        (millisecondsInSecond * secondsInMinutes * minutesInHour * hoursInDay)
    );

    const timerFormat = `${days}d ${hours}:${minutes}:${seconds}`;

    renderTimer(timerFormat);
  }, 1000);
};
const renderTimer = string => {
  document.querySelector('span').innerText = string;
};

timer(new Date('2024/06/03'));
