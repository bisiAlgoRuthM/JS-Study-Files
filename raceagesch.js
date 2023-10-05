let raceNumber = Math.floor(Math.random() * 1000);
let isRegistered = false;
let runnersAge = 10;

if (isRegistered === true && runnersAge > 18) {
  raceNumber += 1000; // Add 1000 to raceNumber for early adults
}

if (runnersAge > 18) {
  if (isRegistered === true) {
    console.log(`You are an adult runner and you will race at 9:30 am. Your race number is ${raceNumber}.`);
  } else {
    console.log(`You are an adult runner and you will race at 11:00 am. Your race number is ${raceNumber}.`);
  }
} else if (runnersAge < 18) {
  console.log(`Youth registrants run at 12:30 pm. Your race number is ${raceNumber}.`);
} else {
  console.log("Please see the registration desk.");
}



const city = 'New York City'
const logCitySkyline = () => {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}
console.log(logCitySkyline())