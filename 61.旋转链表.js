/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
var rotateRight = function (head, k) {
  if (!head) return null
  var temp = head;
  var length = 1;
  var index1 = 1;
  // 计算长度
  while (head.next) {
    length++;
    head = head.next;
  }
  // 形成闭环
  head.next = temp;
  // 求出断开位置，K取length余数防止多余递归
  var index2 = length - k % length;
  // 重头开始递归，找出断开位置
  head = temp; // = head.next
  // 找到需要断开的位置
  while (index1 !== index2) {
    index1++;
    head = head.next;
  }
  // 保存头部head，方便返回
  temp = head.next;
  // 断开环链
  head.next = null;
  return temp;

};
// @lc code=end

