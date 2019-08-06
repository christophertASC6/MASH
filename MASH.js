 rl.question('What do you think of Node.js? ', (answer) => {
   // TODO: Log the answer in a database
   console.log(`Thank you for your valuable feedback: ${answer}`);
 
   rl.close();
 });
 function randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

  function getHome(desires) {
    var desireChance = .25;
    var getHomeChance = Math.random();
    const randomHome = randomNumber(homes.length);

    if (desireChance > getHomeChance) {
        return desires;
    }

    else if (getHomeChance > desireChance) {
        return (homes[randomHome]);    

    }
 }

 function getChildrenCount(desires) {
    var desireChance = .50;
    var childrenCountChance = Math.random();
    var childrenCount = randomNumber(100);

    if (desireChance > childrenCountChance) {
        return desires;
    }
    
    else if (childrenCountChance > desireChance) {
        return childrenCount;
    }
 }

 function getCar(desires) {
     var desireChance = .25;
     var getCarChance = Math.random();
     const randomCar = randomNumber(cars.length);

     if (desireChance > getCarChance) {
        return desires;
     }

     else if (getCarChance > desireChance) {
         return(cars[randomCar]);
    }
 }

 function nameOfSpouse(desires) {
     var desireChance = .10;
     var nameOfSpouseChance = Math.random();
     const randomSpouse = randomNumber(spouses.length);

     if (desireChance > nameOfSpouseChance) {
         return desires;
     }

     else if (nameOfSpouseChance > desireChance) {
         return(spouses[randomSpouse]);
     }
 }


 function salaryAmount(desires) {
     var desireChance = .15;
     var salaryAmountChance = Math.random();
     const randomSalary = randomNumber(salaries.length);

     if (desireChance > salaryAmountChance) {
         return desires;
     }

     else if (salaryAmountChance > desireChance) {
         return(salaries[randomSalary]);
     }
 }

 const ages = [];

 function ageOfDeath(desires) {
    var desireChance = .25;
    var ageOfDeathChance = Math.random();
    const randomAge = randomNumber(ages.length);

    if (desireChance > ageOfDeathChance) {
        return desires;
    }

    else if (ageOfDeathChance > desireChance) {
        return(ages[randomAge]);
    }
}


function deathBy(desires) {
    var desireChance = .35;
    var deathByChance = Math.random();
    const randomDeath = randomNumber(deaths.length);

    if (desireChance > deathByChance) {
        return desires;
    }

    else if (deathByChance > desireChance) {
        return(deaths[randomDeath]);
    }
}

function careerDone(desires) {
    var desireChance = .35;
    var careerDoneChance = Math.random();
    const randomCareer = randomNumber(careers.length);

    if (desireChance > careerDoneChance) {
        return desires;
    }

    else if (careerDoneChance > desireChance) {
        return(careers[randomCareer]);
    }
}

 //function mash() {
    //return "You will live in a " + getHome("skyscraper") + ", and you will have " + getChildrenCount(3) + " kids! You will be driving a " + getCar("flying car") + ", and will be married to " + nameOfSpouse("Hannah") + ". Your yearly salary will be " + salaryAmount("$650,000") + ", and you will die at the age of " + ageOfDeath(120) + "years. You will die by " + deathBy("an anvil falling on your head") + ", and will have the career of a " + careerDone("CEO") + ". Hopefully you enjoy your life.. or not!";
 //}

 //console.log(mash());