let score = 85; // You can change this score to test different values

if (score === 100) {
  console.log("You have been funded for your studies");
} else if (score > 70) {
  console.log("You have been funded for your studies with 3000 GEL.");
} else if (score > 40) {
  console.log(" You have been funded for your studies with 1000 GEL.");
} else if (score < 20) {
  console.log(" you have not been funded for your studies.");
} else {
  console.log("Your score is between 20 and 40");
}
