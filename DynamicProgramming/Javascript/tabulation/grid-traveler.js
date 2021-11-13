// input: grid width m grid rows n cols
// output: integer
// objective: in 2d grid move from top left corner to bottom right corner
// how many ways can you travel the grid
// constraints:  can only move down or left

// time complex: O(n^2)
// space complex: O(n)

const gridTraveler = (m, n) => {
  const table = Array(m + 1)
  .fill()
  .map(() => Array(n + 1).fill(0))

  table[1][1] = 1


  for(let i = 0; i <= m; i++){
    for(let j = 0; j <= n; j++){
      const current = table[i][j]
      // bounds checking
      if(j + 1 <= n) table[i][j+1] += current
      if(i + 1 <= m) table[i+1][j] += current
    }
  }

  return table[m][n]
}

console.log(gridTraveler(1, 1)) // 1
console.log(gridTraveler(2, 3)) // 3
console.log(gridTraveler(3, 2)) // 3
console.log(gridTraveler(3, 3)) // 6
console.log(gridTraveler(18, 18)) // large number