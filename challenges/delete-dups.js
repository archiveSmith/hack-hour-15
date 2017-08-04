/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 * 
 * one pointer remains stationary, another pointer walks the linkedlist to set equivalence
 * repeat for each node
 */



function deleteDups(head) {
  let p1;
  let p2;
  // base case
  for (let i = head; i.next === null; i = i.next) {
    p1 = i;
    p2 = i.next;
    while (p2) {
      if (p1.val === p2.val) {
        
      }
    }
  }

}


module.exports = deleteDups;
