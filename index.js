const numberButton = document.querySelectorAll('.number'); //console.log(numbers)
const operatorButton = document.querySelectorAll('.operator');
const toolButton = document.querySelectorAll('.others');
const decimalButton = document.querySelector('.decimal');
const screenDisplay = document.querySelector('.screen_display')

let display, number, zero,
    equal = false;
let valEntered = false;

numberButton.forEach(num => {
    num.addEventListener("click", (e) => {
        let str = screenDisplay.textContent
        if (Number(str)===0&& str.indexOf('.') <= -1) {
            display = screenDisplay.textContent = str.replace(/^0+/, "");    
        }
        if (valEntered) {
            display = screenDisplay.textContent = e.target.value;
        } else {
            display = screenDisplay.textContent += e.target.value;
        }

        if (display.length > 16) {
            alert("Thats as far as it goes");
        }
    })
});

decimalButton.addEventListener('click', (e) => {
    let decimal = e.target.value;
    zero = '0.'
    if (zero) {
        display = screenDisplay.textContent += decimal;
    }

});

operatorButton.forEach(op => {
    op.addEventListener('click', () => {
        let butOp = op.textContent; console.log(butOp);

    })
})










