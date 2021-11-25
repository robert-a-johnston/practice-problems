/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
//  var pacificAtlantic = function(heights) {
//    if(!heights.length) return heights
//    let y = heights.length
//    let x = heights[0].length
//    let ans = []
//    // creates array with length x * y with
//    // all values set to 0
//    let table = new Uint8Array(x * y) 

//    // depth first search
//    // i and j are index numbers
//    // h = value of graph node
//    const dfs = (i, j, w, h) => {
//      let ij = i * x + j
//      if((table[ij] & w) || heights[i][j] < h) {
//        return table += w, h = heights[i][j]
//      }
//        if(table[ij] === 3) ans.push([i, j])
//        if(i + 1 < y) dfs(i + 1, j, w, h)
//        if(i > 0) dfs(i - 1, j, w, h)
//        if(j + 1 < x) dfs(i, j+ 1, w, h)
//        if( j > 0) dfs(i, j-1, w, h)
//    }
//    for(let i = 0; i < y; i++){
//      dfs(i, 0, 1, heights[i][0])
//      dfs(i, x-1, 2, heights[i][x-1])
//    }
//    for(let j = 0; j < x; j++) {
//      dfs(0, j, 1, heights[0][j])
//      dfs(y-1, j, 2, heights[y-1][j])
//    }
//    return ans
// };

var pacificAtlantic = function(M) {
  if (!M.length) return M
  let y = M.length, x = M[0].length, ans = [],
      dp = new Uint8Array(x * y)
  const dfs = (i, j, w, h) => {
      let ij = i * x + j
      if ((dp[ij] & w) || M[i][j] < h) return
      dp[ij] += w, h = M[i][j]
      if (dp[ij] === 3) ans.push([i,j])
      if (i + 1 < y) dfs(i+1, j, w, h)
      if (i > 0) dfs(i-1, j, w, h)
      if (j + 1 < x) dfs(i, j+1, w, h)
      if (j > 0) dfs(i, j-1, w, h)
  }   
  for (let i = 0; i < y; i++) {
      dfs(i, 0, 1, M[i][0])
      dfs(i, x-1, 2, M[i][x-1])
  }
  for (let j = 0; j < x; j++) {
      dfs(0, j, 1, M[0][j])
      dfs(y-1, j, 2, M[y-1][j])
  }
  return ans
};
const heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]

const heights2 = [[2,1],[1,2]]

console.log(pacificAtlantic(heights))
console.log(pacificAtlantic(heights2))