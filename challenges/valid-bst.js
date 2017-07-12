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
function generateValidBST(){
    let checkFinished = false
    return function validBST(tree){
        if (checkFinished) return true

        if (!tree) return false 
        // return true if both left and right is null
        if (!tree.left && !tree.right) return true

        // compare current value with right branch
            // if invalid, return false
        // compare current value with left branch
            // if invalid, return false
        if (tree.right && tree.value > tree.right.value ){
            checkFinished = true
            return false
        } 
        if (tree.left && tree.value < tree.left.value){
            checkFinished = true
            return false
        }
            
        // check only right by calling validBST on right branch
            // return the result
        // check only left by calling validBST on left branch
            // return result
        if (tree.right && tree.left){
            return validBST(tree.left) && validBST(tree.right)
        } else if (tree.right){
            return validBST(tree.right)
        } else {
            return validBST(tree.left)
        }
    }
}

function origValidBST(tree) {
    // return false if tree is undefined
    if (!tree) return false 
    // return true if both left and right is null
    if (!tree.left && !tree.right) return true

    // compare current value with right branch
        // if invalid, return false
    // compare current value with left branch
        // if invalid, return false
    if (tree.right && tree.value > tree.right.value ) return false
    if (tree.left && tree.value < tree.left.value) return false
        
    // check only right by calling validBST on right branch
        // return the result
    // check only left by calling validBST on left branch
        // return result
    if (tree.right && tree.left){
        return validBST(tree.left) && validBST(tree.right)
    } else if (tree.right){
        return validBST(tree.right)
    } else {
        return validBST(tree.left)
    }
}
const validBST = generateValidBST()

const bst = new BinaryTree(8)
bst.left = new BinaryTree(5)
bst.left.left = new BinaryTree(3)
bst.left.right = new BinaryTree(6)
bst.left.left.right = new BinaryTree(4)
bst.right = new BinaryTree(12)

console.log(validBST(bst)) // true
bst.right = new BinaryTree(7)
console.log(validBST(bst)) // false
module.exports = {BinaryTree: BinaryTree, validBST: validBST};
