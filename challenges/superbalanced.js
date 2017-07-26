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
  if (!tree.left && !tree.right && !tree) return true;
  const lheight = height(tree.left);
  const rheight = height(tree.right);
  if (Math.abs(lheight - rheight) > 1) return false;
  return balancedBST(tree, -Infinity, Infinity);
}

function balancedBST(tree, low, high) {
  if (tree === null) return true;
  return low < tree.value && tree.value < high &&
    balancedBST(tree.left, low, tree.value) &&
    balancedBST(tree.right, tree.value, high);
}

function height(tree) {
  if (tree === null) return 1;
  return Math.max(height(tree.left) + 1, height(tree.right) + 1);
}

// const a = new BinaryTree(5);
// const b = new BinaryTree(2);
// const c = new BinaryTree(1);
// const d = new BinaryTree(4);
// const e = new BinaryTree(3);
// const f = new BinaryTree(6);
// const g = new BinaryTree(7);
// const h = new BinaryTree(8);
//
// b.left = c;
// e.right = h;
// d.left = e;
// b.right = d;
// a.left = b;
// g.left = h;
// f.right = g;
// a.right = f;
//
// console.log(superbalanced(a));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
