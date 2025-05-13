// 5 falsy values are values that are not actually  false but becomes false when we try to convert them to a boolean. These are : 0, "", []-undefined, {}-null, and None-NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Husayn"));
console.log(Boolean({}));
console.log(Boolean(""));

const baby = 0;
if (baby) {
  console.log("You should get baby food.");
} else {
  console.log("You should get a wife first.");
}

let height;
if (height) {
  console.log("Yay!, height is Defined");
} else {
  console.log("Nah! height is Undefined");
}

const age = 18;
if (age === 18)
  console.log("You have just become an Adult:D (strictly equals to)"); //use this

if (age == 18)
  console.log("You have just become an Adult:D (loosely equals to)"); //causes bugs

const fav = Number(prompt("What's your favourite color?"));
console.log(fav);
console.log(typeof fav);

if (fav === 34) {
  //If the condition is strictly defined, it will be true. However the prompt returns a string, so it will be false. To make it true, we need to convert the prompt to a number using Number()
  console.log(`Nice! ${fav} is an amazing number.`);
} else if (fav == 10) {
  console.log(`Good! ${fav} is an amazing number.`);
} else if (fav == 12) {
  console.log(`Wonderful! ${fav} is an amazing number.`);
} else {
  console.log(`${fav} is not among the amazing numbers`);
}
