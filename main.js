var numberPadButtons = document.getElementsByClassName("numberPad");
var answer = document.querySelector(".calcDisplay");
var calcValues = [];
var display = "";

for (let i = 0; i < numberPadButtons.length; i++) {
  calcValues.push(numberPadButtons[i].innerHTML);
  numberPadButtons[i].addEventListener("click", addValuesToDisplay);
}

function addValuesToDisplay() {
  if (this.innerHTML == "C") {
    display = " ";
    answer.innerHTML = display;    
  } else {
    display += this.innerHTML;
    answer.innerHTML = display;
  }
}
