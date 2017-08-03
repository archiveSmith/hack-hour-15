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
  // create an array to store values
  // iterate thru linked list
  // for each, check to see if value already exists
  // if it does- delete that node
  // meaning always check the node ahead's value
  // then if next.next, pick up that, and continue;

  const values = [];

  let list = head;
  
  while (list.next) {
    if (values.includes(list.next.value)) {
      if(list.next.next) {
        list.next = list.next.next
      } else {
        list.next = null;
      }
    } else{
      values.push(list.next.value);
    }
    list = list.next
  }

  return list
}

module.exports = deleteDups;
