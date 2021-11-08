// input: target string and array of strings(a word bank)
// output: boolean
//objective: can you make target string out of array (word bank)
// of words(strings)
// can use words more than once

// time complex: brute force: O(n^m) memo: O(n * m^2)
// space complex: O(m^2)
// m = target.length n = wordBank.length

const canConstruct = function(target, wordBank, memo = {}) {
  if (target in memo) return memo[target]
  if(target === '') return true

  for(let word of wordBank) {
    if(target.indexOf(word) === 0) {
      const suffix = target.slice(word.length)
      if(canConstruct(suffix, wordBank, memo) === true) {
        memo[target] = true
        return true
      }
    }
  }
  memo[target] = false
  return false
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