/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
// 递归解决，冗余代码有点多
// 时间复杂度O(n) 空间复杂度O(1)
var swapPairs = function(head) {
  var PRE = new ListNode(0);
  var temp;
  PRE.next = head;
  if (!head) {
    return head;
  }
  return df(PRE, head, head.next)
  function df(pre, cur, next) {
    if (cur && next) {
      temp = next.next;
      pre.next = next;
      next.next = cur;
      cur.next = temp;
      if (!temp) {
        return PRE.next;
      }
      return df(cur, temp, temp.next);
    } else {
      return PRE.next;
    }
  }
};
// 别人的代码量好少 递归放在了中间，不太好理解 慢慢来
var swapPairs = function (head) { 
  // 递归出口
  if (!head || !head.next) return head;
  // 先保存下一个节点，避免丢失
  const next = head.next;
  // 下一个递归会返回互换后的第一个节点
  // head 是当前组互换后的第二个节点，head.next 指向下一组就好
  head.next = swapPairs(next.next);
  // 将当前组的两个节点互换
  next.next = head;
  // 返回互换后的第一个节点
  return next;
};
// @lc code=end

