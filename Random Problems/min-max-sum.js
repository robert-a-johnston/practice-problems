// Given five positive integers, find the minimum and 
// maximum values that can be calculated by summing exactly 
// four of the five integers. Then print the respective 
// minimum and maximum values 
// as a single line of two space-separated long integers.

arr = [1, 3, 5, 7, 9]
// min 16
// max 24

function miniMaxSum(arr){
    let minMax = []
    let maxSum = 0
    let minSum = 0
    // sort array max
    arr.sort(function(a,b) {return b - a})

    // sum first  4 elements
    for( let i = 0; i < arr.length - 1; i++ ){
      maxSum+=arr[i]
    }

    // sort arr min
    arr.sort(function(a,b) {return a - b})

    // sum first  4 elements
    for( let i = 0; i < arr.length - 1; i++ ){
      minSum+=arr[i]
    }
    minMax.push(minSum)
    minMax.push(maxSum)
    return `${minSum}  ${maxSum}`
}
console.log(miniMaxSum(arr))