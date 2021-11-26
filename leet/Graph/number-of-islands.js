// Given an m x n 2D binary grid grid which represents a map 
// of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting 
// adjacent lands horizontally or vertically. You may assume 
// all four edges of the grid are all surrounded by water.

/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
   // helper function
   const explore = (grid, row, column, visited) => {
    // check inside grid
    
   const rowInbounds = 0 <= row && row < grid.length
   let columnInbounds = 0 <= column && column < grid[0].length

    if(!rowInbounds || !columnInbounds) return false

    if(grid[row][column] === '0') return false

    const position = row + ',' + column
    if(visited.has(position)) return false

    visited.add(position)
    explore(grid, row - 1, column, visited)
    explore(grid, row + 1, column, visited)
    explore(grid, row, column - 1, visited)
    explore(grid, row, column + 1, visited)

    return true
   }
   // main function
   // need count return
   let count = 0
   const visited = new Set()

   for(let row = 0; row < grid.length; row ++) {
     for(let column = 0; column < grid[row].length; column++){

      if(explore(grid, row, column, visited)  === true) {
        count++
      }
     }
   }

   return count
    
};

const  grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log(numIslands(grid))  // 1
console.log(numIslands(grid2)) // 3