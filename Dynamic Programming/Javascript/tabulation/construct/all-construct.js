// input: target string and array of strings(a word bank)
// output: 2d array 
//objective:return array containing all of the ways that target
// can be constructed using the word bank
// can use words more than once

// time complex: O(n^m)
// space complex: O(n^m)
// m = target.length n = wordBank.length

const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
  .fill()
  .map(() => [])
  table[0] = [[]]

  for(let i = 0; i <= target.length; i++) {
    for(let word of wordBank){
      if(target.slice(i, i + word.length) === word) {
        const newCombination = table[i].map(subarray => [...subarray, word])
        table[i + word.length].push(...newCombination)
      }
    }
  }
  return table[target.length]
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
// console.log(allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeez', [
//   'e',
//   'ee',
//   'eee',
//   'eeee',
//   'eeeee',
//   'eeeeee'
// ])) // []