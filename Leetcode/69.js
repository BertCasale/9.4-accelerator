// 69. Sqrt(x)

// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.


var mySqrt = function(x) {
  let left = 0;
  let right = x;

  while (left <= right){
      let mid = Math.floor((left + right) / 2);
      let midSqrd = mid * mid;
      if (midSqrd === x) {
          return mid;
      } else if (midSqrd < x) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }
  return right;
};