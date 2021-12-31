// You are given the head of a singly linked-list. The list can be 
// represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. 
// Only nodes themselves may be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
 var reorderList = function(head) {
   // check for list
  if(!head)return head;
  let slow = head;
  let fast = head;

  //find middle of list
  while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
  }
  
  let prev = null;
 

//reverse second half of list
  while( slow ){
      let temp = slow;
      slow = slow.next;
      temp.next = prev;
      prev = temp;
  }
  let first = head;
  let sec = prev;
  
//merge reversed second half with first half
  while(sec.next){
      let temp = first.next;        
      first.next = sec;
      first = temp;
      
      temp = sec.next;
      sec.next = first;
      sec = temp
  }
};