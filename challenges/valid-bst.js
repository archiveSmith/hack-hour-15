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
  return checkBST(tree, null, null)
}

function checkBST(tree, min, max){
  if (tree === null) return true;
  if ((min !== null && tree.value < min)|| (max !== null && tree.value > max)) return false;

  if (!checkBST(tree.left, min, tree.value) || !checkBST(tree.right, tree.value, max)) return false;

  return true;
}
// 
// let bst = new BinaryTree(10);
// bst.left = new BinaryTree(7);
// bst.right = new BinaryTree(11);
// bst.left.left = new BinaryTree(6);
// bst.left.right = new BinaryTree(8);
// bst.right.right = new BinaryTree(15);
// bst.left.left.left = new BinaryTree(11);
// bst.right.right.left = new BinaryTree(12);
//
// console.log(validBST(bst));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
