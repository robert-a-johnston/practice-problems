// two strings s, n
// check if one is a permutation of the other
// questions:
//  are caps considered different is space considered different? (yes to both)

function checkP(s, n) {
  // if not same length not permutation
  if(s.length !== n.length) return false
  let sSort = [...s].sort()
  let nSort = [...n].sort()

  for(let i = 0; i < sSort.length; i++){
    if(sSort[i] !== nSort[i]){
      return false
    }
  }
  return true
  console.log(sSort)
  console.log(nSort)
  

}


console.log(checkP('asdf   ','asdf'))
console.log(checkP('Asdf', 'fdsa'))