/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  let baseList = l1;
  let cutList = l2;

  let stop = -1;
  while (baseList.next && cutList.next) {
    baseList = baseList.next;

    cutList = cutList.next;

    stop += 1;
  }
  baseList.next = cutList;

  while (stop) {
    baseList = l1;

    cutList = l2;

    while (cutList.next) {
      baseList = baseList.next;

      cutList = cutList.next;
    }
    cutList.next = baseList;

    let ind = stop;

    baseList = l1;

    while (ind) {
      baseList= baseList.next;

      ind -= 1
    }
    baseList.next = cutList;

    stop -= 1;
  }
  return baseList;
};

module.exports = {Node: Node, zip: zip};
