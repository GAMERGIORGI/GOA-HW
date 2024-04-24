function AfterT(ageList, timeTravelYears) {
    const newAges = ageList.map(age => age - timeTravelYears);
    return newAges;
}


const familyAges = [35, 40, 18, 12];
const timeTravelYears = 10; 

const After = After(Ages, timeTravel);
console.log("Ages after time travel:", After);