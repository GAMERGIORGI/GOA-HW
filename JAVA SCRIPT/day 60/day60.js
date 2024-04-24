function family(name, lastname, location) {
    return `The customer's entire name is ${name} ${lastname}, and they live in ${location}.`;
}

// Example usage:
const name = "giorgi";
const lastname = "murachashvili";
const location = "tbilisi";
const formattedInfo = family(name, lastname, location);

console.log(formattedInfo);
