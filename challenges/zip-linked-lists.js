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
// Edge Cases 
// Check if both of them have a value, if neither do, return back undefined
// If one of them doesn't, then the other is set to current node
// Establish two vars, curr and next so alternate between the nodes
// Set up a while loop that goes while each of them has a next, switch curr and next each time

if (!l1.value && !l2.value) return undefined; 
let newList = [];
while (l1.value !== undefined || l2.value !== undefined) {
	if (l1.value) newList.push(l1.value);
	if (l2.value) newList.push(l2.value);
	l1 = l1.next; 
	l2 = l2.next;
}
let newLinkList = new Node(newList[0]);
let currNode = newLinkList;
for (let i = 1; i < newList.length; i++) {
	let newNode = new Node(newList[i]);
	currNode.next = newNode;
	currNode = currNode.next;
}

return newLinkList; 



};

module.exports = {Node: Node, zip: zip};
