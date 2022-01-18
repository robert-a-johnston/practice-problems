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
  // Return number of 1 bits
  let numberOfOneBits  = 0

  // Convert n to string and split into array of elements 0s and 1s
  // 2 in toString(2) indicates base 2 or binary representation
  const arr = n.toString(2).split('')
  // Iterate over each element and add 1 to count of number of 1s
  arr.map(element => {
      element === "1" ?  numberOfOneBits++ : numberOfOneBits+=0
  })
  return numberOfOneBits

}
let n = 011011
console.log(hammingWeight(n)) // 4