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

//list obj
function Node(val) {
  this.value = val;
  this.next = null;
  this.prev = null;
  this.head = null;
  this.tail = null;
}

//print list
Node.prototype.printLL= (list) => {
  let head = list;
  let str = "";
  while (head != null){
      str = str + head.value + '->';
      console.log(str);
      head = head.next;
  }
}

// add to list
Node.prototype.addToList = (val) => {
if (!this.head) {
    this.head = this.tail = new Node(val);
} else {
    this.tail.next = this.head.next = new Node(val);
    this.tail = this.tail.next;
}
}

function deleteDups(head) {
    // let curr = head;
    // let buffer = [];
    // while (curr!=null) {
    //     buffer.forEach((bufEl)=>{
    //         if (curr.value === bufEl){

    //         }
    //     })
    //     buffer.push(curr.value);
    //     curr = curr.next
    // }
    // console.log(buffer)

}

module.exports = deleteDups;

node1 = new Node(1);
node2 = node1.next = new Node(2);
node3 = node2.next = new Node(3);

// console.log(node1.printLL(node1))
// console.log(deleteDups(node1))