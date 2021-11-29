/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var reverseKGroup = function(head, k) {
  if (!head) {
    return head;
  }
  let left = right = head;
  for (let i = 0; i < k; i++) {
    if (!right) {
      return left;
    }
    right = right.next;
  }
  const newHead = reverse(left, right)
  left.next = reverseKGroup(right, k)
  return newHead
};
function reverse( a,  b) {
  let pre, cur, nxt;
  pre = null; cur = a; nxt = a;
  // while 终止的条件改一下就行了
  while (cur != b) {
      nxt = cur.next;
      cur.next = pre;
      pre = cur;
      cur = nxt;
  }
  // 返回反转后的头结点
  return pre;
}
// @lc code=end

