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

let boxDiv = document.createElement('div')
boxDiv.id = 'outerBox'
document.body.appendChild(boxDiv)



//Creates divs based on userInput
function createDiv(userInput){
    let smallDiv = document.createElement('div')
    smallDiv.classList.add('innerBox')
    boxDiv.appendChild(smallDiv)
    let sum;
    if(userInput === undefined){
        sum = 998 / 16
    } else {
        sum = 998 / Number(userInput)
    }
    
    smallDiv.style.height = sum + 'px'
    smallDiv.style.width = sum + 'px'

}

//Creates the rows and columns of divs based on userinput, or default start of 16
function rowAndColumn(userInput){
    let width = userInput
    let height = userInput - 1

    if(userInput === undefined){
        for (let i = 0; i < 16; i++) {
            for (let x = 0; x < 15; x++) {
                createDiv()
            }
            createDiv()
        }
    } else {
        for (let i = 0; i < width; i++) {
            for (let x = 0; x < height; x++) {
                createDiv(userInput)
            }
            createDiv(userInput)
        }
    }
    
}

rowAndColumn()


//Allows the ouse to hover and change background color for the divs
let innerBox = document.querySelectorAll('.innerBox')
innerBox.forEach((element) => {
    element.addEventListener('mouseover', () => {
        element.style.background = 'black'
    })
})
