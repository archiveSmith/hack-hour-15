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
  console.log(tree);
  // Traverse the tree breadth-first, starting from the bottom
  // Breadth-first push nodes into a stack, so the bottom nodes are at the top of the stack
  const stack = [];
  bfs(tree, stack.push);
  
  console.log(stack);
  
  // Iterate through the stack
  
    // If the max value of the right node is null or greater than the current node
  
      // Set the max value of the current node to the max value of the right node
  
    // Else return false
  
    // If the min value of the left node is null or less than the current node
  
      // Set the min value of the current node to the min value of the right node
  
    // Else return false
  
  // Return true
}

// BFS
function bfs(tree, callback) {
  const queue = [tree];
  
  while (queue.length > 0) {
    const cur = queue.shift();
    callback(cur);
    if (cur.left) queue.push(cur.left);
    if (cur.right) queue.push(cur.right);
  }
} 

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
