// staircase with n steps
// can go up 1, 2 or 3 steps
// count how many ways to climb stairs

function countWays(n){
  if(n < 0){
    return 0
  } else if(n === 0){
    return 1
  } else {
    return countWays(n -1) + countWays(n -2) + countWays(n - 3)
  }
}


console.log(countWays(6))
