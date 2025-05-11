const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Sarah can start her driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(
    `Sorry, Sarah is not eligible for her driving license 🚗. She has to wait for ${yearsLeft} years.`
  );
} //This is structure is called a controlled structure , it is used to control the flow of the program based on a condition. The condition is evaluated
