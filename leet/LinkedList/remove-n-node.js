// Given the head of a linked list, remove the nth node from the 
// end of the list and return its head.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null: next)
}
 var removeNthFromEnd = function(head, n) {
   
 const temp = new ListNode(null)
 temp.next = head

 let fast = temp
 let slow = temp

 for (let i = 1; i < n + 1; i++){
   fast = fast.next
 }

 while(fast.next !== null) {
   fast = fast.next
   slow = slow.next
 }

slow.next = slow.next.next

return temp.next
    
};