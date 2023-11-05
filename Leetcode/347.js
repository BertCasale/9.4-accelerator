// 347. Top K Frequent Elements

// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

var topKFrequent = function(nums, k) {
  let numFreq = {}
  let mostFreq = [];
  for (let i = 0; i < nums.length; i++){
    let num = nums[i];
    if (!numFreq[num]){
      numFreq[num] = 1;
    } else {
      numFreq[num]++;
    }
  }

  let freqArr = Object.entries(numFreq);
  freqArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < k; i++){
    mostFreq.push(freqArr[i][0]);
  }

  return mostFreq;
};