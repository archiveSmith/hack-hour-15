/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// Test cases
//const t1 = new BinaryTree(1);
//t1.left = new BinaryTree(2);
//t1.left.left = new BinaryTree(3);
//t1.right = new BinaryTree(4);
//
//console.log(superbalanced(t1), true);
//
//const t2 = new BinaryTree(1);
//t2.left = new BinaryTree(2);
//t2.left.left = new BinaryTree(3);
//t2.left.left.left = new BinaryTree(4);
//
//console.log(superbalanced(t2), false);


// Input
  // Binary tree
// Output
  // True if the height of the left tree is within one of the height of the right tree, and both subtrees are balanced

function superbalanced(tree) {
  // Define a function that returns the height of the input tree if the tree is balanced
  const isBalanced = (node) => {
    // if the input is null, return 0
    if (!node) return 0;
    
    // if the left tree's height is within one of the right tree's height
      // Return the higher height + 1
    const left = isBalanced(node.left);
    const right = isBalanced(node.right);
    
    if (left === false || right === false) return false;
    if (Math.abs(left - right) > 1) return false;
    return Math.max(left, right) + 1;
  }
  
  // If the input tree is balanced, return true, else false
  return isBalanced(tree) !== false;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
