function factorial(n) {
    if (n < 0) {
      return "Factorial is not defined for negative numbers.";
    } else if (n === 0 || n === 1) {
      return 1;
    } else {
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    }
  }
  
  console.log("Factorial of 5:", factorial(5));

  console.log("Factorial of 0:", factorial(0));
  
  console.log("Factorial of -5:", factorial(-5));
  