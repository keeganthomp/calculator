var numberPadButtons = document.getElementsByClassName("numberPad");
var answer = document.querySelector(".calcDisplay");
var calcValues = "";
var display = "";
var result = 0;

for (let i = 0; i < numberPadButtons.length; i++) {
  //   calcValues.push(numberPadButtons[i].innerHTML);
  numberPadButtons[i].addEventListener("click", function() {
    pushIntoCalcValues(i);
    console.log(calcValues);
    displayValues(this);
    if (this.innerHTML == "C") {
      clearConsole();
    } else if (this.innerHTML == "=") {
      calcValues = calcValues.slice(0, -1);
      calcValues = calcValues.replace("X", "*");
      console.log("calcValues:", calcValues);
      var finalAnswer = eval(calcValues);
      answer.innerHTML = finalAnswer;
      calcValues = finalAnswer;
      display = finalAnswer;
    }
  });
}

function displayValues(x) {
  display += x.innerHTML;
  answer.innerHTML = display;
}

function pushIntoCalcValues(int) {
  calcValues += numberPadButtons[int].innerHTML;
}

function pushIntoAdditionArray(int) {
  addition.push(Number(calcValues[int]));
}

function pushNumbersIntoArray(x) {
  calcValues.push(Number(numberPadButtons[x].innerHTML));
}

function collectNumbersInput(x) {
  calcValues.push(numberPadButtons[int].innerHTML);
  display += this.innerHTML;
  answer.innerHTML = display;
}

// function add(int) {
//   //   calcValues.splice(calcValues[int], 1);
//   console.log("adding Function!!");
//   for (let k = 0; k < calcValues.length; k++) {
//     pushIntoAdditionArray(calcValues[k]);
//     console.log("Addition Array:", addition);
//   }
//   console.log("calcValues in 'add':", calcValues[int]);
//   console.log("calcValues in add:", calcValues);
//   result += calcValues[int];
//   console.log(result);
//   console.log("Addition Array:", addition);

//   // answer.innerHTML = result;
// }

function clearConsole() {
  calcValues = [];
  display = " ";
  answer.innerHTML = display;
}
