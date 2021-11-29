function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
const list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(2)
list.next.next.next = new ListNode(1)
list.next.next.next.next = null

var isPalindrome = function (head) {
  if(!head || !head.next){
    return true
  }
  let slow = fast = head;
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  // 区别单双链表
  if (fast !== null) {
    slow = slow.next
  }
  let right = reserve(slow)
  while (right) {
    if (right.val !== head.val) {
      return false
    }
    right = right.next
    head = head.next
  }
  return true
};

function reserve(head) {
  if (!head.next) {
    return head
  }
  const newHead = reserve(head.next)
  head.next.next = head
  head.next = null
  return newHead
}