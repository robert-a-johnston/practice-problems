// complexity
// r = # rows
// c = # columns
// time = O(r * c)
// space = O(r * c)

// grid  
// objective: return min island size

const minIsland = (grid) => {
  let visited = new Set()
  let minSize = Infinity
  for(let r = 0; r < grid.length; r++) {
    for(let c = 0; c < grid[r].length; c++) {
     const tempSize = exploreSize(grid, r, c, visited)
     if (tempSize > 0 && tempSize < minSize) {
       minSize = tempSize
     }
    }
  }

  return minSize
}


const exploreSize = (grid, r, c, visited) => {
  const rowInbounds = 0 <= r && r < grid.length
  const columnInbounds = 0 <= c && c < grid[0].length
  
  if(!rowInbounds || !columnInbounds) return 0
  if(grid[r][c] === 'W') return 0

  const pos = r + ',' + c
  if(visited.has(pos)) return 0
  visited.add(pos)

  let size = 1
  size += exploreSize(grid, r - 1, c, visited)
  size += exploreSize(grid, r + 1, c, visited)
  size += exploreSize(grid, r, c - 1, visited)
  size += exploreSize(grid, r, c + 1, visited)

  return size
}

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'L', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W']
]

console.log(minIsland(grid))