/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  function df(pre, cur) {
    if (cur === null) {
      return pre;
    } else {
      var temp = cur.next;
      cur.next = pre;
      return df(cur, temp);
    }
  }
  return df(null, head);
};
// @lc code=end

