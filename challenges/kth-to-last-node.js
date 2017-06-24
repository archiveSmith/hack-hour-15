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
   // goal is to return a value
   // using linked lists, we want to iterate through the linked list, going up to the length of the
   // linked list minus k
   // two iterations? one to create count and then iterate again up to count - k
   // can we do this more efficiently? (current solution not very efficient)
    // HMMMMMMMMMMMRMRMRMRMRMRMRRRRRRMMMMMRMRMMMM..
    // VISIT LATER AND REFACTOR IF POSSIBLE


   // create temporary storage for original head input since we will be using head variable to iterate through
   // linked list, we will lose reference to the original head in our first iteration
   let orgHead = head;
   // create a count variable to keep track of how long our linked list is
   let count = 1;

   // create a while loop to iterate through the linked list and count how many are attached to the list
   while (head.next) {
     head = head.next;
     count++;
   }

   // reinitialize the head so we know where to start our second iteration
   head = orgHead;

   // only go up to count - k
   for (let i = 0; i < count - k; i++) {
     head = head.next;
   }

   // we are referencing the kth to last node at this point with our head variable
   return head.value;

  //  console.log(orgHead)
  //  console.log(head.value);
 }

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
