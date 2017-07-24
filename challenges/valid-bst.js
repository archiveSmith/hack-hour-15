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
  if (traverse(tree) === false) return false;
  return true;

}

function traverse(tree) {
  if (!tree) return;
  if (tree.left) {if (tree.left.value > tree.value) return false;
  if (tree.right && (tree.right.value < tree.value)) return false;
  if (traverse(tree.left) !== undefined) return traverse(tree.left);
  if (traverse(tree.right) !== undefined) return traverse(tree.right);
}

tree = new BinaryTree(11);
tree.left = new BinaryTree(9);
tree1 = tree.left
tree1.left = new BinaryTree(8);
tree1.right = new BinaryTree(10);
tree.right = new BinaryTree(13);
tree2 = tree.right;
tree2.left = new BinaryTree(11);
tree2.right = new BinaryTree(15);
console.log(validBST(tree));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
