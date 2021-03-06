/*
Make a series of divs, 16 x 16 
    -use DOM manipulation to create divs in row
    -make rows same length as width
Use mouse hover to manipulate color of divs
    -make background color change from white to black
    -
Add button to make divs clear after changing color, ask user for size
    -eventlistener waiting for click to make divs change color
    -prompt connected to square amount to change squares 
*/

let upperDiv = document.createElement("div");
upperDiv.id = "upperDiv";
document.body.appendChild(upperDiv);

let askUser = document.createElement("button");
askUser.id = "clear";
askUser.textContent = "Clear";
askUser.classList.add('divide')
upperDiv.appendChild(askUser);

let randomColor = document.createElement("button");
randomColor.id = "randomColor";
randomColor.classList.add('divide')
randomColor.textContent = "Random Color";
upperDiv.appendChild(randomColor);

let boxDiv = document.createElement("div");
boxDiv.id = "outerBox";
document.body.appendChild(boxDiv);

let inputBox = document.createElement("input");
inputBox.id = "gridSize";
inputBox.classList.add('divide')
inputBox.placeholder = 'Grid Size..'
upperDiv.appendChild(inputBox);

let buttonGrid = document.createElement("button");
buttonGrid.id = "buttons";
buttonGrid.textContent = "Change Size";
buttonGrid.classList.add('divide')
upperDiv.appendChild(buttonGrid);

//Get a Grid Size from user
let userInput;

if (userInput === undefined || Number(!isFinite(userInput))){
    userInput = 16
} else {
    userInput = document.querySelector("#gridSize").value;
}

document.querySelector("#buttons").addEventListener("click", changeGridSize);
function changeGridSize() {
    
  userInput = document.querySelector("#gridSize").value;

  if (userInput > 100 || userInput < 1){
      alert('Enter a number between 1 and 100')
      userInput = 16
  } else {
    clearGrid();
    createGrid(userInput);
    return userInput
  }
  
}

//Creates divs based on userInput
function createDiv(userInput, color) {
  let smallDiv = document.createElement("div");
  smallDiv.classList.add("innerBox");

  boxDiv.appendChild(smallDiv);
  let sum;
  if (userInput === undefined) {
    sum = 776  / 16;
  } else {
    sum = 776 / Number(userInput);
  }

  smallDiv.style.height = sum + "px";
  smallDiv.style.width = sum + "px";
  smallDiv.style.background = "white";

  if (color === undefined) {
    smallDiv.addEventListener("mouseenter", () => {
      smallDiv.style.background = "black";
    });
  } else {
    smallDiv.addEventListener("mouseenter", () => {
      smallDiv.style.background = `rgb(${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )})`;
    });
  }
}

//Creates the rows and columns of divs based on userinput, or default start of 16
function createGrid(userInput, color) {
  let width = userInput;
  let height = userInput - 1;

  if (userInput === undefined || Number(!isFinite(userInput))) {
    for (let i = 0; i < 16; i++) {
      for (let x = 0; x < 15; x++) {
        createDiv(16, color);
      }
      createDiv(16, color);
    }
  } else {
    for (let i = 0; i < width; i++) {
      for (let x = 0; x < height; x++) {
        createDiv(userInput, color);
      }
      createDiv(userInput, color);
    }
  }
}
//if nothing clicked, rows and columsn runs default, otherwise run with prompt return
createGrid();

//Creates event to click the clear button
let getClear = document.querySelector("#clear");
getClear.addEventListener("click", gridClear);

//function allows for the color of the square divs to turn back to white
function gridClear() {
  innerBox.forEach((element) => {
    element.style.background = "white";
  });
    clearGrid();
    createGrid(userInput);
}

function clearGrid() {
  let elements = document.getElementsByClassName("innerBox");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

let innerBox = document.querySelectorAll(".innerBox");

//Create button to change color to random

let getRandomColor = document.querySelector("#randomColor");
getRandomColor.addEventListener("click", getColor);

function getColor() {
  innerBox.forEach((element) => {
    element.style.background = "white";
  });
  let color = true;
  clearGrid();
  createGrid(userInput, color);
}
