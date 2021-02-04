/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const arr = [];
  const df = root => {
    if (!root) {
      return
    }
    arr.push(root.val);
    for (const item of root.children) {
      df(item);
    }
  }
  df(root);
  return arr;
};
// @lc code=end

