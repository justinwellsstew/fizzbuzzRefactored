var number = prompt("Enter fizz buzz number");
+number
var newElement; 
var newText;
var list = document.getElementById('fizzBuzzList');

function fizzbuzz(max) {

  function check(n) {
    var msg = '';
    if ( n % 3 == 0 ) { msg += "Fizz" };
    if ( n % 5 == 0 ) { msg += "Buzz" };
    return msg || n;
  }

  for (var i = 1; i <= max; i++) {
    newElement = document.createElement('li');
    newText = document.createTextNode(check(i));
    newElement.appendChild(newText);
    list.appendChild(newElement);
  }
}

fizzbuzz(number);