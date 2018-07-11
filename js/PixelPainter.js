// MAIN PAINTER PARENT DIV
let pixelPainter = document.getElementById('pixelPainter')  

// OUTLINE FOR THE CANVAS
const canvasOutline = document.createElement('div'); 
canvasOutline.id = 'canvasOutline';
pixelPainter.appendChild(canvasOutline);

// OUTLINE FOR THE PIXEL
const pixelOutline = document.createElement('div');
pixelOutline.id = 'pixelOutline';
pixelPainter.appendChild(pixelOutline);


/*--------*/
/* CANVAS */
/*--------*/

// CREATES CANVAS ROWS OF DIVS
for (let i=0; i<12; i++) {
    let canvasRow = document.createElement('div');
    canvasRow.className = 'canvasRow';
    canvasOutline.appendChild(canvasRow)
}

// CREATES CANVAS COLUMNS/DIVS WITHIN EACH INDIVIDUAL DIV ROW 
const getRows = document.getElementsByClassName('canvasRow');
for (let i=0; i<getRows.length; i++) {
    for (let j=0; j<12; j++) {
        let innerSquare = document.createElement('div');
        innerSquare.className = 'innerSquare';
        getRows[i].appendChild(innerSquare);
    }
}

// ADD COLOR TO THE CHOSEN CANVAS
const getInnerSquare = document.getElementsByClassName('innerSquare');
for (let i=0; i<getInnerSquare.length; i++) {
    getInnerSquare[i].addEventListener('click', addColor);
}

function addColor() {
    // console.log('sanityCheck');
    this.style.backgroundColor = colorStorage;

}


/*--------------*/
/* COLOR SWATCH */
/*--------------*/
var colorArr = ['Pink', 'HotPink','DeepPink', 'Thistle', 'Plum', 'Orchid', 'Fuchsia', 'MediumPurple', 'SlateBlue', 'Purple', 'Salmon', 'IndianRed', 'Crimson', 'Red', 'Orange', 'Gold', 'Yellow', 'Moccasin', 'PeachPuff', 'MistyRose', 'Khaki', 'DarkKhaki', 'Chartreuse', 'MediumSpringGreen', 'MediumSeaGreen','SeaGreen', 'Green', 'DarkGreen', 'YellowGreen', 'MediumAquaMarine', 'DarkSeaGreen', 'LightSeaGreen', 'Teal', 'Cyan', 'Turquoise', 'DarkTurquoise', 'Beige', 'PowderBlue', 'LightBlue', 'SkyBlue', 'CornflowerBlue', 'SteelBlue','Blue', 'Navy', 'MidnightBlue', 'Bisque', 'NavajoWhite', 'BurlyWood', 'Tan', 'RosyBrown', 'GoldenRod', 'Peru', 'Chocolate', 'Brown', 'Maroon', 'Silver', 'Gray', 'DimGray', 'SlateGray', 'Black'] 

// CREATES COLOR SWATCH ROWS
for (let i=0; i<6; i++) {
    let swatchRow = document.createElement('div');
    swatchRow.className = 'swatchRow';
    pixelOutline.appendChild(swatchRow);
}
// CREATES COLUMNS FOR COLOR SWATCH
const getSwatchRows = document.getElementsByClassName('swatchRow');
for (let i=0; i<getSwatchRows.length; i++) {
    for (let j=0; j<10; j++) {
        let innerSwatch = document.createElement('div');
        innerSwatch.className = 'innerSwatch';
        getSwatchRows[i].appendChild(innerSwatch);
    }
}

// ADDS COLOR TO INDIVIDUAL SWATCHES
const getPallete = document.getElementsByClassName('innerSwatch');
for (let i=0; i<colorArr.length; i++) {
    getPallete[i].style.backgroundColor = colorArr[i];

    getPallete[i].addEventListener('click', getColor);
}

// SAVES COLOR ON CLICK OF A SWATCH SQUARE
let colorStorage;

function getColor() {
    colorStorage = this.style.backgroundColor;
    console.log(colorStorage);

}

/*---------*/
/* BUTTONS */
/*---------*/

// BUTTON HOUSING
const buttonBox = document.createElement('div');
pixelPainter.appendChild(buttonBox);

// ERASE BUTTON
const eraseButton = document.createElement('div');
eraseButton.className = "button";
eraseButton.innerHTML = "ERASE";
buttonBox.appendChild(eraseButton);
eraseButton.addEventListener('click', eraseSquare);

function eraseSquare() {
    colorStorage = null;
}

// CLEAR BUTTON
const clearButton = document.createElement('div');
clearButton.innerHTML = "CLEAR";
clearButton.className = "button";
buttonBox.appendChild(clearButton);
clearButton.addEventListener('click', clearCanvas);

function clearCanvas() {
    for (let i=0; i<getInnerSquare.length; i++) {
        getInnerSquare[i].style.backgroundColor = null;
    }
}












