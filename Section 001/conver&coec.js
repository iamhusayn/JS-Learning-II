//type conversion
let age = 27;
console.log(Number(age) + 6);

//type coercion
console.log("Our school has" + 100 + "students"); //coercion of string and number to string
console.log("Our school has" + "100" + "students"); //coercion of string and string to string
console.log("100" - "10" + 60); //coercion of string and string to number and then string. JavaScript converts the strings to numbers before performing the subtraction operation. The result of the subtraction operation is a number, 150
console.log("2" * "10"); //
