var numDecodings = function(s) {
  // table 
  const table = Array(s.length + 1).fill(0)

  // if first number is 0 return 0
  if(s[0] === '0') return 0
  
  // base cases
  table[0] = 1
  table[1] = 1

  // iterate over given string
  for(let i = 2; i <= s.length; i++) {
    // get one and 2 digit numbers (cannot be more than 2 digits)
    const oneDigit = s.slice(i - 1, i)
    const twoDigit = s.slice(i - 2, i)

    // check for valid one digit
    if(oneDigit > 0) table[i] = table[i - 1]
    // check for valid two digit
    if(twoDigit >= 10 && twoDigit <= 26) table[i] += table[i - 2]

  }
  return table[s.length]
}

console.log(numDecodings('12')) // 2
console.log(numDecodings('226')) // 3
console.log(numDecodings('0')) // 0
console.log(numDecodings('06')) // 0