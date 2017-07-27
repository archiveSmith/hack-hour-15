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
    let arr = [];
    if(tree.left !== null){
        arr.push(validBST(tree.left));
    }
    arr.push(tree.value);
    if(tree.right !== null){
        arr.push(validBST(tree.right));
    }
    return arr;
}

let b = new BinaryTree(6);
b.left = new BinaryTree(4);
b.right = new BinaryTree(7);
b.left.left = new BinaryTree(1);
b.left.right = new BinaryTree(10);
console.log(validBST(b))

module.exports = {
    BinaryTree: BinaryTree,
    validBST: validBST
};