// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made 
// by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }

 var mergeTwoLists = function(list1, list2) {
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