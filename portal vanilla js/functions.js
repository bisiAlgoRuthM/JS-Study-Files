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
