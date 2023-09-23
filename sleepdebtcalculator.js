const getSleepHours = (day) => {
    if(day === 'monday'){
        return 8;
    }else if(day === 'tuesday'){
        return 6;
    }else if(day === 'wednesday'){
        return 5;
    }else if(day === 'thursday'){
        return 7;
    }else if(day === 'friday'){
        return 6;
    }else if(day === 'saturday'){
        return 5;
    }else if(day === 'sunday'){
        return 6;
    }else {
        console.log('Please enter a valid day of the week.')
    };
}


const getActualSleepHours = () => {
    return getSleepHours('monday') +
            getSleepHours('tuesday') +
            getSleepHours('wednesday') +
            getSleepHours('thursday') +
            getSleepHours('friday') +
            getSleepHours('saturday') +
            getSleepHours('sunday')
    
}
 
/*const totalSleepHours = getActualSleepHours();
console.log('Total actual sleep hours for the week: ', totalSleepHours);*/

//Define ideal sleep hours
/*function getIdealSleepHours(hours){
    idealHours = hours;
    return hours * 7
}*/

const getIdealSleepHours = idealHours => idealHours * 7;

//console.log('Your ideal sleep hours for the week: ', getIdealSleepHours())

const calculateSleepDebt = () => {
    var actualSleepHours = getActualSleepHours()
    var idealSleepHours = getIdealSleepHours(7)
    var sleepdifference = idealSleepHours - actualSleepHours

    if(actualSleepHours < idealSleepHours){
        console.log('You slept', actualSleepHours, 'hours this week which is', sleepdifference, 'hrs from the ideal', idealSleepHours,'hours of sleep' );
        console.log('You need more sleep!')
    }else {
        console.log('You are well rested')
    }
}

calculateSleepDebt()