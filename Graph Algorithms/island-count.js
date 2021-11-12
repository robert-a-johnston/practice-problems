// complexity
// r = # rows
// c = # columns
// time = O(r * c)
// space = O(r * c)

// grid  
// objective: given a grid with water and land
// find the number of islands

const islandCount = (grid) => {
  let count = 0
  const visited = new Set()
  console.table(grid)
  for(let row = 0; row < grid.length; row++){
    for (let column = 0; column < grid[row].length; column++) {
      
     if(explore(grid, row, column, visited) === true){
       count++
     }
    }
    
  }
  return count
}


const explore = (grid, row, column, visited) => {
  
  const rowInbounds = 0 <= row && row < grid.length
  const columnInbounds = 0 <= column && column < grid[0].length
  
  if(!rowInbounds || !columnInbounds) return false
  
  if (grid[row][column] === 'W') return false
  const pos = row + ',' + column
  if(visited.has(pos)) return false
  visited.add(pos)
  console.log('c < g.l', row, column, grid[0].length)
  explore(grid, row - 1, column, visited)
  explore(grid, row + 1, column, visited)
  explore(grid, row, column - 1, visited)
  explore(grid, row, column + 1, visited)

  return true

}





const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W']
]

console.log(islandCount(grid))