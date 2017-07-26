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
  let currentLeftTreeLevel = 0
  let currentRightTreeLevel = 0
  let rightTree = tree
  while(tree.left) {
    currentLeftTreeLevel++
    console.log('treeLeftLevel:',currentLeftTreeLevel)
    tree = tree.left
    console.log('tree Left:', tree)
  }
  while(rightTree.right) {
    currentRightTreeLevel++
    console.log('treeRightLevel:',currentRightTreeLevel)
    rightTree = rightTree.right
    console.log('tree Right:', tree)
  }

  if (currentLeftTreeLevel === currentRightTreeLevel) return 'balanced';
  return 'not balanced';
  
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
