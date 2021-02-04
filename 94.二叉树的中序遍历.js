/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 时间复杂度 N 空间复杂度 N 递归
/* var inorderTraversal = function(root) {
  const res = [];
  const inOrder = (root) => {
    if (!root) {
      return;
    }
    inOrder(root.left);
    res.push(root.val);
    inOrder(root.right);
  }
  inOrder(root);
  return res;
}; */
// 栈迭代 时间复杂度 N 空间复杂度 N 不容易记
var inorderTraversal = function (root) {
  const res = [];
  const stack = [];
  while (root || stack.length) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    res.push(root.val);
    root = root.right;
  }
  return res;
};
// @lc code=end
