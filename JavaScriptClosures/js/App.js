// challenges 1

function ClosureWithCounter() {
  let counter = 0;
  return function() {
    counter++;
    return counter;
  };
}

const counter = ClosureWithCounter();
console.log(counter()); 
console.log(counter()); 
console.log(counter()); 
console.log("----------------------------")

// challenges 2

function privateStore() {
  let Private = 0;
  return {
    get: function() {
      return Private;
    },
    set: function(value) {
      Private = value;
    }
  };
}

const store = privateStore();
store.set(21);
console.log(store.get()); 
console.log("----------------------------")


// challenges 3

function createAdder(x) {
  return function(y) {
    return x + y;
  };
}

const addTowNumber = createAdder(5);
console.log(addTowNumber(5)); 
console.log(addTowNumber(15)); 
console.log("----------------------------")


// challenges 4

function delayedGreeting(message, delay) {
  setTimeout(function() {
    console.log("Greeting:", message);
    console.log("----------------------------")
  }, delay);
}

delayedGreeting("Hello mohammad ali i will sent the massege after 2 seconds", 2000);


// challenges 5

function ClosureStoringValues () {
  let values = [];
  return function(newValue) {
    values.push(newValue);
    return values;
  };
}

const tracker = ClosureStoringValues();
console.log(tracker("Ahmad")); 
console.log(tracker("Bilal")); 
console.log(tracker("Mohammad")); 
console.log("----------------------------")


// challenges 6

function fibonacciMemory() {
  const memory = { 0: 0, 1: 1 };

  return function(n) {
    if (n in memory) return memory[n];
    for (let i = 2; i <= n; i++) {
      memory[i] = memory[i - 1] + memory[i - 2];
    }
    return memory[n];
  };
}

const fib = fibonacciMemory();
console.log(fib(10)); 
console.log(fib(20)); 
console.log("----------------------------")


// challenges 7

function authenticate(storedPassword) {
  return function(inputPassword) {
    return inputPassword === storedPassword;
  };
}

const checkPassword = authenticate("mySecret123");

console.log(checkPassword("wrongPass")); 
console.log(checkPassword("mySecret123")); 
console.log("----------------------------")


// challenges 8

function createPerson(name, age) {
  return {
    getName: function() {
      return name;
    },
    setName: function(newName) {
      name = newName;
    },
    getAge: function() {
      return age;
    },
    setAge: function(newAge) {
      age = newAge;
    }
  };
}

const person = createPerson("Mohammad", 21);

console.log(person.getName()); 
person.setName("Ali");
console.log(person.getName()); 

console.log(person.getAge()); 
person.setAge(22);
console.log(person.getAge()); 
console.log("----------------------------")


// challenges 9

function callCounter(fn) {
  let count = 0;
  return function(...args) {
    count++;
    console.log(`Function called ${count}`);
    return fn(...args);
  };
}

function sayHello(name) {
  return `Hello ${name}`;
}

const countedSayHello = callCounter(sayHello);

console.log(countedSayHello("Ali")); 
console.log(countedSayHello("Mohammad")); 
console.log("----------------------------")


// challenges 10

function buttonClickHandler() {
  let clickCount = 0;

  return function() {
    clickCount++;
    console.log(`Button clicked ${clickCount} time(s)`);
  };
}

const handleClick = buttonClickHandler();

document.getElementById("myButton").addEventListener("click", handleClick);
console.log("----------------------------")


// challenges 11

import { add } from './Math.js';

console.log(add(3, 7)); 
console.log("----------------------------")


// challenges 12

import { sum, multiply, divide } from './utils.js';

console.log(sum(4, 2));       
console.log(multiply(3, 5));  
console.log(divide(10, 2));   
console.log("----------------------------")


// challenges 13

import greet from './greet.js';

console.log(greet("Ali")); 
console.log("----------------------------")


// challenges 14

import { book } from './book.js';

console.log(book.title);  
console.log(book.author); 
console.log(book.price);  
console.log("----------------------------")


// challenges 15

import { PI } from './Math.js';

function getCircumference(radius) {
  return 2 * PI * radius;
}

console.log(getCircumference(5)); 
console.log("----------------------------")


// challenges 16

document.getElementById("helpBtn").addEventListener("click", async () => {
  const module = await import('./helper.js');
  module.showHelp();
  console.log("----------------------------")
});


// challenges 17

import { Circle, Square } from './shapes.js';

const c = new Circle(3);
console.log(c.area()); 

const s = new Square(4);
console.log(s.area()); 
console.log("----------------------------")


// challenges 18

import {subtract } from './calculator.js';

console.log(add(5, 2));       
console.log(subtract(10, 3)); 
console.log(multiply(4, 6));  
console.log(divide(8, 2));    
console.log("----------------------------")


// challenges 20

import tools from './tools.js';

console.log(tools.capitalizeFistrChar("hello")); 
console.log(tools.reverse("abcd"));      
console.log(tools.isEmpty("  "));    
console.log("----------------------------")


// challenges 21

import { increment } from './counter.js';

increment(); 
increment(); 
console.log("----------------------------")


// challenges 22


// const { add1 } = require('./math-cjs');

// console.log(add1(3, 4));  
// console.log("----------------------------")


// challenges 23

import { Circle as CircleTwo } from './shape.js';
import { Square as SquareTwo } from './shape.js';

console.log(CircleTwo.area(3)); 
console.log(SquareTwo.area(4)); 
console.log("----------------------------")


// challenges 24

document.getElementById("loadBtn").addEventListener("click", () => {
  import('./lazy.js')
    .then(module => module.doHeavyTask())
    .catch(err => console.error("Failed to load module:", err));
});


// challenges 25

import { greetFromA } from './moduleA.js';

greetFromA(); 
console.log("----------------------------")


// challenges 26

import greets, { add26 } from './mathUtils.js';

console.log(greets()); 
console.log("2 + 3 =", add26(2, 3)); 
console.log("----------------------------")


// challenges 27

import { url, timeout, retryCount } from './config.js';

function fetchData() {
  console.log(`Connecting to: ${url}`);
  console.log(`Timeout: ${timeout}ms`);
  console.log(`Retry Count: ${retryCount}`);

  for (let i = 1; i <= retryCount; i++) {
    console.log(`Attempt ${i}...`);
  }
}

fetchData();
console.log("----------------------------")


// challenges 28

// app.js
import { getUsers } from './api.js';

async function showUsers() {
  try {
    const users = await getUsers();
    console.log("Users data:", users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}

showUsers();
console.log("----------------------------")


// challenges 29

import { add as sum29, subtract as difference } from './mathOperations.js';

console.log("Sum:", sum29(10, 5));         
console.log("Difference:", difference(10, 5)); 
console.log("----------------------------")


// challenges 30

import { getUserInput } from './input.js';

document.getElementById("submitBtn").addEventListener("click", () => {
  const name = getUserInput("nameField");
  if (name) {
    alert(`Hello, ${name}!`);
  } else {
    alert("Please enter your name.");
  }
});























 
