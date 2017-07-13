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
  if(tree.value === undefined) return true;
  if(tree.left === null && tree.right === null) return true;
  if(tree.left !== undefined && tree.left.value > tree.value) return false;
  if(tree.right !== undefined && tree.right.value <= tree.value) return false;
  return validBST(tree.left) && validBST(tree.right);
}

// function validBST(tree) {
 	//base case
 	
 	//traverse the left
 	  //tree.left.value < tree.value -- return true else false
 	//traverse the right
 	  //tree.right.value > tree.value -- return true else false



// }



// const newTree = {value: 6, 
// 	left: {value: 4, left: {value: 3, left: null, right: null}, right: {value: 5, left: null, right: null}},
// 	right: {value: 8, left: {value: 7, left: null, right: null}, right: {value: 9, left: null, right: null}}};

// console.log(validBST(newTree));


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
