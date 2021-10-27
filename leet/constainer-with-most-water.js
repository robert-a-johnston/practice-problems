// Given n non-negative integers a1, a2, ..., an , 
// where each represents a point at coordinate (i, ai). 
// n vertical lines are drawn such that the two 
// endpoints of the line i is at (i, ai) and (i, 0). 
// Find two lines, which, together with the x-axis 
// forms a container, such that the container contains the most water.

// Notice that you may not slant the container.

// I: array
// O: int
// EDGE CASE: 
// CONSTRAINTS: optimize


// time complexity: O(n)
// space complexity:  

// Objective: return the volume of water contained in 

function maxArea(height) {
  let ans = 0
  let i = 0
  let j = height.length -1
  // search from 'right side' of array to reduce x value at constant rate
  while(i < j) {
    // get answer by multiplying by min height of two values
    // then compare stored answer and select max of two.
    ans = Math.max(ans, Math.min(height[i], height[j]) * (j - i))
    // continue with loop by adding or taking away from i and j
    height[i] <= height[j] ? i++ : j--
  }
  return ans
}
 let height = [1,8,6,2,5,4,8,3,7]
 let height1 = [1, 1]
 let height2 = [4, 3, 4, 1, 4]
 let height3 = [1,2,1]

 console.log(maxArea(height3))