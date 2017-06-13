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
    // I assume it's cheating to make it a doubly linked list
    // Going to check for '.next' k times
    // Currently doesn't work if k > length
    
    // Check for valid input
    if (k < 1) return undefined;
    
    // iterate through elements
    let currentNode = head;
    while (currentNode.next){
        
        // Traverse k times down the list from curr
        let kthNode = currentNode; 
        for (let i = 1; i < k; i++){
            kthNode = kthNode.next;
        }
        
        // if curr+kth+1 node does not exist for element
        if (!kthNode.next){
            // then curr is the kth to last node
            return currentNode.value;
        }
        currentNode = currentNode.next;
    }
    
    // if k = 1 and this is the last element
    if (k === 1 && !currentNode.next) return currentNode.value;
    
    // if kth node not found, return undefined
    return undefined;
}

// Test cases
/*const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');
const g = new Node('G');
const h = new Node('H');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

console.log(kthToLastNode(1, a)); // H
console.log(kthToLastNode(3, a)); // F
console.log(kthToLastNode(8, a)); // A
console.log(kthToLastNode(9, a)); // undefined
//console.log(kthToLastNode(0, a)); // undefined*/

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
