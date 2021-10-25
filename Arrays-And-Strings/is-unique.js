// determine if a string has all unique chars

function isUnique(s) {
  s.toLowerCase()
  let count = 0
  for(let i = 0; i < s.length; i++){
    let tempChar = s[i]
    for(let j = 0; j < s.length; j++){
      if(tempChar === s[j]){
        count++
      }
    }
  }
  console.log(count > s.length ? 'Not unique' : 'unique')
}

// another way knowing it is ascii
function isUniqueBool(s) {
  if (s.length > 128) {
    return false
  }

  let char_set = Array(128).fill(false)// initialize array of size 128 with boolean value false

  for (let i = 0; i < s.length; i++) {
    let val = s[i]
    if (char_set[val]) {
      return false
    }
    char_set[val] = true
  }
  return true
}

isUnique('helo')

console.log(isUniqueBool("abcdefghijklmopqrstuv")) // -> true
console.log(isUniqueBool("abcdef")) // -> true
console.log(isUniqueBool("89%df#$^a&x")) // -> true
console.log(isUniqueBool("abcAdef")) // -> true
console.log(isUniqueBool("abcaef")) // -> false