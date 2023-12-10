// 1380. Lucky Numbers in a Matrix

// Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

// A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.


var luckyNumbers  = function(matrix) {
  let luckyNumbers = [];
  let numRows = matrix.length;
  let numCols = matrix[0].length;
  let smallestSet = new Set();

  //loop through for the smallest numbers in row
  for (let row = 0; row < numRows; row++){
      let smallestNum = Infinity;
      for (let col = 0; col < numCols; col++){
          if (matrix[row][col] < smallestNum){
              smallestNum = matrix[row][col];
          }
      }
      smallestSet.add(smallestNum);
  }

  //loop through for the biggest numbers in column
  for (let col = 0; col < numCols; col++){
      let biggestNum = 0;
      for (let row = 0; row < numRows; row++){
          if (matrix[row][col] > biggestNum){
              biggestNum = matrix[row][col];
          }
      }
      if (smallestSet.has(biggestNum)){
          luckyNumbers.push(biggestNum)
      }
  }
  
  return luckyNumbers;
};