let a = parseInt(prompt("Enter the first number (a):"));
let b = parseInt(prompt("Enter the second number (b):"));

if (isNaN(a) || isNaN(b)) {
  console.log("Please enter valid numbers.");
} else {
  console.log(`Numbers from ${a} to ${b}:`);

  while (a <= b) {
    console.log(a);
    a++;
  }
}