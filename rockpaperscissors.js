console.log('hi');

const getUserChoice = userInput => {
  userInput.toLowerCase()
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log("Error!")
  }
}

function getComputerChoice(){
   const randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    console.log('The game is a tie')
  } else {
    // cheatcode to win 'bomb'
    if (userChoice === 'bomb'){
        if(computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors'){
            console.log('You Won!!! ')
        }
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        console.log('The computer won')
      } else {
        console.log('You Won!') 
      }
    } if(userChoice === 'scissors'){
        if(computerChoice === 'rock'){
          console.log('The computer won')
        } else {
          console.log('You Won!') 
        }
    } if(userChoice === 'paper'){
        if(computerChoice === 'scissors'){
          console.log('The computer won')
        } else {
          console.log('You Won!') 
        }
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice)
  console.log('The computer threw: ' + computerChoice)
  determineWinner(userChoice, computerChoice)
}


playGame()
