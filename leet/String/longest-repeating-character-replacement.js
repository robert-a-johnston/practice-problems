// You are given a string s and an integer k. You can choose 
// any character of the string and change it to any other 
// uppercase English character. You can perform this 
// operation at most k times.

// Return the length of the longest substring containing 
// the same letter you can get after performing the above operations.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
  // floating window left
  let left = 0
  // number of replacements returned
  let max = 0
  // counter
  let mostFrequentCount = 0
  // create hash table
  let freqHash = new Array(26).fill(0);
  // gets char code for A
  let A = 'A'.charCodeAt()
  
  // set right side of window
  for (let right = 0; right < s.length; right++) {
    // sets index for char code in respect to A
      const idx = s[right].charCodeAt() - A
      // adds to hash table
      freqHash[idx] = freqHash[idx] + 1 || 1
      // splits up hash table and finds the most frequent count
      mostFrequentCount = Math.max(...freqHash)
      // moves window
      while (right - left + 1 - mostFrequentCount > k) {
          freqHash[s[left].charCodeAt() - A]--;
          mostFrequentCount = Math.max(...freqHash)
          left++
      }
      // sets max return
      max = Math.max(max, right - left + 1)
  }

  return max
};

console.log(characterReplacement('ABAB', 2)) // 4
console.log(characterReplacement('AABABBA', 1)) // 4
