function makeNegative(num) {
    if (num < 0) {
      return num; 
    } else {
      return -num; 
    }
  }

  console.log(makeNegative(5)); 
console.log(makeNegative(-3)); 
console.log(makeNegative(0));