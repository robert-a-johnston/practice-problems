// Given an array of integers, where all elements but one occur twice, 
// find the unique element.

function lonelyInteger(arr){
  let count = 0
  let numberCheck = null
// check value of array element to every other element
loop2:
for(let i = 0; i < arr.length; i++) {
  numberCheck = arr[i]
  console.log('i, numberCheck', numberCheck)
  loop1:
  for(let j = 0; j < arr.length; j++) {
    console.log('j ', numberCheck, arr[j])
    if(numberCheck === arr[j]){
      count++
      console.log('c', count)
      if(count > 1){
        count= 0
        continue loop2
      }
    }
    
  }
  return numberCheck
  }

}





a = [1, 2, 3, 4, 3, 2, 1] // 4
b = [0, 0, 1, 2, 1]
console.log(lonelyInteger(a))
console.log('ans b  is :', lonelyInteger(b))