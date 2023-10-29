//1. Two Sum

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
  let numObject = {};
  let subValue = 0;
  for (i = 0; i < nums.length; i++){
      subValue = target - nums[i];
      if (numObject[subValue] || numObject[subValue] === 0){
          return [numObject[subValue], i];
      }
      numObject[nums[i]] = i;
  }
};