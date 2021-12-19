// Given an array of intervals where intervals[i] = [starti, endi], 
// merge all overlapping intervals, and return an array of the 
// non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
  
  function mergeTwo(intervalOne, intervalTwo) {
    return [Math.min(intervalOne[0], intervalTwo[0]), 
      Math.max(intervalOne[1], intervalTwo[1])]
  }
  
  function overlap(intervalOne, intervalTwo) {
    return intervalOne[1] >= intervalTwo[0]
  }
  
  // sort intervals
  intervals.sort((interval1, interval2) => interval1[0] - interval2[0])
  i = 1
  while(i < intervals.length) {
    if(overlap(intervals[i - 1], intervals[i])) {
      intervals.splice(i - 1, 2, mergeTwo(intervals[i-1], intervals[i]))
    } else {
      i += 1
    }
  }
  return intervals
};

const intervals = [[1,3],[2,6],[8,10],[15,18]]  // [[1,6],[8,10],[15,18]]

const intervals1 = [[1,4],[4,5]] //  [[1,5]]

console.log(merge(intervals1))