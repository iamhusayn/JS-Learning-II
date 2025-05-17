// "use strict";

let withDriversLicense = false;
const passTest = true;

if (passTest) withDriversLicense = true;
if (withDriversLicense) console.log("Strap your seatbelt");

const driver = "Windows";

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
function food(pepper, maggi, salt) {
  const friedRice = `I made a fried rice using ${pepper} pepper, ${maggi} maggi and ${salt} pinch of salt.`;
  return friedRice;
}

const cook = food(3, 1, 2);
console.log(cook);

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

function diceIngredient(ingredients) {
  return ingredients * 4;
}

function prepare(pepper, maggi, salt) {
  const pepperPieces = diceIngredient(pepper);
  const maggiPieces = diceIngredient(maggi);
  const saltPieces = diceIngredient(salt);

  const friedRice = `I made fried rice using ${pepperPieces} pepper, ${maggiPieces} maggi and ${saltPieces} pinch of salt.`;
  return friedRice;
}

console.log(prepare(3, 2, 1)); //This will return undefined because of the return statement in the diceIngredient function.

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
console.log(yearUntilMarriage(1998, "John"));
console.log(yearUntilMarriage(1940, "Jane"));

//Practise Two
function calcAverage(aveargeScore1, aveargeScore2, aveargeScore3) {
  return (aveargeScore1 + aveargeScore2 + aveargeScore3) / 3;
}
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  // const avgDolphins = scoreDolphins;
  // const avgKoalas = scoreKoalas;
  // const victoryPoint = 2;

  // console.log(avgDolphins, avgKoalas);
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins...");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage(85, 65, 47);
scoreKoalas = calcAverage(128, 837, 86);

console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

//LEARNING ARRAYS
const friends = new Array("Adesewa", "Tosin", "Hassan", "Oloyede");
const familyMembers = ["Mum", "Dad", "Teehay", "Temilola"];
console.log(friends);
console.log(familyMembers);
console.log(friends[1]);
console.log(friends[3]);
console.log(friends.length);
console.log(friends[friends.length - 1]); //find the last element in the array

friends[2] = "Quadri";
console.log(friends); //elements within a variable declared with const in an array are mmutable i.e changed/replaced, because arrays are non-primitive data type.

//Arrays can store different types of data
const Husayn = [
  "Husayn",
  friends,
  ["Rice", "semo", "bananas"],
  2025 - 1991,
  familyMembers,
];
console.log(Husayn);

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018, 1965];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4);

const ages = [age1, age2, calcAge(years[2]), calcAge(years[years.length - 1])];
console.log(ages);
