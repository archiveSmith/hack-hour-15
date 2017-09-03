function Node(val) {
  this.value = val;
  this.next = null;
}

function addLinkedList(l1, l2) {
  let carry = 0;
  let result = new Node(-1);
  let resHead = result;
  while(l1 !== null || l2 !== null) {
    let sum = carry;
    if(l1 !== null) {
      sum += l1.value;
      l1 = l1.next;
    }
    if(l2 !== null) {
      sum += l2.value;
      l2 = l2.next;
    }
    let node = null;
    if(sum >= 10) {
      node = new Node(sum - 10);
      carry = 1;
    } else {
      node = new Node(sum);
      carry = 0;
    }
    result.next = node;
    result = result.next;
    
  }
  if(carry === 1) {
    result.next = new Node(1);
  }
  
  return resHead.next;
}


let list1a = new Node(2);
let list1b = new Node(1);
let list1c = new Node(5);
let list2a = new Node(5);
let list2b = new Node(9);
let list2c = new Node(2);

list1a.next = list1b;
list1b.next = list1c;
list2a.next = list2b;
list2b.next = list2c;

console.log(addLinkedList(list1a, list2a));