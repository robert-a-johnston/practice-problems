// Given a square matrix, calculate the absolute difference 
// between the sums of its diagonals.
// The function is expected to return an INTEGER.
// The function accepts 2D_INTEGER_ARRAY arr as parameter.

// input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// output 15

function diagonalDifference(matrix) {
  
  let diagonal1 = 0, diagonal2 = 0;

  for (let row = 0; row < matrix.length; row++) {
      diagonal1 += matrix[row][row];
      diagonal2 += matrix[row][matrix.length - row - 1];
  }
  console.log(Math.abs(diagonal1 - diagonal2));
}

arr1 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
diagonalDifference(arr1)