let userName = ''||'Stranger'
let userQuestion = 'will it rain today?'
let eightball = ''
let randomNumber = Math.floor(Math.random() * 8);
userName ? console.log("Hello", userName) : console.log("Hello!") 
console.log(userName, ":", userQuestion)


switch (randomNumber){
  case 0:
    eightball = 'It is certain';
    break;
  case 1:
    eightball = 'It is decidedly so';
    break;
  case 2:
    eightball = 'Reply hazy try again';
    break;
  case 3:
    eightball = 'Cannot predict now';
    break;
  case 4:
    eightball = 'Do not count on it';
    break;
  case 5:
    eightball = 'My sources say no';
    break;
  case 6:
    eightball = 'Outlook not so good';
    break;
  case 7:
    eightball = 'Signs point to yes';
    break;
  default:
    eightball = "Oops something went wrong!";
    break;
}

console.log("Eight Ball:", eightball) 
