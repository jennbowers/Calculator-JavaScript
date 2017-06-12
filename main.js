( function () {
  'use strict';

// this is creating a variable that is pulling from each html element with a class of cal-button

  var elements = document.querySelectorAll('.cal-button');
  var decimalPoint = 0;

// this is creating a for loop to go through each button with a class of cal-button (var elements) and add an event listener to each one to watch for a "click" and when it is click it will run the function(event).
// the function(event) creates a variable out of the content of the button that is clicked. It then creates a variable out of the window of the calc. Then in the window of the calc it puts the content of what was already in the window along with the content of the button that was just pushed.
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function(event){
      var value = event.target.textContent;
      var holdingNode = document.querySelector('.holding-math');
      if (value === 'C') {
        holdingNode.textContent = ' ';
        decimalPoint = 0;
        console.log(value);
      } else if (value === '.') {
        if (decimalPoint < 1) {
          holdingNode.textContent = holdingNode.textContent + value;
          decimalPoint++;
          console.log(decimalPoint);
        } else {
          return;
        }
      } else if (value === 'x') {
          holdingNode.textContent = holdingNode.textContent + '*';
          decimalPoint = 0;
      } else if (value === '/' || value === '-' || value === '+'){
        decimalPoint = 0;
        holdingNode.textContent = holdingNode.textContent + value;
        console.log(holdingNode.textContent);
      } else if (value === '=') {
          console.log(holdingNode.textContent);
          holdingNode.textContent = eval(holdingNode.textContent);
          console.log(holdingNode.textContent);
      } else {
          holdingNode.textContent = holdingNode.textContent + value;
          console.log(holdingNode.textContent);
      }
    // })

  })
  }
  

})();
