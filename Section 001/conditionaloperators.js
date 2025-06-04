const age = 30;
// age >= 18
//   ? console.log("You are an Adult")
//   : console.log("You are not an Adult"); //Tenary Operator

//An operator always produces a value. In other words a tenary operator is an expression.
const person = age >= 18 ? "Adult" : "Not an Adult";
console.log(person);

//further more
console.log(`Husayn is an ${age >= 18 ? "Adult" : "Not an Adult"}`);

//code challenge

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const totalValue = bill + tip;

console.log(
  `The bill is ${bill}, the tip is ${tip} and the total value is ${totalValue}`
);
