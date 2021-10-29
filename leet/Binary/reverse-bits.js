

// I: string of binary numbers
// O: integer
// EDGE CASE: 
// CONSTRAINTS: optimize

// time complexity: O(n)
// space complexity:  

// Objective: return decimal string of reversed number

function reverseBits(n) {
  let binary = n.toString(2);
  const appendingZeros = 32 - binary.length;
  for (let index = 0; index < appendingZeros; index++) {
    binary = "0" + binary;
  }
  return parseInt(binary.split("").reverse("").join(""), 2);
}


let n = 010010
let n2 = '00000010100101000001111010011100'
console.log(reverseBits(n2))