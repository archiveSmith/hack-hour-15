/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}


// Input
  // Binary search tree root
// Ouptut
  // True if at all nodes in the tree, the values of the left tree are smaller than the node and the values of the right tree are larger than the node
  // False else

// Alters input tree
function validBST(tree) {
  // Traverse the tree breadth-first, starting from the bottom
  // Breadth-first push nodes into a stack, so the bottom nodes are at the top of the stack
  const stack = [];
  bfs(tree, cur => stack.push(cur));
  
  // Iterate through the stack
  for (let i = stack.length - 1; i >= 0; i -= 1) {
  
    // If the max value of the right node is null or greater than the current node
    // Set the max value of the current node to the max value of the right node
    if (stack[i].right === null) stack[i].max = stack[i].value;
    else if (stack[i].right.max > stack[i].value) stack[i].max = stack[i].right.max;
      
    
  
    // If the min value of the left node is null or less than the current node
    // Set the min value of the current node to the min value of the right node
    if (stack[i].left === null) stack[i].min = stack[i].value;
    else if (stack[i].left.min < stack[i].value) stack[i].min = stack[i].left.min;
    
    // Check for falsy conditions
    if ((stack[i].left !== null && stack[i].left.max > stack[i].value) || 
        (stack[i].right !== null && stack[i].right.min < stack[i].value)) return false;
  }
  
  // Return true
  return true;
}

// BFS
function bfs(tree, callback) {
  const queue = [tree];
  
  while (queue.length > 0) {
    const cur = queue.shift();
    if (cur) callback(cur);
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
} 

// False test case
//const tree = new BinaryTree(3);
//tree.left = new BinaryTree(1);
//tree.left.left = new BinaryTree(0);
//tree.left.right = new BinaryTree(2);
//tree.left.right.right = new BinaryTree(5);
//console.log(validBST(tree), 'should be false');

// True test case
//const tree2 = new BinaryTree(3);
//tree2.left = new BinaryTree(1);
//tree2.left.left = new BinaryTree(0);
//tree2.left.right = new BinaryTree(2);
//console.log(validBST(tree2), 'should be true');

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
