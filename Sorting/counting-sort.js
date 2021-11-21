// Another sorting method, the counting sort, does not require 
// comparison. Instead, you create an integer array whose index 
// range covers the entire range of values in your array to sort. 
// Each time a value occurs in the original array, you increment 
// the counter at that index. At the end, run through your 
// counting array, printing the value of each non-zero valued index 
// that number of times.


// note the given size of the counting array is 100

function countingSort(inputArray) {

  if(inputArray.length < 2) return inputArray

  // create new array with size 100
  const countingArray = new Array(100)
  // set all values in array to 0
  for(let i = 0; i < inputArray.length; i++){
    countingArray[i] = 0
  }
  // count values
  for(let value of inputArray) {
    countingArray[value]++
  }

  return countingArray
}



ar = [1, 4, 6, 7, 21, 10, 12, 12, 0, 9, 10, 1, 0, 2, 1]

console.log(countingSort(ar))