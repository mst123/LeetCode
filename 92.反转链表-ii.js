/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (!head) {
    return null;
  }
  if (m === n) {
    return head;
  }
  var HEAD = head;
  var a = null, b, c, d, temp;
  df(null, head, 1)
  function df(pre, cur, index) {
    console.log(index);
    if (cur === null) {
      return;
    } else {
      switch (true) {
        case index === m - 1:
          a = cur;
          break;
        case index === m:
          b = cur;
          break;
        case index > m && index <= n:
          temp = cur.next;
          cur.next = pre;
          if (index === n) {
            c = cur;
          }
          return df(cur, temp, index + 1);
        case index === n + 1:
          d = cur;
          break;
      }
      return df(cur, cur.next, index + 1);
    }
  }
  if (a) {
    a.next = c;
  }
  b.next = d ? d : null;
  if (m === 1) {
    return c;
  }
  return HEAD;
};
// @lc code=end