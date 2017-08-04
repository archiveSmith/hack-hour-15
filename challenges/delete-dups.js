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
 */



function deleteDups(head) {
 if (!head) return false; 
 let store = {}; 
 store[head.value] = true; 
 let last = head; 
 let curr = head.next; 
 while(curr) {
   if (store[curr.value]) {
      curr = curr.next; 
      last.next = curr; 
   } else {
      store[curr.value] = true; 
      curr = curr.next; 
      last = last.next; 
   }
 }
 return head; 
}

module.exports = deleteDups;
