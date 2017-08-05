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

// edge cases
// if l1 or l2 is null, return the other linked list since we cannot merge
// if both are null, return undefined

// 

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;
  if (!l1 && !l2) return undefined;

  let head = l1;
  let tmp = l1;

  l1 = l1.next;

  while (l1 && l2) {
    tmp.next = l2;
    l2 = l2.next;
    tmp = tmp.next;
    tmp.next = l1;
    l1 = l1.next;
    tmp = tmp.next;
  }

  tmp.next = l2 ? l2 : l1;
  return head;

};



// if (l1 = null) return l2;
// if (l2 = null) return l1;

// let l3 = new Node(l1);
// let flag = false;

// while(l1 && l2) {
//   if(!flag) {
//     l3.next = l2;
//     l3 = l3.next;
//     flag = true;
//   } else {
//     l3.next = l1;
//     l3 = l3.next;
//     flag = false;
//   }
// }

// if(!l1) l3.next = l2;
// if(!l2) l3.next = l1;

// return l3;

module.exports = {
  Node: Node,
  zip: zip
};