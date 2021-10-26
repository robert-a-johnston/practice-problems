// simple string compression
// ex:  'aabccccaa' -> a2b1c4a2
// if compressed string > original string return original string


// I: string
// O: compressed string or original string
// EDGE CASE: empty string, compressed = original string
// CONSTRAINTS: has only upper and lower case

// time complexity: O(n)
// space complexity: O(1)

// check for duplicate numbers

function stringCompression(s) {
  let compString = ''
  let number = 1
  // get letter
  for (let i = 0; i < s.length; i ++){
    let letter = s[i]
    if(s[i + 1] === letter){
      number++ 
    } else if (s[i + 1] !== letter) {
    // if letter != next letter add number to array and set number = 0
      compString += letter + String(number)
      number = 1
    }
  }
 
  return compString.length >= s.length ? s : compString
}

console.log(stringCompression('aabbb'))