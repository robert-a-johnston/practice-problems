// Given the head of a singly linked list, 
// reverse the list, and return the reversed list.


 //* Definition for singly-linked list.
//  function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//   }
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

 var reverseList = function(head) {
 let nextP = null
 let previousP = null
 let currentP = head

 while(currentP !== null){
   nextP = currentP.next
   currentP.next = previousP
   previousP = currentP
   currentP = nextP
 }
return prev
   

};

