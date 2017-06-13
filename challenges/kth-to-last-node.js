/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
	const num = getNumberOfChildren(head);
	return getChildAt(head, num - k + 1).value;
}

function getNumberOfChildren(head, acc = 0) {
	if (head.next) {
		acc += 1;
		return getNumberOfChildren(head.next, acc);
	} else {
		return acc;
	}
}

function getChildAt(head, index, curr = 0) {
	if(index === curr) {
		return head;
	} else {
		return getChildAt(head.next, index, curr + 1)
	}
}

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
