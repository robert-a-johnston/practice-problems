// Given a string s and a dictionary of strings wordDict, 
// return true if s can be segmented into a space-separated 
// sequence of one or more dictionary words.

// Note that the same word in the dictionary may 
// be reused multiple times in the segmentation.


// Input: s = "leetcode", wordDict = ["leet","code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".

var wordBreak = function(s, wordDict) {
  const table = Array(s.length + 1).fill(false)

  table[0] = true
  for(let i = 0; i <= s.length; i++) {
    if(table[i] === true) {
      for(let word of wordDict) {
        if(s.slice(i, i + word.length) === word) {
          table[i + word.length] = true
        }
      }
    }
  }
  return table[s.length]
}

console.log(wordBreak('leetcode', ['leet', 'code'])) // T