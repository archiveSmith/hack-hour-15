/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

 // Recursive Approach
  // Create a function that finds the height of a subTree
    // Recursively descends into the left and right sides of the subTree
    // Counts the height of the left and right side
    // Returns the height of the longer side
  // Compare the height of the left subTree and right subTree and return a value

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  function maxHeight(subTree, height) {
    // create an array of heights
    if (subTree === null) return height;
    else {
      ++height; // could update this parameter when calling maxHeight
      return Math.max(maxHeight(subTree.left, height), maxHeight(subTree.right, height));
    }
    // go down a level, increment currentHeight by 1, add to possibleHeights
    // return maxNumber of possibleHeights array
  }
  return maxHeight(tree.left, 0) - maxHeight(tree.right, 0) <= 1 ? true : false;
}

maxHeight('height', test1); // expect 2

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};

// Shouldn't start a new level until the previous level is full
/*


*/
// Ryan's solution

function treeHeight(tree, height = 0) {
  // Base case: tree is null
  if (!tree) return height;
  // Check height of left. Store height in variable
  const leftHeight = treeHeight(tree.left, height + 1);
  // Check height of right. Store height in variable
  const rightHeight = treeHeight(tree.right, height + 1);
  // return maximum of right and left height
  return Math.max(leftHeight, rightHeight);
}

function superbalanced(tree) {
  // Base case: if tree is null, return true!
  if (!tree) return true;
  // Check that the left is balanced with a recursive call. Store as boolean
  const leftBalanced = superbalanced(tree.left);
  // Check that the right is balanced with a recursive call. Store as boolean
  const rightBalanced = superbalanced(tree.right);
  // Check that the height diff between left and right is no more than 1. Store as boolean
  const heightDiffOK = Math.abs(treeHeight(tree.left) - treeHeight(tree.right)) <= 1;
  // Return value: left is balanced AND right is balanced AND height diff is ok
  return leftBalanced && rightBalanced && heightDiffOK;
}

// Create a binary search tree that automatically balances itself