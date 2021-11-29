/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
// 链表类
class ListNode {
  constructor(key, val, pre=null, next=null){
    this.key = key;
    this.val = val;
    this.pre = pre;
    this.next = next;
  }
}

var LRUCache = function (capacity) {
  // 最大长度
  this.capacity = capacity
  this.hash = new Map()
  // 计数器
  this.count = 0
  // 虚拟头部
  this.dummyHead = new ListNode(-1, -1)
  // 虚拟尾部
  this.dummyTail = new ListNode(-1, -1)
  this.dummyHead.next = this.dummyTail
  this.dummyTail.pre = this.dummyHead
  // 头部
  this.listHead = this.dummyHead
  // 尾部
  this.listTail = this.dummyTail
};

LRUCache.prototype.get = function(key) {
  if (this.hash.has(key)) {
    const existNode = this.hash.get(key)
    // 从原位置删除
    existNode.next.pre = existNode.pre
    existNode.pre.next = existNode.next
    // 把节点插入虚拟尾部之前
    this.insertBeforeTail(existNode)
    return this.hash.get(key).val
  }else{
    return -1
  }
};

LRUCache.prototype.put = function(key, value) {
  if (this.hash.has(key)) { // 已存在
    const existNode = this.hash.get(key)
    // 从原位置删除
    existNode.next.pre = existNode.pre
    existNode.pre.next = existNode.next
    // 题目有个变更要求
    existNode.val = value
    // 把节点插入虚拟尾部之前
    this.insertBeforeTail(existNode)
  } else { // 未存在
    const newNode = new ListNode(key, value)
    if (this.count < this.capacity) { // 容量没满
      // 把新节点插入虚拟尾部之前
      this.insertBeforeTail(newNode)
      // 用key记录节点
      this.hash.set(key, newNode)
      // 计数
      this.count++
    } else { // 容量满了
      // 删除节点记录
      this.hash.delete(this.listHead.next.key)
      // 把虚拟头部后边节点删除
      this.listHead.next = this.listHead.next.next
      this.listHead.next.pre = this.listHead 
      // 把新节点插入虚拟尾部之前   
      this.insertBeforeTail(newNode)
      // 用key记录节点
      this.hash.set(key, newNode)
    }
  }
};
LRUCache.prototype.insertBeforeTail = function (newNode) {
  // 把节点插入虚拟尾部之前
  this.listTail.pre.next = newNode
  newNode.pre = this.listTail.pre
  newNode.next = this.listTail
  this.listTail.pre = newNode
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

const lru = new LRUCache(2);

console.log(lru.put(1, 1));
console.log(lru.put(2, 2));
console.log(lru.get(1));
console.log(lru.put(3, 3));
console.log(lru.get(2));
console.log(lru.put(4, 4));
console.log(lru.get(1));
console.log(lru.get(3));
console.log(lru.get(4));
