const numberButton = document.querySelectorAll('.number'); //console.log(numbers)
const operatorButton = document.querySelectorAll('.operator');
const toolButton = document.querySelectorAll('.others');
const decimalButton = document.querySelector('.decimal');
const clearBtn = document.querySelector('.reset')
const screenDisplay = document.querySelector('.screen_display')

let display, number, zero,
operator, equal = false;
let valEntered = false;

numberButton.forEach(num => {
    num.addEventListener("click", (e) => {
        let str = screenDisplay.textContent;
        if (!str.includes(".")) {
            display = screenDisplay.textContent = str.replace(/^0+/, "");
        }
        if (valEntered) {
            display = screenDisplay.textContent = e.target.value;
        } else {
            display = screenDisplay.textContent += e.target.value;
        }
        
    })
});

decimalButton.addEventListener('click', (e) => {
    let decimal = e.target.value;
    let screenStr = screenDisplay.textContent;
    decimalButton.disabled = true
    if (screenStr.indexOf('.') > -1) {
        display = screenDisplay.textContent = screenStr.search(/^\d+(\.\d+)?$/); 
    }
    if (decimal) {
        display = screenDisplay.textContent += decimal
    }
    
    
});


operatorButton.forEach(op => {
    op.addEventListener('click', () => {
        let strOnScreen = /^(\d+(\.\d+)?)$/;

        let butOp = op.textContent; console.log(butOp);
        
    })
})

clearBtn.addEventListener('click', (e)=> {
    display = screenDisplay.textContent = "0";
    decimalButton.disabled = false;
})









