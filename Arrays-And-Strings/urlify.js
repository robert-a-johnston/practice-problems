// replace all spaces in a string with '%20'
// given the 'true' length of the string
// input: 'Mr John Smith   ' 13
// output: 'Mr%20John%20Smith'

function urlReplace(s, rs){
  console.log(s.replaceAll(' ','%20'))
}

urlReplace('Mr John Smith', '%20')