const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
      name,
      age, 
      energySource: energySource,
      scare() {
        console.log(catchPhrase);
      } 
    }
  };

  const robotFactory = (model, mobile) => {
    return {
      model,
      mobile,
      beep () {
        console.log('Beep Boop')
      }
    }
  }
  
  const tinCan = robotFactory('P-500', true)
  tinCan.beep()