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
var reverseList = function (head) {
  // 后置递归
  /* function df(pre, cur) {
    if (cur === null) {
      return pre;
    } else {
      var temp = cur.next;
      cur.next = pre;
      return df(cur, temp);
    }
  }
  return df(null, head); */
  // 前置递归
  function df(head) {
    if (!head || head.next === null) {
      return head;
    }
    const last = df(head.next)
    head.next.next = head
    head.next = null
    return last
  }
  return df(head);
  // 迭代
  /* var reverseList = function (head) {
    var pre = null, cur = head, next;
    while (cur) {
      next = cur.next;
      cur.next = pre;
      
      pre = cur;
      cur = next;
    }
    return pre;
  }; */
};
// @lc code=end

