( function () {
  'use strict';


  // var one = getElementById('one').value;
  // var two = getElementById('two').value;
  // var three = getElementById('three').value;
  // var four = getElementById('four').value;
  // var five = getElementById('five').value;
  // var six = getElementById('six').value;
  // var seven = getElementById('seven').value;
  // var eight = getElementById('eight').value;
  // var nine = getElementById('nine').value;
  // var zero = getElementById('zero').value;
  //
  //
  // var add = getElementById('add').value;
  // var subtract = getElementById('subtract').value;
  // var multiply = getElementById('multiply').value;
  // var divide = getElementById('divide').value;
  // var decimal = getElementById('decimal').value;
  // var equals = getElementById('equals').value;
  // var clear = getElementById('clear').value;


// function to on click assign the value of the element clicked to variable one and create p tag in html that will hold it all and do a text.content to push that value into the p tag

// then make it repeatable for every time a button is clicked

// then pull the content from that p tag when click = and run the operation

// EXAMPLE FROM ONLINE:
// var operators = {
//     '+': function(a, b) { return a + b },
//     '<': function(a, b) { return a < b },
//      // ...
// };
//
// var op = '+';
// alert(operators[op](10, 20));

  function



// do math based on operation

  function doMath(num1, num2) {
    var num1 = window.prompt('pick first number');
    console.log(num1);
    var operator = window.prompt('pick operator');
    console.log(operator);
    var num2 = window.prompt('pick second number');

    if (operator === 'add') {
      return parseInt(num1) + parseInt(num2);
    } else if (operator === 'multiply') {
      return parseInt(num1) * parseInt(num2);
    } else if (operator === 'subtract') {
      return parseInt(num1) - parseInt(num2);
    } else if (operator === 'divide') {
      return parseInt(num1) / parseInt(num2);
    }

    }
    var total = parseInt(num1) + operator + parseInt(num2);

  }





})();
