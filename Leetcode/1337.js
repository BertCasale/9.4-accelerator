// 1337. The K Weakest Rows in a Matrix

// You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

// A row i is weaker than a row j if one of the following is true:

// The number of soldiers in row i is less than the number of soldiers in row j.
// Both rows have the same number of soldiers and i < j.
// Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

var kWeakestRows = function(mat, k) {
  let soldierCount = {}
  let weakestKRows = [];
  //loop through the outer array
  for (let i = 0; i < mat.length; i++){
      //binary search the inner array
      let innerArr = mat[i];
      let left = 0;
      let right = innerArr.length;

      while (left <= right){
          let mid = Math.floor((left + right) / 2);
          if (innerArr[mid] === 1){
              left = mid + 1;
          } else {
              right = mid - 1;
          }
      }
      soldierCount[i] = left;
  }
  //create array of the rows sorted by the count
  let sortedRows = Object.entries(soldierCount).sort((a,b)=> a[1] - b[1]);

  //push the k number of row indexes into the weakest arr
  for (let i = 0; i < k; i ++){
      weakestKRows.push(sortedRows[i][0]);
  }
  
  return weakestKRows;
};