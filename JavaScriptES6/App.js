// challenge 1

// Original code
// var name = "Alice"; 
// var age = 25; 
// var isStudent = true;

const name = "Alice";      
let age = 25;              
let isStudent = true;   


// challenge 2

const sum =(a,b) =>a+b;
console.log(sum(3, 5)); 

// challenge 3

const concatenation=(String1,String2)=>String1+String2;
console.log(concatenation('momo, ','nono'))

// challenge 4

const greet=(name)=>  console.log("Hello, " + name);
greet("mohammad")

//challenge 5

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// challenge 6

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person1 = new Person("Mohammad ali", 21);
person1.greet()


// challenge 7

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  drive() {
    console.log(`${this.make} ${this.model} is driving.`);
  }
}

class Car extends Vehicle {
  honk() {
    console.log("Honk!");
  }
}

const myCar = new Car("Toyota", "Corolla");

myCar.drive();
myCar.honk();  


// challenge 8

const numbers = [10, 20, 30];

const [first, second] = numbers;

console.log(first);  
console.log(second); 


// challenge 9

const person = { username: "mohammad ali", userage: 21, city: "New York" };

const { username, userage } = person;

console.log(username); 
console.log(userage);  


// challenge 10

function templateString(name, age) {
  return `My name is ${name} and I am ${age} years old.`;
}

console.log(templateString("Mohammad Ali", 21)); 








