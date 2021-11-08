// input: target string and array of strings(a word bank)
// output: integer
//objective: return number of ways the target can be constructed 
// using the word bank
// can reuse strings in word bank

// time complex: brute force: O(n^m) memo: O(n * m^2)
// space complex: O(m^2)
// m = target.length n = wordBank.length


const countConstruct = (target, wordBank, memo = {}) => {
  if(target in memo) return memo[target]
  if(target === '') return 1

  let totalCount = 0
  
  for(let word of wordBank) {
    // look for prefix
    if(target.indexOf(word) === 0) {
     const numWays = countConstruct(target.slice(word.length), wordBank, memo)
     totalCount += numWays
    }
  }
  memo[target] = totalCount
  return totalCount
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