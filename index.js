//BREAK IT UP INTO SMALL CHUNCKS

const screenDisplay = document.querySelector('.screen_display');
const buttons = document.querySelectorAll('[id]')
//const number = document.querySelectorAll('.number');
//const toolButton = document.querySelectorAll('.calcbutton')

let isBtnClicked =false;
let numberEntered = '';
let firstValue = "0";

//buttons do work
buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        inputNumber(this.id)
    });    
});

function inputNumber(number) {
    if (firstValue === "0") {
        const numDisplay = screenDisplay.innerHTML;
        screenDisplay.innerHTML = parseInt(numDisplay + number).toString()
    }
    // let secondValue = ''
    // if (secondValue !== "0") {
    //     let displayNum = screenDisplay.innerHTML 
    //     displayNum= screenDisplay.innerHTML +number
    // }

}


