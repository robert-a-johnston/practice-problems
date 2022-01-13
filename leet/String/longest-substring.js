// Given a string s, find the length of the 
// longest substring without repeating characters.

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
   let count = 0

   let iStart = 0
   let iEnd = 0
   let l = s.length

   let set = new Set()

   while (iStart < l && iEnd < l) {
     let char = s.charAt(iEnd)
     if(!set.has(char)){
       set.add(char)
       iEnd++
       count = Math.max(count, iEnd - iStart)
     } else {
       set.delete(s.charAt(iStart))
       iStart++
     }
   }
    return count
}

const s = "abcabcbb"

console.log(lengthOfLongestSubstring(s)) // 3