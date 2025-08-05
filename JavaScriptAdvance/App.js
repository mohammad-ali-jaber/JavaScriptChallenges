// challenge 1

const SuccessProise=new Promise(function(resolve){
    setTimeout(()=>{
     resolve('Success')
    },2000)

})

SuccessProise.then((massege)=>console.log(massege))


// challenge 2

const failingPromise = new Promise((_,reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 1000);
});

failingPromise
  .catch((error) => console.error(error));


// challenge 3

const promise1 = Promise.resolve("First Result");
const promise2 = Promise.resolve("Second Result");

promise1
  .then((res1) => {
    console.log(res1);
    return promise2;
  })
  .then((res2) => {
    console.log(res2);
  });


// challenge 4

const myPromise = new Promise((resolve) => {
  resolve("Done!");
});

myPromise
  .then((response) => console.log(response)) 
  .catch((error) => console.error(error))
  .finally(() => console.log("Promise has settled")); 


// challenge 5

const fetch1 = fetch("https://jsonplaceholder.typicode.com/posts/1")
const fetch2 = fetch("https://jsonplaceholder.typicode.com/users/1")

fetch1.then((response)=>response.json())
fetch2.then((response)=>response.json())

Promise.all([fetch1, fetch2])
  .then(([post, user]) => {
    console.log("Post1:", post);
    console.log("User1:", user);
  })
  .catch((error) => console.error("Error fetching:", error));


// challenge 6

async function fetchUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const data = await response.json();
  console.log(data); 
}

fetchUser();


// challenge 7

async function fetchData() {
  try {
    const response = await fetch("https://invalid-api.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Fetch failed");
  }
}

fetchData();


// challenge 8

function fetchDataWithAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data loaded (from async/await)");
    }, 1000);
  });
}

async function main() {
  const result = await fetchDataWithAsync();
  console.log(result); 
}

main();


// challenge 9

async function getData() {
  const postPromise = fetch("https://jsonplaceholder.typicode.com/posts/2").then(res => res.json());
  const userPromise = fetch("https://jsonplaceholder.typicode.com/users/2").then(res => res.json());

 Promise.all([postPromise, userPromise])
  .then(([post, user]) => {
    console.log("Post 2:", post);
    console.log("User 2:", user);
  })
}

getData();


// challenge 10

async function fetchTwoAPI() {
  try {
    const postPromise = await fetch("https://jsonplaceholder.typicode.com/posts/3");
    const userPromise = await fetch("https://jsonplaceholder.typicode.com/users/3");

    const post = await postPromise.json();
    const user = await userPromise.json();

    console.log("Post 3:", post);
    console.log("User 3:", user);
  } catch (error) {
    console.error("An error occurred while fetching data."); 
  }
}

fetchTwoAPI();


// challenge 11

function readData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Mohammad ali" };
    callback(data);
  }, 1000);
}

readData((result) => {
  console.log("Data received:", result);
});


// challenge 12

function fetchData(callback) {
  setTimeout(() => {
    const data = { userId: 1, username: "Ali Mohammad" };
    callback(data);
  }, 1000);
}

function processData(data, callback) {
  setTimeout(() => {
    const processed = { ...data, processed: true };
    callback(processed);
  }, 1000);
}

fetchData((data) => {
  console.log("Fetched:", data);
  processData(data, (processedData) => {
    console.log("Processed:", processedData);
  });
});


// challenge 13

function stepOne(callback) {
  setTimeout(() => {
    console.log("Step 1 complete");
    callback();
  }, 1000);
}

function stepTwo(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 1000);
}

function stepThree(callback) {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 1000);
}

function RunAllStep() {
  stepOne(() => stepTwo(() => stepThree(() => console.log("All steps done"))));
}

RunAllStep();


// challenge 14

function CallbackWithSetTimeOut(callback) {
  setTimeout(() => {
    callback("Operation complete!");
  }, 1500);
}

CallbackWithSetTimeOut((message) => {
  console.log(message); 
});


// challlenge 15

function handleCallbacksSequentially(callbacks) {
  for (let i = 0; i < callbacks.length; i++) {
    const result = callbacks[i]();
    console.log(`Result of callback ${i + 1}:`, result);
  }
}

function Callback1() {
  return "First callback done";
}

function Callback2() {
  return "Second callback done";
}

function Callback3() {
  return "Third callback done";
}

handleCallbacksSequentially([Callback1, Callback2, Callback3]);



// challlenge 16

class Person{
    constructor(name,age){
     this.name=name
     this.age=age
    }
}

const Person1=new Person("mohammad",21);
console.log(Person1)


// challenge 17

class Car{
     constructor(make,model){
     this.make=make
     this.model=model
    }

 start(){
    console.log("Car started")
 }
}

const myCar = new Car("Honda", "Civic");

myCar.start()


// challenge 18

class Animal{
    speak(){
        console.log("Animal cant speak")
    }
}

class Dog extends Animal {
  speaks() {
    console.log("The dog barks");
  }
}

const genericAnimal = new Animal();
const myDog = new Dog();

genericAnimal.speak();
myDog.speaks(); 
myDog.speak();


// challenge 19

class BankAccount {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

   deposit(amount){
    if(amount>0){
      this.#balance += amount;
      console.log(`Deposited: $${amount}`);
    }
    else{
    console.log("Deposit amount must be positive.");
    }
   }

   withdraw(amount){
    if(amount>0&&amount<=this.#balance){
      this.#balance -= amount;
      console.log(`Withdrew: $${amount}`);
    }
    else{
      console.log("Invalid withdrawal amount.");
    }
   }

   getBalance(){
    return this.#balance
   }
}

const account = new BankAccount(1000);
account.deposit(500);  
account.withdraw(300);     
console.log(account.getBalance());


// challenge 20

class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape directly.");
    }
  }

  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const myCircle = new Circle(5);
console.log("Circle area:", myCircle.area()); 

const myRect = new Rectangle(4, 6);
console.log("Rectangle area:", myRect.area());

const myShape=new Shape()













