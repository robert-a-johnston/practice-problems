// find the nth Fibonacci number

// function fibonacci(i) {
//   if(i === 0) return i
//   if(i === 1) return i
//   return fibonacci(i - 1) + fibonacci(i - 2)
// }

// with memoiztion
let fibonacci= (function() {
  // creates the memo to store replicated values
  let memo = {}

  function f(n) {
    let value
    // if n is in memo set value to memo
    if(n in memo) {
      value = memo[n]
    // else calculate the fib value
    } else {
      if(n===0||n===1)
        value = n
        else
          value = f(n-1) + f(n-2)
        
        memo[n] = value  
    }
    return value
  }
  return f

})()

// a bottom up approach
function fib(n){
  // base cases
  if(n === 0 || n === 1) return n

  // create memo
  let memo = []
  // set base memos
  memo[0] = 0
  memo[1] = 1
  for(let i = 2; i < n; i++){
    memo[i] = memo[i - 1] + memo[i - 2]
  }
  return memo[n-1] + memo[n-2]
}
// may have issues with this an javascript
// function fib2(n){
//   if(n === 0 || n === 1) return n
//   let a = 0
//   let b = 1
//   let c
//   for(let i = 2; i < n; i++) {
//     c = a + b
//     a = b
//     b = c
//   }
//   return c
// }
console.log(fibonacci(5))
console.log(fib(5))
