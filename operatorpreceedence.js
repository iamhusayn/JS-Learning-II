//operator preceedence is not considered here
const now = 2037;
const ageTaiwo = now - 1991;
const ageTemy = now - 2018;

console.log(now - 1991 > now - 2018); // true

//operator preceedence is not considered here
let x, y;
x = y = 30 - 14 - 8;
console.log(x, y);

//operator preceedence is considered here
let a, b;
a = b = 3 ** 4 + 8 - 3;
console.log(a, b); //86 86

//Code Challenge
let markHeight = 1.69;
let markWeight = 78;
let markBMI = markWeight / markHeight ** 2;
console.log(markBMI); //27.309968138370508

let johnHeight = 1.95;
let johnWeight = 92;
let johnBMI = johnWeight / johnHeight ** 2;
console.log(johnBMI); //24.194608809993426

console.log((markHigherBMI = markBMI > johnBMI)); //true
