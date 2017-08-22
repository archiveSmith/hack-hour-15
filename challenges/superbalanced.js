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
  const heightArr = [];
  let height = 0;
  dfs(tree, height, heightArr);
  return heightArr;
}

function dfs(node, height, heightArr) {
  if (node) {
    height += 1;
    console.log(height)
    dfs(node.left, height, heightArr);
    dfs(node.right, height, heightArr);
  } else {
    console.log('here')
    heightArr.push(height);
  }
}

let tree = new BinaryTree(20);
tree.left = new BinaryTree(15);
tree.left.left = new BinaryTree(10);
tree.left.right = new BinaryTree(16);
tree.right = new BinaryTree(25);
tree.right.left = new BinaryTree(24);
tree.right.right = new BinaryTree(26);
tree.right.right.right = new BinaryTree(28);


console.log(superbalanced(tree)) 

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
