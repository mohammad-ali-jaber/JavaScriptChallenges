//  challeng 1
const ProductOfJson = '{"id": 1, "name": "Laptop", "price": 1200}';

let newProduct = JSON.parse(ProductOfJson);

console.log(newProduct);

//challeng 2

const productObject = { id: 1, name: 'Phone', price: 500 };

const stringJson = arrayToJSON(productObject);
console.log(stringJson);

//challeng 3

const newRequset=new XMLHttpRequest();
newRequset.open('Get',"https://jsonplaceholder.typicode.com/users");

newRequset.send();

newRequset.onload=function(){
    if(this.readyState===4&&this.status===200){
        let result=JSON.parse(this.responseText)
        for(let i=0;i<result.length;i++){
          console.log(`${result[i].id}||${result[i].name}||${result[i].email}`)
        }
    }
console.log("-------------------------------------------")

}

// challeng 4

const updatedProductJson = '{"id": 1, "name": "Laptop", "price": 1200}';

let product = JSON.parse(updatedProductJson);
product.price = 999;

console.log(`Updated Product: ${product.name} now costs $${product.price}`);

// challeng 5

function arrayToJSON(arr) {
  return JSON.stringify(arr);
}

const products = [
  { id: 1, name: 'Phone', price: 500 },
  { id: 2, name: 'Tablet', price: 750 }
];

const jsonStrings = arrayToJSON(products);
console.log(jsonStrings);


// challeng 6

function isValidJSON(str) {
  try {
    let result=JSON.parse(str);
    return result;
  } catch (e) {
    return e;
  }
}

const valid = '{"name": "TV", "price": 800}';
const invalid = '{"name": "TV", price: 800';  

console.log(isValidJSON(valid));   
console.log(isValidJSON(invalid));


// challeng 7

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) 
  .then(data => {
    console.log("First User's Name:", data[0].name);
    console.log("-------------------------------------------")
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


// challeng 8

const newsRequset=new XMLHttpRequest();
newsRequset.open('Get',"https://jsonplaceholder.typicode.com/users");

newsRequset.send();

newsRequset.onload=function(){
    if(this.readyState===4&&this.status===200){
        let result=JSON.parse(this.responseText)
        for(let i=0;i<result.length;i++){
          console.log(`${result[i].id}||${result[i].name}||${result[i].email}`)
        }
    }
    console.log("-------------------------------------------")
}


// challeng 9

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const formData = {
    name: name,
    email: email,
    message: message
  };

  const jsonString = JSON.stringify(formData);
  console.log("Form Data as JSON:", jsonString);
});



// challeng 10

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) 
  .then(data => {
        let root=document.getElementById('root')
        let ul=document.createElement('ul')
        for(let i=0;i<data.length;i++){
          let li=document.createElement('li')
          li.append(`${data[i].id}||${data[i].name}||${data[i].email}`)
          ul.append(li)
        }
     root.append(ul)
    console.log("-------------------------------------------")
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });


// challeng 11

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    const tbody = document.getElementById("userTableBody");
    users.forEach(user => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;

      const emailCell = document.createElement("td");
      emailCell.textContent = user.email;

      row.append(nameCell);
      row.append(emailCell);
      tbody.append(row);
    });
  })
  .catch(error => console.error("Error fetching users:", error));



// challeng 12

function sendUserData() {
  const user = {
    name: "New User",
    email: "newuser@example.com",
    username: "newuser123"
  };

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users");
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 201) {
      console.log("User created:", JSON.parse(xhr.responseText));
    } else {
      console.error("Failed to create user:", xhr.status);
    }
  };

  xhr.send(JSON.stringify(user));
}

sendUserData();



// challeng 13

function fetchFirstUser() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => {
        return response.json();
      })
      .then(user => resolve(user))
      .catch(error => reject(error));
  });
}

fetchFirstUser()
  .then(user => {
 console.log("Resolved User:", user);
  })
  .catch(error => {
    console.error("Fetch Error:", error.message);
  });

  
// challenge 14

async function fetchUserData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const users = await response.json();
    console.log("Fetched Users:", users);
  } catch (error) {
    console.error("Error fetching user data:", error.message);
  }
}

fetchUserData();


// challeng 15

function convertNestedObjectToJSON() {
  const user = {
    id: 1,
    name: "John Doe",
    address: {
      city: "Amman",
      street: "Main St",
      zip: "11118"
    },
    contact: {
      email: "john@example.com",
      phone: "1234567890"
    }
  };

  const jsonString = JSON.stringify(user);
  console.log("Nested Object as JSON:", jsonString);
}
convertNestedObjectToJSON();


// challeng 16

function sendData() {
  const data = {
    title: "New Post",
    body: "This is a post sent via fetch.",
    userId: 1
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => console.log("Success:", result))
    .catch(error => console.error("Error:", error));
}
sendData();



// challeng 17

function fetchWithQueryParams() {
const userId = 3;

  fetch(`https://jsonplaceholder.typicode.com/users?id=${userId}`)
    .then(response => response.json())
    .then(data => console.log("User with ID 3:", data))
    .catch(err => console.error("Fetch error:", err));
}
fetchWithQueryParams();


// challeng 18

function getDataWithXHR() {
  const myRequset = new XMLHttpRequest();
  myRequset.open("GET", "https://jsonplaceholder.typicode.com/users");
  myRequset.onload = function () {
    if (this.status === 200&&this.readyState===4) {
      const data = JSON.parse(myRequset.responseText);
      console.log("XMLHttpRequest Data:", data);
    } else {
      console.error("Request failed with status", myRequset.status);
    }
  };
  myRequset.send();
}
getDataWithXHR();


// challeng 19

function fetchDataWithCallback(callback) {
  const myRequset = new XMLHttpRequest();
  myRequset.open("GET", "https://jsonplaceholder.typicode.com/posts");
  myRequset.onload = function () {
    if (this.status === 200&&this.readyState===4) {
      const data = JSON.parse(myRequset.responseText);
      callback(null, data);
    } else {
      callback("Error fetching data", null);
    }
  };
  myRequset.send();
}

fetchDataWithCallback(function (err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log("Callback Data:", data.slice(0, 3));
  }
});


// challeng 20

function fetchWithErrorHandling() {
  fetch("https://jsonplaceholder.typicode.com/users/91") 
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => console.log("User:", data))
    .catch(error => console.error("Fetch Error:", error.message));
}
fetchWithErrorHandling();





















