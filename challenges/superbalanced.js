/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  // if tree is null or undefined, return true
  if(!tree) return true
  
  // define helper function "checkSuperBalanced"
  function checkSuperBalanced(branch, depth){
    // in: tree, current depth
    // out: {balanced:, maxheight:}
    if(!branch) return { balanced: true, maxheight: depth - 1}

    // check if each branch is superbalanced by calling checkSuperBalanced(branch, depth + 1)
    // assign result of checkSuperBalanced to variable
    var leftResult = checkSuperBalanced(branch.left, depth + 1)
    var rightResult = checkSuperBalanced(branch.right, depth + 1)
    // if one of them is not balanced, return false for "balanced"
    var heightDiff = leftResult.maxheight - rightResult.maxheight
    var balanced = leftResult.balanced && rightResult.balanced && Math.abs(heightDiff) <= 1
    return {
      balanced: balanced,
      maxheight: depth
    }
  }
  var result = checkSuperBalanced(tree, 1)
  return result.balanced
}

// var bst
// console.log(superbalanced(bst)) // true
// bst = new BinaryTree(8)
// console.log(superbalanced(bst)) // true
// bst.left = new BinaryTree(4)
// bst.left.left = new BinaryTree(2) 
// console.log(superbalanced(bst)) // false
// bst.left.left.right = new BinaryTree(3 )
// bst.left.right = new BinaryTree(5) 
// console.log(superbalanced(bst)) // false
// bst.right = new BinaryTree(12)
// bst.right.left = new BinaryTree(11)
// console.log(superbalanced(bst)) // true
// bst.right.right = new BinaryTree(14)


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
