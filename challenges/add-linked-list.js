/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

 // Given 2 linked lists, create a new linked list with nodes reflecting the sum of the corresponding nodes
    // i.e.
        // 2 -> 1 -> 5
        // 5 -> 9 -> 2
        // 7 -> 0 -> 8

// Edge Cases
    // Linked lists are of different lengths

// What happens when the numbers are >= 10?
    // We will need to pass the digit to the next linked list
        // Turn the number into a string to check the length
            // Pass the tens' digit to the next node


function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
    // define currentNodes for l1 and l2
    let currL1Node = l1;
    let currL2Node = l2;
    let currValue = 0;
    let storage;
    let output;
    let outputNode;
    // Loop through each linkedList
    while (currL1Node.value !== undefined || currL2Node.value !== undefined) {
        // getting the currValue
        currValue = currL1Node === undefined ? currL2Node.value : currL1Node.value + currL2Node.value;
        console.log(currValue);
        // add node to existing linked list
        if (output) {
            outputNode = new Node(checkTens(currValue, storage));
        } else {
            output = new Node(checkTens(currValue, storage));
            outputNode = output.next;
        }
        // create linked list
    }
    // Add their values together
    // Check if there's a tens digit
        // Tens digit => Do something
        // Single digit => move to next element
        output.next = output;
        currL1Node = currL1Node.next;
        currL2Node = currL2Node.next;
        outputNode.next = outputNode;
    return output;
        
}

function checkTens(number, storage) {
    if (number >= 10) {
        let numToString = number.toString();
        storage = Number.parseInt(numToString[0]);
        return Number.parseInt(numToString[1]);
    }
    return number;
}

let linkedList1 = new Node(1);
linkedList1.next = new Node(9);
linkedList1.next.next = new Node(3);

let linkedList2 = new Node(3);
linkedList2.next = new Node(9);
linkedList2.next.next = new Node(2);

// want a linked list with a node that has 4, 8, 6

module.exports = {Node: Node, addLinkedList: addLinkedList};