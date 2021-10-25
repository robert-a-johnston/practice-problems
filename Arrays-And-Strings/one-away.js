// given 2 strings check if they are 1 or 0
// edits away from each other
// an edit is insert, remove, replace

// if one edit away the two strings are the
// same except for one character

// for insert and remove length of one string will be larger than
// the other by one
// for replace one character will be different

// I: two strings
// O: boolean
// EDGE CASE: empty string
// CONSTRAINTS: optimize

// time complexity: linear
// space complexity: constant

function oneAway(s1, s2){
  let edits = 1
  let maxLen = Math.max(s1.length, s2.length)
  let diff = Math.abs(s1.length - s2.length)

  if (diff > edits) {
    return false
  }

    for (let i = 0, j = 0; i < maxLen || j < maxLen; i++, j++){
      // let c1 = s1[i]
      // let c2 = s2[j]
      if(s1[i] !== s2[j]){
        edits--
        if(edits < 0 ){
          return false
        }
        if (s1[i] === s2[j+1]){   //insert
          j++
        } else if (s1[i +1] === s2[j]){  //remove
          i++
        }
      }
    }
    return true
}


let s1 = 'pale'
let s2 = ''
console.log(oneAway(s1, s2))