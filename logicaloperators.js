const hasDriversLicense = true; //A
const hasGoodVision = true; //B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log("Sarah is able to drive.");
// } else {
//   console.log("Someone else should drive!");
// }

const isTired = true; //C

console.log(hasDriversLicense || hasGoodVision || isTired); //true

if (hasDriversLicense && hasGoodVision && !isTired) {
  //This means Sarah has a driver's license, a good vision and is not tired
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive!");
}

const scoreDolphins = 96 + 108 + 89;
const scoreKoalas = 88 + 91 + 110;

const averageScoreDolphins = scoreDolphins / 3;
const averageScoreKoalas = scoreKoalas / 3;
const averageScoreForBoth = (averageScoreDolphins + averageScoreKoalas) / 2;

console.log(averageScoreDolphins);
console.log(averageScoreKoalas);
console.log(averageScoreForBoth);

// if (averageScoreDolphins > averageScoreForBoth) {
//   console.log("Dolphins win the trophy");
// } else if (averageScoreKoalas > averageScoreForBoth) {
//   console.log("Koalas win the trophy");
// } else {
//   console.log("Both win the trophy");
// }

if (averageScoreDolphins > averageScoreForBoth && averageScoreDolphins >= 100) {
  console.log("Dolphins win the trophy");
} else if (
  averageScoreKoalas > averageScoreForBoth &&
  averageScoreKoalas >= 100
) {
  console.log("Koalas win the trophy");
} else if (
  (averageScoreDolphins === averageScoreKoalas) &
    (averageScoreDolphins >= 100) &&
  averageScoreKoalas >= 100
) {
  console.log("Both win the trophy");
} else {
  console.log("No one wins the trophy");
}
