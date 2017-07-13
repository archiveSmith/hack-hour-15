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

function validBST(tree) {
  if (!(tree instanceof BinaryTree) || tree === null) return false;
  return checkBST(tree, -Infinity, Infinity);
}

function checkBST(tree, low, high) {
  if (tree === null) return true;
  return low < tree.value && tree.value < high &&
    checkBST(tree.left,  low,        tree.value) &&
    checkBST(tree.right, tree.value, high);
}

// const a = new BinaryTree(1);
// const b = new BinaryTree(2);
// const c = new BinaryTree(3);
// const d = new BinaryTree(4);
// const e = new BinaryTree(5);
// const f = new BinaryTree(6);
//
// b.left = a;
// b.right = c;
// c.right = e;
// e.left = a;
// e.right = f;
// console.log(validBST(b));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
