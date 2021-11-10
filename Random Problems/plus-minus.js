// Given an array of integers, calculate the ratios of its elements that 
// are positive, negative, and zero. Print the decimal value of each 
// fraction on a new line with 6 places after the decimal.


function plusMinus(arr) {
  // Write your code here
 let zeroN = 0
 let pos = 0
 let neg = 0
 
 for(let i = 0; i < arr.length; i++){
     if(arr[i] === 0){
         zeroN++
     }
     if(arr[i] > 0){
         pos++
     }
     if(arr[i] < 0){
         neg++
     }
 }
  let zeroPer = zeroN/arr.length
  let posPer = pos/arr.length
  let negPer = neg/arr.length
  
  console.log(posPer.toPrecision(6))
  console.log(negPer.toPrecision(6))
  console.log(zeroPer.toPrecision(6))
}

arr = [-4, 3, -9, 0, 4, 1]

plusMinus(arr)
// 0.500000
// 0.333333
// 0.166667
