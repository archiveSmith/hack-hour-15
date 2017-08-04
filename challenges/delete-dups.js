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

// Input
  // Linked list
// Output
  // head of the inputted linked list where duplicates are deleted

function deleteDups(head) {
  const storage = {
    inOrder: [],
  };
  let cur = head;
  
  // Iterate through linked list
  while (cur) {
    // If the current value does not exist int the storage, add it to the storage and the inOrder array
    if (storage[cur.value] === undefined) {
      storage[cur.value] = true;
      storage.inOrder.push(cur.value);
    }
    cur = cur.next;
  }
  
  cur = head;
  
  // Iterate through inOrder array
    // Set the current node's value to the value of inOrder[i]
  storage.inOrder.forEach((value, i) => {
    cur.value = value;
    if (i < storage.inOrder.length - 1) cur = cur.next;
    else cur.next = null;
  });
    
  return head;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

//head = new Node(1);
//head.next = new Node(2);
//head.next.next = new Node(3);
//head.next.next.next = new Node(4);
//console.log(deleteDups(head));

module.exports = deleteDups;
