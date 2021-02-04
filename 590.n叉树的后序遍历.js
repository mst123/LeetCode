/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  const arr = [];
  const df = root => {
    if (!root) {
      return;
    }
    for (const item of root.children) {
      df(item);
    }
    arr.push(root.val);
  }
  df(root);
  return arr;
};
// @lc code=end

