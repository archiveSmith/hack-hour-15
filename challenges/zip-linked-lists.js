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
  if (!(l1 instanceof Node) || !(l2 instanceof Node)) {
    if (l1 instanceof Node) return l1;
    if (l2 instanceof Node) return l2;
    return 'Enter valid inputs';
  }
  let head1 = l1;
  let head2 = l2;
  while (head1 || head2) {
    let tmp;

    if (head1 && head1.next) tmp = head1.next;
    if (head2) {
      head1.next = new Node(head2.value);
      if (tmp) {
        head1.next.next = tmp;
        head1 = head1.next;
      }
    }
    if (head1) head1 = head1.next;
    if (head2) head2 = head2.next;
  }
  return l1;
};

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
//
// c.next = d;
// b.next = c;
// a.next = b;
//
// const pete = new Node('pete');
// const chris = new Node('chris');
// const garr = new Node('garr');
// const penn = new Node('penn');
//
// garr.next = penn;
// chris.next = garr;
// pete.next = chris;
//
// console.log(pete);
// console.log(a);
// console.log(zip(pete, a));

module.exports = {Node: Node, zip: zip};
