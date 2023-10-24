// 1295. Find Numbers with Even Number of Digits

// Given an array nums of integers, return how many of them contain an even number of digits.

var findNumbers = function(nums) {
  //keep count of numbers with even number of digits
  let evenDigitCount = 0;
  //loop through the numbers
  for (let num of nums) {
    //convert numbers to strings, check if the length is even
    if (num.toString().length % 2 === 0) {
        evenDigitCount++;
    }
  }
  return evenDigitCount;
};