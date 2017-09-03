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
  let foundValues = {};
  let currentNode = head;

  while(currentNode.next) {
    foundValues[currentNode.value] = true;
    if (foundValues[currentNode.next.value] === true) currentNode.next = currentNode.next.next;
    currentNode = currentNode.next;
  }
}

module.exports = deleteDups;
