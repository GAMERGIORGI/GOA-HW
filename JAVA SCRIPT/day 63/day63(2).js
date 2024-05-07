let family = {
    members: [],
    addAge: function(age) {
      this.members.push(age);
    },
    sumAges: function() {
      return this.members.reduce((total, age) => total + age, 0);
    },
    averageAge: function() {
      if (this.members.length === 0) {
        return "No family members added yet.";
      } else {
        let sum = this.sumAges();
        return sum / this.members.length;
      }
    }
  };
  
  family.addAge(30);
  family.addAge(40);
  family.addAge(20);
  

  console.log("Total sum of ages:", family.sumAges()); 
  console.log("Average age of family members:", family.averageAge()); 