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
const planttNeedsWater = day => day === 'Wednesday' ? true : false;