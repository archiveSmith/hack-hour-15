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
  if (!tree || !tree.value || typeof tree !== 'object') return false;
  let parent = tree.value;

  return validBSTHelper(tree, tree.value);

}

function validBSTHelper(tree, parent){

  return BSTleft(tree.left, parent) && BSTright(tree.right, parent);
}

function BSTleft(tree, parent){
  if (tree === null) return true;
  if (tree.left){
    if (tree.left.value > tree.value || tree.left.value > parent) return false;
  }
  if (tree.right){
    if (tree.right.value < tree.value || tree.right.value > parent) return false;
  }

  return BSTright(tree.right, parent) && BSTleft(tree.left, parent);
}

function BSTright(tree,parent){
  if (tree === null) return true;
  if (tree.left){
    if (tree.left.value > tree.value || tree.left.value < parent) return false;
  }
  if (tree.right){
    if (tree.right.value < tree.value || tree.right.value < parent) return false;
  }

  return BSTright(tree.right, parent) && BSTleft(tree.left, parent);
}



let bst = new BinaryTree(10);
bst.left = new BinaryTree(7);
bst.right = new BinaryTree(11);
bst.left.left = new BinaryTree(6);
bst.left.right = new BinaryTree(8);
bst.right.right = new BinaryTree(15);
bst.left.left.left = new BinaryTree(1);
bst.right.right.left = new BinaryTree(12);

console.log(validBST(bst));

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
