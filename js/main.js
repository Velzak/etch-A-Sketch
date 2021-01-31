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




function createDiv(){
    let smallDiv = document.createElement('div')
    smallDiv.classList.add('innerBox')
    boxDiv.appendChild(smallDiv)
    let sum = 998 / 16
    smallDiv.style.height = sum + 'px'
    smallDiv.style.width = sum + 'px'

}

function divSize(){
    
}

function rowaAndColumn(){
    for (let i = 0; i < 16; i++) {
        for (let x = 0; x < 15; x++) {
            createDiv()
        }
        createDiv()
    }
}

rowaAndColumn()

