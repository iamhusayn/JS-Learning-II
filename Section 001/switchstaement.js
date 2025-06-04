// const day = "monday";

// switch (day) {
//   case "monday":
//     console.log("Plan my weekly activities");
//     console.log("Go to code meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("Rest for the week");
//     break;
//   case "saturday":
//     console.log("Do my laundary");
//     break;
//   case "sunday":
//     console.log("Prepare for the following week");
//     break;
//   default:
//     console.log("Not a valid day");
// }

// const day = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

if (day.includes("monday")) {
  console.log("Plan my weekly activities");
  console.log("Go to code meetup");
} else if (day.includes("tuesday")) {
  console.log("Prepare theory videos");
} else if (day.includes("wednesday") || day.includes("thursday")) {
  console.log("write code examples");
} else if (day.includes("friday")) {
  console.log("Rest for the week");
} else if (day.includes("saturday")) {
  console.log("Do my laundary");
} else if (day.includes("sunday")) {
  console.log("Prepare for the following week");
} else {
  console.log("Not a valid day");
}

const day = "monday";

if (day === "monday") {
  console.log("Plan my weekly activities");
  console.log("Go to code meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else if (day === "friday") {
  console.log("Rest for the week");
} else if (day === "saturday") {
  console.log("Do my laundary");
} else if (day === "sunday") {
  console.log("Prepare for the following week");
} else {
  console.log("Not a valid day");
}
