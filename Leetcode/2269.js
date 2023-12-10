// 2269. Find the K-Beauty of a Number

// The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

// It has a length of k.
// It is a divisor of num.
// Given integers num and k, return the k-beauty of num.

// Note:

// Leading zeros are allowed.
// 0 is not a divisor of any value.
// A substring is a contiguous sequence of characters in a string.


var divisorSubstrings = function(num, k) {
  //convert num to a string
  let numStr = num.toString();
  //sliding window to check each section of string
  let left = 0;
  let count = 0;
  //used to remove the beginning digit when adding
  let divisor = 10**k;
  let subInt = 0;
  for (let right = 0; right < numStr.length; right++){
      //put the digit on the end of subInt
      subInt = (subInt * 10) + numStr[right]++;

      //if we reach k number of elements in the window
      if (right - left + 1 === k){
          //remove the beginning digit
          subInt = subInt % divisor;
          left++;
          //check if num is divisible by subInt
          if (num % subInt === 0){
              count++;
          }
          
      } 
  }
  return count;
};