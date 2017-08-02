/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

// if there is a left or right leaf but no matching leaf, check for leaf of leaf. return false if leaf of leaf exists. otherwise return true. use recursion


function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  
  if (tree.left && !tree.right){
    let nodeL = tree.left;
    if (nodeL.left){
      return false;
    }
  }

    if (!tree.left && tree.right){
    let nodeR = tree.right;
    if (nodeR.right){
      return false;
    }
  }

  if (tree.left && tree.right){
    superbalanced(tree.left);
    superbalanced(tree.right);
  }

  return true;

}

// let thisTree = new BinaryTree(5);
// thisTree.left = new BinaryTree(4);
// thisTree.right = new BinaryTree(6);
// thisTree.left.left = new BinaryTree(3);
// thisTree.left.left.left = new BinaryTree(2);
// console.log(thisTree)
// console.log(superbalanced(thisTree));

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
