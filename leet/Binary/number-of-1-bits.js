// Write a function that takes an unsigned integer 
// and returns the number of '1' bits it has 
// (also known as the Hamming weight).

// I: integer
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize

// time complexity: O(n)
// space complexity:  

// Objective: 
function hammingWeight(n) {
  var sum  = 0

  var arr = n.toString(2).split('').map(el => {
      el === "1" ?  sum++ : sum +=0
  })
  return sum

}
let n = 011011
console.log(hammingWeight(n))