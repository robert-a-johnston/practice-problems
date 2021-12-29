// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.
var mergeList = function(list1, list2) {
  let tempHead = new ListNode()
  let cur = tempHead

  while(list1 && list2) {
    if(list1.val < list2.val) {
      cur.next = list1
      list1 = list1.next
    } else {
      cur.next = list2
      list2 = list2.next
    }
    cur = cur.next
  }

  while(list1) {
    cur.next = list1
    list1 = list1.next
    cur = cur.next
  }

  while(list2) {
    cur.next = list2
    list2 = list2.next
    cur = cur.next
  }

  return tempHead.next
};

var mergeKLists = function(lists) {
    // edge case
    if(lists.length === 0) return null
    // keep merging until you get one list
    while(lists.length > 1){
      // remove first item in array
      let first = lists.shift()
      console.log('f', first)
      // remove second item from array
      let second = lists.shift()
      console.log('s', second)

      let mergeFirstSecond = mergeList(first, second)
      lists.push(mergeFirstSecond)
    }
    return lists[0]
};