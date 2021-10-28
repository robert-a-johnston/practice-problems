// Given two integers a and b, return the sum 
// of the two integers without using the operators + and -.

// I: two integers
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize, cannot use + or -

// time complexity: O(n)
// space complexity:  

// Objective: find the target value index

function getSum(a, b) {
  console.log(a, b)
  if (b == 0) {
    return a;
} else {
    // a ^ b calculates a,  and the second part
    // will = 0 when a = answer
    return getSum(a ^ b, (a & b) << 1)
}
 
  
}

let a = 5
let b = 10
console.log(getSum(a,b))