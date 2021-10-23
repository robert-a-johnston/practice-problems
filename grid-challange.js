// Given a square grid of characters in the range ascii[a-z], 
// rearrange elements of each row alphabetically, ascending. 
// Determine if the columns are also in ascending alphabetical 
// order, top to bottom. Return YES if they are or NO if they are not.

g1 = ['ttt', 'zzz', 'zzz']
g2 = ['ebacz', 'fghij', 'olmkn', 'trpqs', 'xywuv']
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
  let count = 0
  let count2 = 0

  // sort grid elements create grid array
  for(let i = 0; i < grid.length; i++) {
    let tempArr = grid[i].split('')
    tempArr.sort()
    checkCol.push(tempArr)
    let tempString = tempArr.join('')
    sortedGrid.push(tempString)
  }
  console.log('checkCol',checkCol)
  // set first group to check
  let tempColArr = checkCol[0]
  // check for col order
  for(let i = 1; i < checkCol.length; i++ ){
    // drop in after so can check trailing array
    if(count > 0){
      tempColArr = checkCol[i]
    }
    console.log('temp', tempColArr)
    for(let j = 0; j < checkCol[i].length; j++){
      // check array groups and add to count if
      // one is
      if(tempColArr[j] > checkCol[i][j]){
        return 'NO'
      }
    }
    count++
  }
  console.log('count2', count2)
  // if(count2 > 0){
  //   return 'NO'
  // }else{
  //   return 'YES'
  // }
  return 'YES'
}

console.log(gridChallenge(g3))
// console.log(gridChallenge(g2))
