

/*This program calculates a humans age dogyears given their current age*/

var myAge = 26
// current age

let earlyYears = 2
//early years 
earlyYears *= 10.5;

laterYears = myAge - 2 
laterYears *= 4
//later years

let myAgeInDogYears = earlyYears + laterYears
// dog years

var myName = "Ruth".toLowerCase()

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns){
    return monitorCount(rows, columns) * 200
  }
  
  const totalCost = costOfMonitors(5, 4)
  
  console.log(totalCost)