var myName = "ruth"
var myCity = "Lagos"
console.log(`My name is ${myName} My favorite city is ${myCity}.`);
let newVariable = 'Playing around with typeof.';

console.log(typeof newVariable)

fahrenheit = Math.floor(fahrenheit);
// my age
var myAge = 20

let earlyYears = 2
earlyYears *= 10.5;
laterYears = myAge - 2

let myAgeInDogYears = earlyYears + laterYears
var myName = "ruth".toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog`)
var greeting = function() {
    console.log('Hello World!');  
  };
  //With ES6 arrow functions, we can transform the expression above into:
  
  const greeting = () => console.log('Hello World'); 

  let hungerLevel = 7

if(hungerLevel > 7){
  console.log('Time to eat!')
}else{
  console.log('We can eat later!')
}

let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;


isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';


favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");


let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}