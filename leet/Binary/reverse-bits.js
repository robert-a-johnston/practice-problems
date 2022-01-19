

// I: string of binary numbers
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize

// time complexity: O(n)
// space complexity:  

// Objective: return decimal string of reversed number

function reverseBits(n) {
  // Convert number to base 2 or binary
  let binary = n.toString(2);
  // Add 0 s
  const appendingZeros = 32 - binary.length;
  
  for (let index = 0; index < appendingZeros; index++) {
    // add 0 s to front of binary
    binary = "0" + binary;
  }

  // return integer
  // .split converts to array of substrings (0s and 1s)
  // .reverse reverses the array and
  // .join puts the reversed string back
  // parsInt() returns an integer from the binary string
  return parseInt(binary.split("").reverse("").join(""), 2);
}


let n = 010010
let n2 = '00000010100101000001111010011100'
console.log(reverseBits(n))