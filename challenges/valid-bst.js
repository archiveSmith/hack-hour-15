/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

// Base case
    // if this.left or this.right is null

// Edge case
    // If tree is empty

// Approach
    // Check if left and right values are sorted on the current node we are at
    // Pass this.left and this.right to validBST (recursion)
    // Fail fast so make conditional statements check for false/fail cases
 

function BinaryTree(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function validBST(tree) {
    if (tree.left == null && tree.right == null) {
        return true;
    }
    if (tree.left != null && tree.left.value > tree.value) {
        return false;
    }
    if (tree.right != null && tree.right.value < tree.value) {
        return false;
    }
    if (!validBST(tree.left) || !validBST(tree.right)) {
        return false;
    }
    return true;
    
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
