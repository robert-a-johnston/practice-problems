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
  // Return answer of volume of water 
  let volume = 0
  // Pointers
  let left = 0
  let right = height.length -1

  // search from 'right side' of array to reduce x value at constant rate
  // While left pointer index is < right pointer index
  while(left < right) {
    // get answer by multiplying by min height of two values
    // then compare stored answer and select max of two.
    volume = Math.max(volume, Math.min(height[left], height[right]) * (right - left))
    // continue with loop by adding or taking away from left and right pointers
    height[left] <= height[right] ? left++ : right--
  }
  return volume
}
 let height = [1,8,6,2,5,4,8,3,7]
 let height1 = [1, 1]
 let height2 = [4, 3, 4, 1, 4]
 let height3 = [1,2,1]

 console.log(maxArea(height3))