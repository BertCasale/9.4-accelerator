// 448. Find All Numbers Disappeared in an Array

// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.


var findDisappearedNumbers = function(nums) {
  //make an object to keep track of the seen numbers
  //make an output array to store the unseen numbers
  //looking through each number in the nums arr
      //keep track if ive seen it

  //loop from 1 to n (length of nums), check if the number is in the object 
  //return output array

  let numTracker = {};
  let unseenNums = [];

  for (let i = 0; i < nums.length; i++){
      if (!numTracker[nums[i]]){
          numTracker[nums[i]] = true;
      }
  }

  for (let i = 1; i <= nums.length; i++){
      if (!numTracker[i]){
          unseenNums.push(i);
      }
  }

  return unseenNums;
};