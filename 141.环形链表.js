/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
//hash表求是否存在重复元素,数组应该是O(n^2)
// 时间复杂度 O(n) 空间复杂度 O(1)
/* var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  var map = new Map();
  while (head.next !== null) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head, 1); 
    }
    head = head.next;
  }
  return false;
}; */
// 优化一下 head条件
/* var hasCycle = function (head) {
  var map = new Map();
  while (head) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head, 1); 
    }
    head = head.next;
  }
  return false;
}; */
// 快慢指针
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  var fast = head, slow = head;
  while (fast) {
    if (!fast.next) {
      return false;
    }
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
// @lc code=end

