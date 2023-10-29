//1512. Number of Good Pairs

//Given an array of integers nums, return the number of good pairs.

//A pair (i, j) is called good if nums[i] == nums[j] and i < j.

var numIdenticalPairs = function(nums) {
  let numCount = {}
  let goodPairs = 0;

  for (let i = 0; i < nums.length; i++){
      let num = nums[i]
      if (!numCount[num]){
          numCount[num] = 1;
      } else {
          goodPairs+= numCount[num];
          numCount[num]++;
      }
  }
  return goodPairs
};