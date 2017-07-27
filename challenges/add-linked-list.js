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

function Node(val) {
    this.value = val;
    this.next = null;
}

function addLinkedList(l1, l2) {
    let str1 = "";
    let str2 = "";
    while (l1) {
        str1 += l1.value.toString();
        l1 = l1.next;
    }
    while (l2) {
        str2 += l2.value.toString();
        l2 = l2.next;
    }
    str1 = parseInt(str1);
    str2 = parseInt(str2);
    let total = str1 + str2;
    total = total.toString().split("");
    let list = new Node(0);
    var temp = list;
    for (let x = 0; x < total.length; x++) {
        temp.value = total[x];
        if (x+1 < total.length) {
            temp.next = new Node(0);
            temp = temp.next
        }
    }
    return list;
}
let l1 = new Node(1);
l1.next = new Node(0);

let l2 = new Node(1);
l2.next = new Node(0);

console.log(addLinkedList(l1, l2));
module.exports = {
    Node: Node,
    addLinkedList: addLinkedList
};