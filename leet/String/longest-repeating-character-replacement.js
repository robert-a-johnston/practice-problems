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
  let left = 0;
  let right = 0;
  let max = 0;
  let mostFreqentCount = 0;
  let freqHash = new Array(26).fill(0);
  let A = 'A'.charCodeAt();
  for (let right = 0; right < s.length; right++) {
      const idx = s[right].charCodeAt() - A;
      freqHash[idx] = freqHash[idx] + 1 || 1;
      mostFreqentCount = Math.max(...freqHash);
      while (right - left + 1 - mostFreqentCount > k) {
          freqHash[s[left].charCodeAt() - A]--;
          mostFreqentCount = Math.max(...freqHash);
          left++;
      }

      max = Math.max(max, right - left + 1);
  }

  return max;
};

console.log(characterReplacement('ABAB', 2)) // 4
console.log(characterReplacement('AABABBA', 1)) // 4
