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
    let rootVal = tree.value;
    let currentNode = tree;
    let leftBool = true;
    let rightBool = true;
    //console.log(rootVal);
    // check all from left for less than root, return false if not
    let subTree = tree.left.value;
    function checkLeft (subTree){
    leftBool = (subTree < rootVal) ? true : false;
    if (leftBool === false){
        return false
    } else {
        if (subTree.left || subTree.right)
        currentNode = (subTree.left || subTree.right)
    } 
    }
    // check all from right for more than root, return false if not

}

let thisTree = new BinaryTree(5);

thisTree.left = new BinaryTree(3);
thisTree.left.left = 2;
thisTree.right = new BinaryTree(6);
thisTree.right.right =7;

console.log(validBST(thisTree))

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
