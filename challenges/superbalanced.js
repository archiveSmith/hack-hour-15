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

// empty tree is balanced
// tree with one value is balanced

// approach
  // keep a count of the left side and the right side
  // 

function superbalanced(tree) {
  let left = leftCount(tree);
  let right = rightCount(tree);
}

function leftCount(tree) {
  let count = 0;
  while (tree.left) {
    count+=1;
    tree.value = tree.left;
  }
  return count;
}

function rightCount(tree) {
  let count = 0;
  while (tree.left) {
    count+=1;
    tree.value = tree.left;
  }
  return count;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
