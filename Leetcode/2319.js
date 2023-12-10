// 2319. Check if Matrix Is X-Matrix

// A square matrix is said to be an X-Matrix if both of the following conditions hold:

// All the elements in the diagonals of the matrix are non-zero.
// All other elements are 0.
// Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.


var checkXMatrix = function(grid) {
  //col === row or col === length - 1 - row
      //0 === 0          3 === 4 - 1 - 0
      //1 === 1          2 === 4 - 1 - 1
  //any other should equal 0

  let numRows = grid.length;
  let numCols = grid[0].length;

  for (let row = 0; row < numRows; row++){
      for (let col = 0; col < numCols; col++){
          let rightDiag = numCols - 1 - row;
          let value = grid[row][col]
          if (col === row || col === rightDiag){
              if (value === 0){
                  return false;
              }
          } else {
              if (value !== 0){
                  return false;
              }
          }
      }
  }

  return true;
};