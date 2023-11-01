//1748. Sum of Unique Elements

// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

var sumOfUnique = function(nums) {
  let sum = 0;
  let numberCount = {};

  for (let num of nums){
      if (numberCount[num]){
          numberCount[num]++
      } else {
          numberCount[num] = 1;
      }

      if (numberCount[num] === 1){
          sum += num;
      } else if (numberCount[num] === 2){
          sum -= num;
      }  
  }
  return sum;
};