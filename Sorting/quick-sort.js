// How does QuickSort Work
// First find the “pivot” element in the array.
// Start the left pointer at first element of the array.
// Start the right pointer at last element of the array.
// Compare the element pointing with left pointer and if 
// it is less than the pivot element, then move the left 
// pointer to the right (add 1 to the left index). 
// Continue this until left side element is greater 
// than or equal to the pivot element.
// Compare the element pointing with right pointer and 
// if it is greater than the pivot element, then move 
// the right pointer to the left (subtract 1 to the 
//   right index). Continue this until right side element 
//   is less than or equal to the pivot element.
// Check if left pointer is less than or equal to right 
// pointer, then swap the elements in locations of these pointers.
// Increment the left pointer and decrement the right pointer.
// If index of left pointer is still less than the index 
// of the right pointer, then repeat the process else 
// return the index of the left pointer.


function swap(items, leftIndex, rightIndex){
  let temp = items[leftIndex]
  items[leftIndex] = items[rightIndex]
  items[rightIndex] = temp
}


function partition(items, left, right) {
  const pivot   = items[Math.floor((right + left) / 2)] //middle element
  let i       = left //left pointer
  let j       = right //right pointer
  while (i <= j) {
      while (items[i] < pivot) {
          i++
      }
      while (items[j] > pivot) {
          j--
      }
      if (i <= j) {
          swap(items, i, j) //swapping two elements
          i++
          j--
      }
  }
  return i
}

function quickSort(items, left, right) {
  let index
  if (items.length > 1) {
      index = partition(items, left, right) //index returned from partition
      if (left < index - 1) { //more elements on the left side of the pivot
          quickSort(items, left, index - 1)
      }
      if (index < right) { //more elements on the right side of the pivot
          quickSort(items, index, right)
      }
  }
  return items
}


const items = [5,3,7,6,2,9];
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1)
console.log(sortedArray) //prints [2,3,5,6,7,9]