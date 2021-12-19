// You are given an array of non-overlapping 
// intervals 'intervals' where intervals[i] = [starti, endi] 
// represent the start and the end of the ith interval 
// and intervals is sorted in ascending order by starti. 
// You are also given an interval newInterval = [start, end] 
// that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals 
// is still sorted in ascending order by starti and intervals 
// still does not have any overlapping intervals 
// (merge overlapping intervals if necessary).

// Return intervals after the insertion.

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {
  let result = [];
  let i = 0;
  // merge intervals into result
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    console.log(i, intervals)
    result.push(intervals[i]);
    i++;
  }
  console.log('i', intervals)
  console.log('1', i)
  // determine where new interval belongs
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    console.log(intervals)
    console.log('w',i)
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  console.log('ni', newInterval)
  // ad new interval to result
  result.push(newInterval);
  while (i < intervals.length) {
    console.log('2', intervals[i])
    result.push(intervals[i]);
    i++;
  }
  console.log('3', i)
  return result;
};
const intervals = [[1,3],[6,9]], newInterval = [2,5] // [[1, 5], [6, 9]]
const intervals1 = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval1 = [4,8] // [[1,2],[3,10],[12,16]]

console.log(insert(intervals, newInterval))
// console.log(insert(intervals1, newInterval1))
