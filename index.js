const screenInput = document.querySelector(".screen-display");
const buttons = document.querySelectorAll(".calcbutton");
console.log(buttons);

buttons.forEach(function (button) {
  button.addEventListener("click", (e) => {
    let target = e.target.id;
    let theNumber = screenInput.value;
    if (!theNumber.includes(".")) {
      screenInput.value = theNumber.replace(/^0+/, "");
    }
    if (button.classList.contains("number")) {
      screenInput.value += target;
    }
    if (button.classList.contains("operator")) {
      screenInput.value += target;
    }
    if (button.classList.contains("decimal")) {
      screenInput.value += target;
    }
    if (button.classList.contains("equal")) {
      screenInput.value = eval(screenInput.value);
    }
    if (button.classList.contains("reset")) {
      screenInput.value = "0";
    }
  });
});
