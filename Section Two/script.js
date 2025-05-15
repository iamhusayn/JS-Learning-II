// "use strict";

// let withDriversLicense = false;
// const passTest = true;

// if (passTest) withDriversLicense = true;
// if (withDriversLicense) console.log("Strap your seatbelt");

// const driver = "Windows";

//FUNCTIONS
function logger() {
  console.log("My name is Husayn");
}

//calling, running, invokeing a function
logger();

function fruitProcessor(apples, oranges) {
  //parameters
  const juice = `I made a juice using ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 4); //arguments
console.log(appleJuice);
console.log(fruitProcessor(2, 10));

//Practice 1
// function food(pepper, maggi, salt) {
//   const friedRice = `I made a fried rice using ${pepper} pepper, ${maggi} maggi and ${salt} pinch of salt.`;
//   return friedRice;
// }

// const cook = food(3, 1, 2);
// console.log(cook);

//Practise 2

//Function Vs Expression
//This is called a function Declaration
//It can be calledd before they are defined.

const ageA = family(1990);

function family(birthYear) {
  return 2025 - birthYear;
}
console.log(ageA);

//This is called a Function Expression
const siblings = function (birthYear) {
  return 2025 - birthYear;
};
const ageB = siblings(1990);
console.log(ageA, ageB); //It cannot be called before the are defined. This is because of hoisting.

//Arrow Function
const home = (birthYear) => 2025 - birthYear;
const ageC = home(1990);
console.log(ageC);

const retirementAge = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `Meet ${firstName}, he is due to retires in ${retirement} years from now`;
};

console.log(retirementAge(1967, "Husayn"));
console.log(retirementAge(1995, "Bowale"));

//Calling a function inside a function

// function diceIngredient(ingredients) {
//   return ingredients * 4;
// }

// function prepare(pepper, maggi, salt) {
//   const pepperPieces = diceIngredient(pepper);
//   const maggiPieces = diceIngredient(maggi);
//   const saltPieces = diceIngredient(salt);

//   const friedRice = `I made fried rice using ${pepperPieces} pepper, ${maggiPieces} maggi and ${saltPieces} pinch of salt.`;
//   return friedRice;
// }

// console.log(prepare(3, 2, 1)); //This will return undefined because of the return statement in the diceIngredient function.

//Practice
const realAge = (bYear) => 2050 - bYear;

const yearUntilMarriage = function (bYear, firstName) {
  const nowAge = realAge(bYear);
  const dueAge = 60 - nowAge;

  if (dueAge > 0) {
    console.log(
      `Meet ${firstName}, he is due to marry in ${dueAge} years from now`
    );
    return dueAge;
  } else {
    console.log(`Meet ${firstName}, he is already married`);
    return -1;
  }
};
console.log(yearUntilMarriage(1990, "John"));
console.log(yearUntilMarriage(1985, "Jane"));
