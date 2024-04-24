function compareNumbers(num1, num2) {
    if (num1 === num2) {
        return `${num1} is equal to ${num2}`;
    } else if (num1 > num2) {
        return `${num1} is greater than ${num2}`;
    } else {
        return `${num1} is less than ${num2}`;
    }
}


console.log(compareNumbers(5, 3)); 
console.log(compareNumbers(10, 10)); 
console.log(compareNumbers(-5, 0));