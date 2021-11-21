// How does heapsort work?
// So the steps to heapsort are as follows:
// 1 build a max heap, so that the element with the greatest value is at the top.
// 2 switch it with the last element and remove it from the heap.
// 3 repeat steps one and two until the heap has only one element remaining.

function createHeap(arr, length, i) {
  let largest = i
  let left = i * 2 + 1
  let right = left + 1

  if(left < length && arr[left] > arr[largest]) {
    largest = left
  }

  if(right < length && arr[right] > arr[largest]) {
    largest = right
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]]
    createHeap(arr, length, largest)
  }
  return arr
}

function heapSort(arr) {
  let length = arr.length
  let i = Math.floor(length/ 2 - 1)
  let k = length -1

  while (i >= 0) {
    createHeap(arr, length, i)
    i--
  }

  while (k >= 0) {
    [arr[0], arr[k]] = [arr[k], arr[0]]
    createHeap(arr, k, 0)
    k--
  }
  return arr
}

let arr = [1, 6, 7, 4, 5, 3, 2, 8]
console.log(heapSort(arr))