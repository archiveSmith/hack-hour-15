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
    // if tree is null, return false 
    if (!tree) return false; 

    // create boolean flag that will return whether tree is a valid BST or not 
    let isBST = true; // assume is BST from the get-go 

    // Base case: 
    while (this.left) {
        if (this.left.value > this.value) return false;
        return validBST(this.left); 
    }
    while (this.right){
        if (this.right.value < this.value) return false; 
        return validBST(this.right); 
    }

    return isTree; 
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
