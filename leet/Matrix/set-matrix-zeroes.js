// Given an m x n integer matrix matrix, if an element is 0, 
// set its entire row and column to 0's, and return the matrix.

// You must do it in place.
const setZero = (r, c, matrix) => {
  for(let i = 0; i < matrix.length; i++){
    matrix[i][c] = 0
  }
  for(let i = 0; i < matrix[0].length; i++){
    matrix[r][i] = 0
  }
  console.log(matrix)
  return matrix
}

var setZeroes = function(matrix) {
  const zeros = []
  let result = []
  for(let r = 0; r < matrix.length; r++){
    console.log(r, matrix[0])
    for(let c = 0; c < matrix[0].length; c++){
      if(matrix[r][c] === 0) zeros.push([r, c])
    }
  }
  for(let address of zeros){
    let row = address[0]
    let col = address[1]
    result = setZero(row, col, matrix)
  }
  return result
};

const matrix = [[1,1,1],[1,0,1],[1,1,1]]
const matrix1 = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]

console.log(setZeroes(matrix))
console.log(setZeroes(matrix1))