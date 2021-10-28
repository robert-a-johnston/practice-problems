// given a string check if it a permutation of a palindrome
// input: Tact Coa
// Output: TRUE (permutations: 'taco cat', 'atco cta')

// use hash table
// this is based on the idea that a palindrome can have only
// one odd number occurrence of a letter maximum.

function palPerm(string) {
  // creates hash table
  const charMap = {};
  // changes string to all lower case
  const normStr = string.toLowerCase();
  // sets up hash table
  for (let i = 0; i < normStr.length; i++) {
    const char = normStr[i];
    // counts occurrences
    if (char !== " ") {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  }
  // sets default
  let hasFoundOddFreq = false;
  
  for (let char in charMap) {
    // gets char
    const freq = charMap[char];
    console.log('char, freq', char, freq)
    // checks for multiples
    if (freq % 2 !== 0) {
      if (hasFoundOddFreq) {
        return false;
      } else {
        hasFoundOddFreq = true;
      }
    }
  }

  return true;
}

console.log(palPerm('Tact Coa'))