/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 时间复杂度O(n) 空间复杂度O(1)
// 虽然是简单，我感觉好吃力，是我太菜
// 迭代
var mergeTwoLists = function (l1, l2) {
  var dyNode = new ListNode(0);
  var head = dyNode;
  while (l1 && l2) {
    if (l1.val >= l2.val) {
      dyNode.next = l2;
      dyNode = l2;
      l2 = l2.next;
    } else if(l1.val < l2.val) {
      dyNode.next = l1;
      dyNode = l1;
      l1 = l1.next;
    }
  }
  dyNode.next = l1 ? l1 : l2;
  return head.next;
};
// 递归不会啊 
// 图解 https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/yi-kan-jiu-hui-yi-xie-jiu-fei-xiang-jie-di-gui-by-/
var mergeTwoLists = function(l1, l2) {
  if(l1 === null){
    return l2;
  }
  if(l2 === null){
    return l1;
  }
  if(l1.val < l2.val){
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  }else{
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};
// @lc code=end

