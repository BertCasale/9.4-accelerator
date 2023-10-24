// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  //return empty array if theres no input
  if (!input || !input[0] && input[0] !== 0){
    return []
  }
  
  //array for keeping track of the numbers
  let countSumArr = [0, 0];
  //loop through input array
  for (let num of input) {
    //check if positive and increment first array value
    if (num > 0){
      countSumArr[0]++
      //check if negative and add to the second array value
    } else if (num < 0){
      countSumArr[1] += num;
    }
  }
  
  return countSumArr;
}

