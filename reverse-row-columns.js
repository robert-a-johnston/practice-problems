// reverse the nth row and column of a 2n X 2n matrix array
// return sum of upper quadrant n X n

let mat = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 17],
  [13, 14, 15, 16]
]

function reverseN(matrix){
  let colMax = null
  let rowMax = null
  let maxNum = null
  let arr = []
  let temp = null
  // while(matrix[0][0] !== maxNum){
    // find largest number and col number
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix.length; j++){
        console.log('mn', maxNum)
        if(matrix[i][j] > maxNum){
          // set largest number
          maxNum = matrix[i][j]
          // set n to colum of largest
          colMax = j
          console.log('col', colMax)
        }
      }
    }

    // reverse nth column
    // create temp array
    for(let i = 0; i < matrix.length; i++){
      temp = matrix[i][colMax]
      arr.push(temp) 
    }
    // push values of temp array to matrix
    for (let i = 0; i < matrix.length; i++){
      temp = arr.pop()
      matrix[i][colMax] = temp
    }
    maxNum = 0
    // find largest number and row number
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix.length; j++){
        console.log('mn', maxNum)
        if(matrix[i][j] > maxNum){
          // set largest number
          maxNum = matrix[i][j]
          // set n to colum of largest
          rowMax = i
          console.log('row', rowMax)
        }
      }
    }

    // reverse row of matrix
    matrix[rowMax].reverse()
  // }
  console.log(matrix)
  console.log(arr)
  

}

reverseN(mat)