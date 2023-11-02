const person = {
    _age: 37,
    set age(newAge){
      if (typeof newAge === 'number'){
        this._age = newAge;
      } else {
        console.log('You must assign a number to age');
      }
    }
  };
  

const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    get energyLevel(){
      if(typeof this._energyLevel === 'number'){
        return `My current energy level is ${this._energyLevel}`
      }else{
        return 'System malfunction: cannot retrieve energy level'
      }   
    }
  };
  
  
  console.log(robot.energyLevel)


// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)

console.log(robotEntries);

// Declare newRobot below this line:The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)

console.log(newRobot);

const Staff = {
    first_name :'Dan',
    last_name : 'Bisi',
    date_of_birth :'1990-01-01',

    get Staff (){
        return `Full name is ${this.first_name} ${this.last_name}`
    } 
}

const menu = {
    _meal : '',
    _price : 0,
    get todaysSpecial(){
      if(this._meal && this._price){
        return `Today's Special is ${this._meal} for $${this._price}`
      }else {
        'Meal or price was not set correctly'
      }
    },
  
    set meal(mealToCheck) {
      if(typeof mealToCheck === 'string'){
        this._meal = mealToCheck
      }else{
        console.log(`${mealToCheck} is not a valid meal`)
      }
      },
    set price(priceToCheck) {
      if(typeof priceToCheck === 'number'){
        this._price = priceToCheck
    }else{
      console.log('invalid price')
    }
    }
  }
  
  menu.meal = 'eggs'
  menu.price = 50
  console.log(menu)
  console.log(menu.todaysSpecial)