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
var addTwoNumbers = function(l1, l2) {
  var l3 = null;
  handle(l1, l2, l3)
  function handle(l1, l2, l3, flag) {
    if (l1 === null && l2 === null) {
      return l3
    } else {
      if (l1.val + l2.val >= 10) {
        l3 = ListNode((l1 ? l1.val : 0) + (l2 ? l2.val : 0) - 10 + (flag ? 1 : 0), null)
        flag = true
      } else {
        flag = false
        l3 = ListNode((l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (flag ? 1 : 0), null)
      }
      return handle(l1.next, l2.next, l3.next)
    }
  }
};