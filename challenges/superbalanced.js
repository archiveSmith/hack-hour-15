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
  //edge cases
  if (tree.value === null) return true;
  if(tree.left === null || tree.right === null) return false;
  if(tree.left === null && tree.right === null) return true;
  
  const left = checkHeight(tree.left, 0);
  const right = checkHeight(tree.right, 0);
  if(left === false || right === false) return false;
  if(right - left > 1 || left - right > 1) return false;
  return true;
}

function checkHeight(tree, height) {
  let left = height;
  let right = height;
  if(tree.left !== null) {
    left = checkHeight(tree.left, height++);
  }
  if(tree.right !== null) {
    right = checkHeight(tree.right, height++);
  }
  if(right - left > 1 || left - right > 1) return false;
  return right > left ? right: left;
}

const newTree = {value: 6, 
	left: {value: 4, left: {value: 3, left: null, right: null}, right: {value: 5, left: null, right: null}},
	right: {value: 8, left: null, right, null}};
	//{value: 7, left: null, right: null}, right: null}};
	//, right: {value: 9, left: null, right: null}}};
	

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
