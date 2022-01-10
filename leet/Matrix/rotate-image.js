// You are given an n x n 2D matrix representing an 
// image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means 
// you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
   // swap rows and columns and reverse rows
  for(let r = 0; r < matrix.length; r++) {
    for(let c = r; c < matrix[0].length; c++) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]]
    }
  }  
  for(let row of matrix) {
    row.reverse()
  }
  return matrix
};

const matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotate(matrix))