//2404. Most Frequent Even Element

//Given an integer array nums, return the most frequent even element.

//If there is a tie, return the smallest one. If there is no such element, return -1.


var mostFrequentEven = function(nums) {
  let evenCount = {}
  //[number, count]
  let highestFrequencyNum = [-1, 0];

  for (let num of nums) {
      if (num % 2 === 0){
          if (evenCount[num]) {
              evenCount[num]++
          } else {
              evenCount[num] = 1;
          }
          
          if (evenCount[num] > highestFrequencyNum[1] || (evenCount[num] === highestFrequencyNum[1] && num < highestFrequencyNum[0])){
              highestFrequencyNum = [num, evenCount[num]]
          }

      }
  }

  return highestFrequencyNum[0]
};