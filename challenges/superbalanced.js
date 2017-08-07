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
  if (tree.value === null) return true; 
  if (tree.left === null && tree.right === null) return true;
  if (tree.left === null || tree.right === null) return false; 
  const left = checkTree(tree.left, 0); 
  const right = checkTree(tree.right, 0);
  if (left === false || right === false) return false; 
  console.log('left is', left); 
  console.log('right is', right);
  if (right - left > 1 || left - right > 1) return false; 
  return true; 
}

function checkTree(tree, height) {
	let left = height; 
	let right = height; 
	if (tree.left !== null) {
		left = checkTree(tree.left, height + 1); 
	}

	if (tree.right !== null) {
		right = checkTree(tree.right, height + 1); 
	}

	if (right - left > 1 || left - right > 1) return false; 
	return right > left ? right : left; 
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
