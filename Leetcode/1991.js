
// 1991. Find the Middle Index in Array

// Given a 0-indexed integer array nums, find the leftmost middleIndex (i.e., the smallest amongst all the possible ones).

// A middleIndex is an index where nums[0] + nums[1] + ... + nums[middleIndex-1] == nums[middleIndex+1] + nums[middleIndex+2] + ... + nums[nums.length-1].

// If middleIndex == 0, the left side sum is considered to be 0. Similarly, if middleIndex == nums.length - 1, the right side sum is considered to be 0.

// Return the leftmost middleIndex that satisfies the condition, or -1 if there is no such index.


var findMiddleIndex = function(nums) {
  //get the total of all numbers
  let rightSum = 0;
  for (let num of nums) {
    rightSum += num;
  }
  
  let leftSum = 0;
  //loop through the nums to find the middle index
  for (let i = 0; i < nums.length; i++) {
    //subtract the number from the right sum
    rightSum -= nums[i];

    //check if the left sum is equal to the right
    if (leftSum === rightSum) {
        return i;
    }

    //add the number to the left sum
    leftSum += nums[i];

  }

  //return -1 if theres no middle index
  return -1;
};