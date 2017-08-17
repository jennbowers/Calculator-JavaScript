( function () {
  'use strict';

// this is creating a variable that is pulling from each html element with a class of cal-button
  var buttons = document.querySelectorAll('.cal-button');
  var decimalClicked = 0;
  var operatorClicked = 0;

// this is looping through each button and adding event listeners to each and when it is clicked it will run the function(event).
// the function(event) pushes all values into the window of the calculator.
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event){
      var num1;
      var num2;
      var operator;
      var total;
      var splitString;
      var toArray = [];
      var value = event.target.textContent;
      var holdingNode = document.querySelector('.holding-math');

      function doMath(operator) {
        num1 = parseFloat(splitString[0]);
        num2 = parseFloat(splitString[2]);
        if (operator === '*') {
          total = num1 * num2;
        } else if (operator === '/') {
          total = num1 / num2;
        } else if (operator === '+') {
          total = num1 + num2;
        } else {
          total = num1 - num2;
        }
        return total;
      }

      // beginning function for any button pushed
      if (value === 'C') {
        holdingNode.textContent = '';
        operatorClicked = 0;
        decimalClicked = 0;
        console.log(value);
      } else if (value === '.') {
        if (decimalClicked < 1) {
          holdingNode.textContent = holdingNode.textContent + value;
          decimalClicked++;
          console.log(decimalClicked);
        } else {
          return;
        }
      } else if (value === 'x' || value === '/' || value === '-' || value === '+'){
          if (operatorClicked < 1) {
            if (value === 'x') {
              value = '*';
            }
            holdingNode.textContent = holdingNode.textContent + ' ' + value + ' ';
            operatorClicked++;
            console.log(operatorClicked);
            console.log(holdingNode.textContent);
          } else {
            return;
          }
          decimalClicked = 0;
      } else if (value === '=') {
          operatorClicked = 0;
          console.log(holdingNode.textContent);
          // split string & put in array
          splitString = holdingNode.textContent.split (" ");
          console.log(splitString);
          // doing math with split string
          if (splitString[1] === "*") {
            console.log(doMath('*'));
            holdingNode.textContent = doMath('*');
          } else if (splitString[1] === "/") {
            console.log(doMath('/'));
            holdingNode.textContent = doMath('/');
          } else if (splitString[1] === "-") {
            console.log(doMath('-'));
            holdingNode.textContent = doMath('-');
          } else if (splitString[1] === "+") {
            console.log(doMath('+'));
            holdingNode.textContent = doMath('+');
          }
      } else {
          holdingNode.textContent = holdingNode.textContent + value;
          console.log(holdingNode.textContent);
          operatorClicked = 0;
      }
  });
  }


})();
