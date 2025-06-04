//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
const number = Math.trunc(Math.random() * 100 + 1);
// console.log(number);
function evenOrOdd(number) {
  if (number % 2 === 0) {
    return `Even`;
  } else {
    return `Odd`;
  }
}

evenOrOdd(number);
