// input: target string and array of strings(a word bank)
// output: 2d array 
//objective:return array containing all of the ways that target
// can be constructed using the word bank
// can use words more than once

// time complex: brute force: O(n^m) memo: O(n^m)
// space complex: O(m)
// m = target.length n = wordBank.length

const allConstruct = (target, wordBank, memo = {}) => {
  if(target in memo) return memo[target]
  // ends the recursion 
  if(target === '') return [[]]
  
  const result = []

  for(let word of wordBank) {
    // check that word is prefix of target
    if(target.indexOf(word) === 0) {
      // remove prefix
      const suffix = target.slice(word.length)
      // call allConstruct and save result in suffix Ways
      const suffixWays = allConstruct(suffix, wordBank, memo)
      // puts word in front of array
      const targetWays = suffixWays.map(way => [word, ...way])
      // puts one solution for target in return array
      result.push(...targetWays)
    }
  }
  memo[target] = result
  return result
}




console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']))  //  
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // [
                                                                          //  [purp, le],
                                                                          //  [p, ur, p, le]         
                                                                          // ]
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])) // []
console.log(allConstruct('hello', ['cat', 'dog', 'mouse']))  // []
console.log(allConstruct('', ['cat', 'dog', 'mouse']))  // [[]]
console.log(allConstruct('enterapotentpot', ['a', 'p','ent','enter', 'ot', 'o', 't'])) // 

// note that this is no longer worst case.  worst case would be without z at end.
console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeez', [
  'e',
  'ee',
  'eee',
  'eeee',
  'eeeee',
  'eeeeee'
])) // []