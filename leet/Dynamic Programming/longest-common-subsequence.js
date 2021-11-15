// Given two strings text1 and text2, return the length of 
// their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated 
// from the original string with some characters 
// (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a 
// subsequence that is common to both strings.

 var longestCommonSubsequence = function(text1, text2) {
   const table = Array.from({length: text1.length + 1}, () => new Array(text2.length + 1).fill(''))

   for(let i = 1; i < table.length; i++){
     for(let j = 1; j < table[i].length; j++){

      if(text1[ i - 1 ] === text2[ j - 1 ]){ 
        table[i][j] = table[ i - 1 ][ j - 1 ] + text1[ i - 1 ]
      } else {
        let aboveChar = table[ i - 1 ][j]
        let leftChar = table[i][ j - 1 ]

        table[i][j] = aboveChar.length > leftChar.length ? aboveChar : leftChar

      }
     }
   }
   console.table(table)
   return table[table.length -1][table[0].length -1].length
 }

 console.log(longestCommonSubsequence('abcde', 'ace'))