/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */
 
 // Given a binary search tree, check that the value of nodes on 
    // the left tree are smaller than the given node
    // the right tree are greater than the given node

// Approach
    // Use recursion
        // Base Case: this.left === null || this.right === null
        // Call validBST on the left and right trees
        // 


function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
  // Base Case
  if (tree === null) return true;
  if (tree.left && tree.value < tree.left.value) return false;
  if (tree.right && tree.value > tree.right.value) return false;
  // Recursion
  return validBST(tree.left) && validBST(tree.right);
}

// let testTree = new BinaryTree(5);
// testTree.left = 4;
// testTree.right = 6;

// console.log(validBST(testTree)) // true

// let testTree2 = new BinaryTree(10);
// testTree.left = 11;
// testTree.right = 12;

// console.log(validBST(testTree)) // false

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
