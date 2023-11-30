// 258. Add Digits

// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.


var addDigits = function(num) {
  let sum = 0;

  //loop through the digits in nums
  while (num !== 0){
    let digit = num % 10;
    num = Math.floor(num / 10);
    sum += digit;
  }

  //loop through the sum till it has one digit
  while (sum > 9){
    let digit = sum % 10;
    sum = Math.floor(sum / 10);
    sum += digit;
  }

  return sum;
};


//one loop
var addDigits2 = function(num) {
  let sum = 0;

  //loop through the digits in nums
  while (num !== 0){
    let digit = num % 10;
    num = Math.floor(num / 10);
    sum += digit;

    if (sum > 9){
        let sumDigit = sum % 10;
        sum = Math.floor(sum / 10);
        sum += sumDigit;
    }
  }

  return sum;
};