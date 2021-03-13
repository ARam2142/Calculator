//grab all elements, make sure all buttons click
const showNum = document.querySelector('.screen_display'); //console.log(screen)
//const buttons = document.querySelectorAll('.calcbutton');console.log(buttons);
const numbers = document.querySelectorAll('.number'); console.log(numbers)
let displayResult = false;

numbers.forEach(num => {
    num.addEventListener("click", e => {
        displayResult = true;
        let target = e.target;
        let targetNum = target.textContent; console.log(targetNum)
        let displayNum = showNum.innerHTML = targetNum;

        let theNum = 0
        while (console.log(theNum < 10)) {
            console.log(theNum++)
            theNum = target + displayNum
        }
        
        
        
    })
})



