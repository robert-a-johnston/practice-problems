// input: target string and array of strings(a word bank)
// output: boolean
//objective: can you make target string out of array (word bank)
// of words(strings)
// can use words more than once

// time complex: O(m^2 * n)
// space complex: O(m)
// m = target.length n = wordBank.length

const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1).fill(false)

  table[0] = true

  for(let i = 0; i <= target.length; i++) {
    if(table[i] === true) {
      for(let word of wordBank) {
        // if the word matches the characters starting at i
        if(target.slice(i, i + word.length) === word){
          table[i + word.length] = true
        }
      }
    }
  }
  return table[target.length]
}

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))  // true 
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // false
console.log(canConstruct('', ['cat', 'dog', 'mouse']))  // true (use no elements)
console.log(canConstruct('enterapotentpot', ['a', 'p','ent','enter', 'ot', 'o', 't'])) // true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee'
])) // false