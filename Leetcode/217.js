//217. Contains Duplicate

//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
  //loop through array
      //add number to object
  //return true when we find repeating value
  //otherwise return false
  let numObj = {}
  for (let i = 0; i < nums.length; i++){
      if(numObj[nums[i]]){
          return true
      } 
      numObj[nums[i]] = true
  }
  return false;
};