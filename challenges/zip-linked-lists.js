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
  const nodeAry1 = linkedToArray(l1)
  const nodeAry2 = linkedToArray(l2)
  console.log('1', nodeAry1)
  console.log('2', nodeAry2)
  if (nodeAry1.length === 0 || nodeAry2.length === 0) return
  const result = []
  for (let i = 0; Math.max(nodeAry1.length, nodeAry2.lenth); i++){
    if(nodeAry1[i]) result.push(nodeAry1[i])
    if(nodeAry2[i]) result.push(nodeAry2[i])
  }
  connectNodes(result)
};
function linkedToArray(linkedList){
  const result = []
  let tmp = linkedList
  while(tmp){
    result.push(tmp)
    tmp = tmp.next
  }
  return result
}
function connectNodes(nodes){
  nodes.forEach((node, i, nodesList)=>{
    if (nodesList[i+1]) node.next = nodesList[i+1]
  })
}
let n1 = new Node(1)
let n2 = new Node(2)
let n3 = new Node(3)
let n4 = new Node(4)
let n5 = new Node(5)
let l1 = [n1, n2, n3]
let l2 = [n4, n5]
// console.log(n4, n5)
// console.log(connectNodes(l2))
// console.log(n4, n5)
// console.log(linkedToArray(n4))
// console.log('hhelo')
console.log(n1)
zip(n1, n4)
console.log(n1)

module.exports = {Node: Node, zip: zip};
