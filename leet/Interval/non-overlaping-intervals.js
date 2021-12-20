// Given an array of intervals intervals where 
// intervals[i] = [starti, endi], return the 
// minimum number of intervals you need to remove 
// to make the rest of the intervals non-overlapping.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function(intervals) {
  intervals.sort((interval1, interval2) => interval1[0] - interval2[0])

  const isOverlapping = (s1, e1,s2, e2) => {
    if(e2 > s1 && e1 > s2) return true

    return false
  }
  console.log(intervals)
  let prev = intervals[0]
  let count = 0
  
  for(let i = 1; i < intervals.length; i++) {
    let curr = intervals[i]
    if(isOverlapping(prev[0], prev[1], curr[0], curr[1])) {
      count++
      if(curr[1] < prev[1]) prev = curr
    } else {
      prev = curr
    }
  }


  return count
};

const intervals = [[1,2],[2,3],[3,4],[1,3]]  // 1
const intervals1 = [[1,2],[1,2],[1,2]] // 2
const intervals2 = [[1,2],[2,3]] // 0
const intervals3 = [[1,100],[11,22],[1,11],[2,12]] // 2
console.log(eraseOverlapIntervals(intervals3))
