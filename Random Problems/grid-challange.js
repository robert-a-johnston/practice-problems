// Given a square grid of characters in the range ascii[a-z], 
// rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical 
// order, top to bottom. Return YES if they are or NO if they are not.

g1 = ['ttt', 'zzz', 'zzz']
g2 = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
g3 = [
  'plkcarul',
  'yqkpzifl',
  'bdahextl',
  'fjadsmlo',
  'msokhmxd',
  'bisjycrw',
  'emqdadoz',
  'bvozaplr'
]
function gridChallenge(grid) {
  let sortedGrid = []
  let checkCol = []
  

  // sort grid elements create grid array
  for(let i = 0; i < grid.length; i++) {
    let tempArr = grid[i].split('')
    tempArr.sort()
    checkCol.push(tempArr)
    let tempString = tempArr.join('')
    sortedGrid.push(tempString)
  }

  console.log('checkCol array',checkCol)
  // create new matrix of columns as rows
  let [row] = checkCol

  let colArr = row.map((value, column) => checkCol.map(row => row[column]))
  console.log('row',colArr)
  

  
  // check if colArr rows are in alpha order
  for(let i = 0; i < colArr.length; i++){
    for(let j = 0; j < colArr[i].length; j++){
      let tempValue = colArr[i][j]
      console.log('tempVal', tempValue)
      console.log('colArr', colArr[i][j +1])
      if(tempValue > colArr[i][j + 1]){
        return 'NO'
      }
      
    }  
  }
  return 'YES'
}
  
// gridChallenge(g3)
console.log(gridChallenge(g2))
