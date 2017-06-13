( function () {
  'use strict';

// this is creating a variable that is pulling from each html element with a class of cal-button

  var elements = document.querySelectorAll('.cal-button');
    var decimalClicked = 0;
    var operatorClicked = 0;


// this is creating a for loop to go through each button with a class of cal-button (var elements) and add an event listener to each one to watch for a "click" and when it is click it will run the function(event).
// the function(event) creates a variable out of the content of the button that is clicked. It then creates a variable out of the window of the calc. Then in the window of the calc it puts the content of what was already in the window along with the content of the button that was just pushed.
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event){
      // declaring variables
      var num1;
      var num2;
      var operator;
      var total;
      var splitString;
      var toArray = [];
      var value = event.target.textContent;
      var holdingNode = document.querySelector('.holding-math');
      // declaring functions
      function multiply() {
        num1 = parseFloat(splitString[0]);
        num2 = parseFloat(splitString[2]);
        total = num1 * num2;
        return total;
      }
      function divide() {
        num1 = parseFloat(splitString[0]);
        num2 = parseFloat(splitString[2]);
        total = num1 / num2;
        return total;
      }
      function subtract() {
        num1 = parseFloat(splitString[0]);
        num2 = parseFloat(splitString[2]);
        total = num1 - num2;
        return total;
      }
      function addition() {
        num1 = parseFloat(splitString[0]);
        num2 = parseFloat(splitString[2]);
        total = num1 + num2;
        return total;
      }
      // beginning function
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
      } else if (value === 'x') {
          if (operatorClicked < 1) {
            holdingNode.textContent = holdingNode.textContent + ' ' + '*' + ' ';
            operatorClicked++;
            console.log(operatorClicked);
            console.log(holdingNode.textContent);
          } else {
            return;
          }
          decimalClicked = 0;
      } else if (value === '/' || value === '-' || value === '+'){
          if (operatorClicked < 1) {
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
          // multiply
          if (splitString[1] === "*") {
            // running multiply function to put values in holdingNode
            console.log(multiply());
            holdingNode.textContent = multiply();
          // divide
          } else if (splitString[1] === "/") {
            // running divide function to put values in holdingNode
            console.log(divide());
            holdingNode.textContent = divide();
          // subtract
          } else if (splitString[1] === "-") {
            // running subtract function to put values in holdingNode
            console.log(subtract());
            holdingNode.textContent = subtract();
          } else if (splitString[1] === "+") {
            // running addition function to put values in holdingNode
            console.log(addition());
            holdingNode.textContent = addition();
          }
      } else {
          holdingNode.textContent = holdingNode.textContent + value;
          console.log(holdingNode.textContent);
          operatorClicked = 0;
      }
    // })

  })
  }


})();
