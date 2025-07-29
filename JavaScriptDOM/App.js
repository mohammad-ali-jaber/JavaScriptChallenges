// 1. Select an Element by ID 
let element = document.getElementById("myElement"); 
console.log(element); 


// 2. Select Multiple Elements by Class 
let elements = document.getElementsByClassName("myClass"); 
for (let i = 0; i < elements.length; i++) { 
console.log(elements[i].textContent); 
} 

// 3. Change Text of an Element
const paragraph = document.getElementById("myParagraph");
paragraph.textContent = "Hello, JavaScript!";


// 4. Change Background Color of an Element
function changeBackgroundColor(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.backgroundColor = "blue";
  }
}
changeBackgroundColor("myElement");
//changeBackgroundColor("myParagraph");


// 5. Add Event Listener for Click 
let button = document.getElementById("myButton"); 
button.addEventListener("click", function() { 
alert("Button clicked!"); 
});

// 6. Remove an Element from the DOM
const image = document.getElementById("myImage");
  image.remove(); 
  console.log("Image element removed from DOM.");


// 7. Create a New Element and Append it to the Body
function createAndAppendDiv() {
  const newDiv = document.createElement("div");
  newDiv.textContent = "I am a new div created with JavaScript!";
  newDiv.style.padding = "15px";
  newDiv.style.marginTop = "20px";
  newDiv.style.backgroundColor = "#eee";
  newDiv.style.border = "1px solid #aaa";
  document.body.appendChild(newDiv);
}

createAndAppendDiv();

// 8. Toggle a Class on an Element 

let button8 = document.getElementById("toggleBtn");

button8.addEventListener("click", function () {
    this.classList.toggle("button-toggle");
    
});

// 9. Change the Style of an Element Dynamically (font size)
function increaseFontSize() {
  paragraph.style.fontSize = "24px";
}
button.addEventListener("click", increaseFontSize);


// 10. Handle Mouse Hover Event - change color of myElement
myElement.addEventListener("mouseover", () => {
  myElement.style.color = "red";
});
myElement.addEventListener("mouseout", () => {
  myElement.style.color = "#333";
});

// 11. Change the Text of a Paragraph When a Button is Clicked
function changeParagraphText() {
  paragraph.textContent = "The paragraph text has been updated!";
}
button.addEventListener("click", changeParagraphText);


// 12. Find and Change Parent Element’s Text
const listContainer = document.createElement("ul");
listContainer.innerHTML = `<li>Item 1</li><li>Item 2</li>`;
document.body.appendChild(listContainer);

function changeParentText() {
  const listItem = listContainer.querySelector("li");
  if (listItem && listItem.parentElement) {
    listItem.parentElement.textContent = "Parent text changed!";
  }
}
setTimeout(changeParentText, 2000); 


// 13. Loop Through All Elements with a Class and Change Their Style (using for loop)
function ChangeStyleForClassElements() {
  const elements = document.querySelectorAll(".myClass");
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "yellow";
  }
}
ChangeStyleForClassElements();


// 14. Create an Image Element Dynamically
function createImage(src) {
  const newImg = document.createElement("img");
  newImg.src = src;
  newImg.alt = "Dynamically added image";
  newImg.style.marginRight = "15px";
  newImg.style.marginTop = "15px";
  document.body.appendChild(newImg);
}
createImage("images/me.png");
createImage("images/ahmad.png");


// 15. Add Multiple Event Listeners to a Single Element
button.addEventListener("mouseenter", () => {
  console.log("Mouse entered the button");
});
button.addEventListener("click", () => {
  console.log("Button was clicked again with multiple listeners");
});


// 16. Create a List of Items Dynamically
function createListItems() {
  const ul = document.createElement("ul");
  for (let i = 1; i <= 3; i++) {
    const li = document.createElement("li");
    li.textContent = "Item " + i;
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
createListItems();


// 17. Select the First Child of an Element and log its content
function FirstChildOfList() {
  const ul = document.querySelector("ul");
    console.log("First child of the Element:", ul.firstElementChild.textContent);
}
FirstChildOfList();


// 18. Change the Text of All Paragraphs
function changeAllParagraphsText() {
  const paragraphs = document.getElementsByTagName("p");
  for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = "New Text";
  }
}
changeAllParagraphsText();


// 19. Create a Table Dynamically (3x3)
function createTable() {
  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  for (let row = 0; row < 3; row++) {
    const tr = document.createElement("tr");
    for (let col = 0; col < 3; col++) {
      const td = document.createElement("td");
      td.textContent = `R${row + 1}C${col + 1}`;
      td.style.border = "1px solid #000";
      td.style.padding = "10px";
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }

  document.body.appendChild(table);
}
createTable();


// 20. Use querySelector to select the first h2 and modify its content
const firstH2 = document.querySelector("h2"); 
firstH2.textContent = "Updated Heading";




