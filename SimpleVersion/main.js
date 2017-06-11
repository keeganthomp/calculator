var numberPadButtons = document.getElementsByClassName("numberPad");
var answer = document.querySelector(".calcDisplay");
var calcValues = "";
var display = "";

for (let i = 0; i < numberPadButtons.length; i++) {
  //   calcValues.push(numberPadButtons[i].innerHTML);
  numberPadButtons[i].addEventListener("click", function() {
    pushIntoCalcValues(i);
    displayValues(this);
    if (this.innerHTML == "C") {
      clearConsole();
    } else if (this.innerHTML == "=") {
      calcValues = calcValues.slice(0, -1);
      calcValues = calcValues.replace("X", "*");
      var finalAnswer = eval(calcValues);
      answer.innerHTML = finalAnswer;
      calcValues = finalAnswer;
      display = finalAnswer;
    }
  });
}

function displayValues(x) {

  display += x.innerHTML;
  display = display.replace("X", "*");
  answer.innerHTML = display;
}

function pushIntoCalcValues(int) {
  calcValues += numberPadButtons[int].innerHTML;
}

function pushNumbersIntoArray(x) {
  calcValues.push(Number(numberPadButtons[x].innerHTML));
}

function clearConsole() {
  calcValues = [];
  display = " ";
  answer.innerHTML = display;
}
