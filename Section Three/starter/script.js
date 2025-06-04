// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = '23';
const calcAge = birthYear => 2023 - birthYear;
console.log(calcAge(1927));

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 15, 14, 9, 5];

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curtemp = temp[i];
    if (typeof curtemp !== 'number') continue;

    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([23, 12, 31, 4, 0, -2, -9]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Coding Challenge - Thinking like a developer/problem solver
const calcTempAmplitudeNew = function (t1, t2) {
  const temp = t1.concat(t2);
  let max = temp[0];
  let min = temp[0];

  for (let i = 0; i < temp.length; i++) {
    const curtemp = temp[i];
    if (typeof curtemp !== 'number') continue;

    if (curtemp > max) max = curtemp;
    if (curtemp < min) min = curtemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew(
  [23, 12, 31, 4, 0, -2, -9],
  [38, -8, -28, 0, 94]
);
console.log(amplitudeNew);

// Debugging with the console and breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number(prompt('Degrees celsius:')),
    value: 10, // Hardcoded for testing
  };

  // console.log(measurement);
  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

//Code challenge - Debugging
const printForecast = function (arr) {
  // let arr = '';
  for (let i = 0; i <= arr.length; i++)
    return `... ${arr[i]}°C in ${i + 1} days ...`;
};

const forecast = printForecast([17, 21, 23]);
// console.log(forecast);

//Practise
//Let's say you're building a time-tracking application for freelancers
const hours = [7.5, 8, 6.5, 0, 8.5, 4, 0];
const days = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'firday',
  'saturday',
  'sunday',
];
const totalWorkhours = days.reduce((a, b) => a + b, 0);
const averageworkhours = Math.trunc(
  hours.reduce((a, b) => a + b, 0) / hours.length
);

//Math.trunc(Number(hours.concat()))
console.log(averageworkhours);

const workingHours = function (days, hours) {
  let max = hours[i];
  let min = hours[i];

  for (let i = 0; i < totalWorkhours; i++) {
    if (hours[i] > max) max = hours[i];
    if (hours[i] < min) min = hours[i];

    for (let i = 0; hoursPerDay === max; i++) {
      return `${days.length[i]} is the highest day worked`;
    }
  }
};

const hoursPerDay = days.concat(hours);
workingHours(32, 12);
console.log(hoursPerDay);
