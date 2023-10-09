//Anonymous Functions
const calculateArea = function(width, height){
    const area = width * height;
    return area;
};

const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };

//Arrow Functions

const rectangleArea = (width, height) => {
    let area = width * height; 
    return area;
}

const plantzNeedsWater = day => {
    if (day === "Wednesday") {
        return true; 
    } else {
        return false;
    }
}

//Consise body arrow function using tenary operation


/* 
Our solution is written as a function expression and uses string interpolation, but it would be equally acceptable to use a function declaration and/or string concatenation
*/

const howOld = (age, year) => {
  // The following two lines make it so that our function always knows the current year.
      let dateToday = new Date();
      let thisYear = dateToday.getFullYear();
  // It is totally ok if your function used the current year directly!
    
      const yearDifference = year - thisYear
      const newAge = age + yearDifference
      if (newAge > age) {
          return `You will be ${newAge} in the year ${year}`
      } else if (newAge < 0) {
          return `The year ${year} was ${-newAge} years before you were born`
      } else {
          return `You were ${newAge} in the year ${year}`
      }
  }
  
  console.log(howOld(20, 2002))

  const whatRelation = percentSharedDNA => {
    if (percentSharedDNA === 100) {
        return 'You are likely identical twins.'
    }else if (percentSharedDNA > 36) {
        return 'You are likely parent and child or full siblings.'
    }else if (percentSharedDNA > 13) {
        return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
    }else if (percentSharedDNA > 5) {
        return 'You are likely 1st cousins.'
    }else if (percentSharedDNA > 2) {
        return 'You are likely 2nd cousins.'
    }else if (percentSharedDNA > 0) {
        return 'You are likely 3rd cousins'
    }else{
      return 'You are likely not related.'
    }
      
}

console.log(whatRelation(34))
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3))
// Should print 'You are likely 2nd cousins.'
// Write your function here:
const tipCalculator = (quality, total) => {
  switch(quality){
     case "bad": 
      return total * 0.05;
    case 'ok':
      return total * 0.15;
    case 'good':
      return total * 0.20;
    case 'excellent':
      return total * 0.30;
    default:
      return total * 0.18;
  }
   
  }

console.log(tipCalculator("good", 100)); //should return 20

