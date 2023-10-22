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

// Write your code below

let bobsFollowers = ['jake', 'luke', 'pete', 'jude']

let tinasFollowers = ['jude', 'joseph', 'pete']

let mutualFollowers = []
for(let i = 0; i < bobsFollowers.length; i++){
  for(let j = 0; j < tinasFollowers.length; j++){
    if(bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
let input = 'cheasteu'
let vowels = ["a", "e", "i", "o", "u"]
let resultArray = []

for(let i = 0; i < input.length; i++){
  //console.log(i)
  for(let j = 0; j < vowels.length; j++){
    //console.log(j)
    if(input[i] === vowels[j]){
      //console.log(input[i])
  if(input[i] === 'e'){
    let doubled = input[i] + input[i]
    resultArray.push(doubled)
  }
  if(input[i] === 'u'){
    let doubled = input[i] + input[i]
    resultArray.push(doubled)
  }
    }
  }
  
}
let resultString = (resultArray.join('')).toUpperCase()//'' concantenates with no seperator
console.log(resultString)

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

// Write your code below
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes
isTwoPlusTwo()
console.log(isTwoPlusTwo.name)


const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  var checkA = val + 2 
  var checkB = func(val)

  if(checkA == checkB){
    return checkB
  }else{
    console.log('inconsistent results')
  }
}

console.log(checkConsistentOutput(addTwo, 8))

console.log();
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  var checkA = val + 2 
  var checkB = func(val)

  if(checkA == checkB){
    return checkB
  }else{
    console.log('inconsistent results')
  }
}

console.log(checkConsistentOutput(addTwo, 8))

console.log();
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}`))

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal =>{
  return animal[0]
} ) 

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(number =>{
  return number/100
})

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The vaue of accumulator: ${accumulator}`)
  console.log(`The value of currentValue: ${currentValue}`)
  return accumulator + currentValue
}, 10)

console.log(newSum)