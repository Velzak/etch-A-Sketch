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
upperDiv.appendChild(askUser);

let colorPicker = document.createElement("button");
colorPicker.id = "colorpicker";
colorPicker.textContent = "Change Color";
upperDiv.appendChild(colorPicker);

let boxDiv = document.createElement("div");
boxDiv.id = "outerBox";
document.body.appendChild(boxDiv);

//Creates divs based on userInput
function createDiv(userInput) {
  let smallDiv = document.createElement("div");
  smallDiv.classList.add("innerBox");
  smallDiv.classList.add("container");

  boxDiv.appendChild(smallDiv);
  let sum;
  if (userInput === undefined) {
    sum = 798 / 16;
  } else {
    sum = 798 / Number(userInput);
  }

  smallDiv.style.height = sum + "px";
  smallDiv.style.width = sum + "px";
  smallDiv.style.background = "white";
  smallDiv.addEventListener("mouseenter", () => {
    smallDiv.style.background = "black";
  });
}

//Creates the rows and columns of divs based on userinput, or default start of 16
function createGrid(userInput) {
  let width = userInput;
  let height = userInput - 1;

  if (userInput === undefined) {
    for (let i = 0; i < 16; i++) {
      for (let x = 0; x < 15; x++) {
        createDiv();
      }
      createDiv();
    }
  } else {
    for (let i = 0; i < width; i++) {
      for (let x = 0; x < height; x++) {
        createDiv(userInput);
      }
      createDiv(userInput);
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
  //TODO:  Create prompt that will ask user for new input

  let userInput = prompt("enter a new grid size:");
  if (userInput <= 100 && userInput >= 1) {
    clearGrid();
    createGrid(userInput);
  } else {
    alert("Please Enter a Number from 1 - 100");
  }
}

function clearGrid() {
  let elements = document.getElementsByClassName("innerBox");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}

//Allows the mouse to hover and change background color for the divs
let innerBox = document.querySelectorAll(".container");
