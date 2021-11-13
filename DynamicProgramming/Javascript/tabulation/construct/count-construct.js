// input: target string and array of strings(a word bank)
// output: integer
//objective: return number of ways the target can be constructed 
// using the word bank
// can reuse strings in word bank

// time complex: O(m^2 * n)
// space complex: O(m^2)
// m = target.length n = wordBank.length

const countConstruct =(target, wordBank) => {

 const table = Array(target.length + 1).fill(0)
 table[0] = 1


 for(let i = 0; i <= target.length; i++) {
  for(let word of wordBank) {
    if(target.slice(i, i + word.length) === word) {
      table[i + word.length] += table[i]
    }
  }
 }
 return table[target.length]
}


console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']))  // 1 
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // 2
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // 0
console.log(countConstruct('', ['cat', 'dog', 'mouse']))  // 0
console.log(countConstruct('enterapotentpot', ['a', 'p','ent','enter', 'ot', 'o', 't'])) // 4
console.log(countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee'
])) // 0