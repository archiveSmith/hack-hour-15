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
  if (tree === null) return true;

  const validLeft = (tree, parentValue) => {
    if (tree === null) return true;
    return parentValue > tree.value &&
      validLeft(tree.left, tree.value) &&
      validRight(tree.right, tree.value);
  }

  const validRight = (tree, parentValue) => {
    if (tree === null) return true;
    return parentValue < tree.value &&
      validLeft(tree.left, tree.value) &&
      validRight(tree.right, tree.value);
  }

  return validLeft(tree.left, tree.value) && validRight(tree.right, tree.value);
}

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
