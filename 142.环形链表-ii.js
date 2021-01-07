/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
// 快慢指针
// var detectCycle = function(head) {
//   var slow = head, fast = head;
//   while (fast && fast.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//     if (slow === fast) {
//       var forward = head;
//       var behind = slow;
//       while (forward !== behind) {
//         forward = forward.next;
//         behind = behind.next;
//       }
//       return forward;
//     }
//   }
//   return null;
// };
// hash
var detectCycle = function(head) {
  var cord = new Set();
  var temp = head;
  while (temp) {
    if (cord.has(temp)) {
      return temp;
    } else {
      cord.add(temp);
      temp = temp.next;
    }
  }
  return null;
  
};
// @lc code=end

