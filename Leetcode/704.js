// 704. Binary Search

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.


var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right){
      let midpoint = Math.floor((left + right) / 2);
      let currentValue = nums[midpoint];
      
      if (currentValue === target) {
          return midpoint;
      } else if (currentValue > target) {
          right = midpoint - 1;
      } else if (currentValue < target) {
          left = midpoint + 1;
      }
  }
  return -1;
};