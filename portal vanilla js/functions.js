function Student(name, age, matric_number, ){
    this.name = name;
    this.age = age;
    this.matric_number = matric_number;

    this.welcome_message = function(){
        return `Welcome ${this.name} !`
    }
}

const studentInstance = new Student('John', 20, 'A1-11')
console.log(Object.values(studentInstance))
console.log(studentInstance.welcome_message())
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        onPress={() => setPressedCount(pressedCount + 1)}
      />
    </View>
  );
};

export default App;

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [pressedCount, setPressedCount] = useState(0);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet'
        }
      </Text>
      <Button
        title='Press me'
        onPress={() => setPressedCount(pressedCount + 1)}
        disabled = {pressedCount >= 3}
      />
    </View>
  );
};

export default App;