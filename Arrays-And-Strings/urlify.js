// replace all spaces in a string with '%20'
// given the 'true' length of the string

// I: two strings
// O: string
// EDGE CASE: empty string
// CONSTRAINTS: optimize

// time complexity: constant
// space complexity: constant 

function urlReplace(s, rs){
  console.log(s.replaceAll(' ','%20'))
}

urlReplace('Mr John Smith', '%20')