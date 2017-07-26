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

function superbalanced(tree) {
  if (tree === null) return true;
  if (tree.value === null) return true;
  if (tree.left === null && tree.right === null) return true;

  // get height left, and height right. compare. if off, not balanced.
  // do this operation at every node, recursively.

  let left = tree.left;
  let right = tree.right;

  let leftHeight = checkHeight(left, 1, 0);
  let rightHeight = checkHeight(right, 1, 0);

  if (Math.abs(leftHeight - rightHeight) > 1) return false;

  return (superbalanced(left) && superbalanced(right));


}

function checkHeight(tree, currentHeight, maxHeight) {
  if (currentHeight > maxHeight) {
    maxHeight = currentHeight;
  }

  if (tree === null) return maxHeight;

  if (tree.left !== null) {
    const posMax = checkHeight(tree.left, currentHeight + 1, maxHeight);
    maxHeight =  maxHeight > posMax  ? maxHeight : posMax;
  }

  if (tree.right !== null) {
    const posMax = checkHeight(tree.left, currentHeight + 1, maxHeight);
    maxHeight =  maxHeight > posMax  ? maxHeight : posMax;
  }

  return maxHeight;
}

// let test = new BinaryTree(10);
// test.left = new BinaryTree(5);
// test.left.right = new BinaryTree(8);
// test.left.right.right = new BinaryTree(9);
// test.left.left = new BinaryTree(4);
// test.left.left.left = new BinaryTree(3);
// test.right = new BinaryTree(18);
// // test.right.left = new BinaryTree(14);
// // test.right.left.left = new BinaryTree(13);
// // test.right.right = new BinaryTree(19);
// // test.right.right.right = new BinaryTree(20);
// console.log(superbalanced(test));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
