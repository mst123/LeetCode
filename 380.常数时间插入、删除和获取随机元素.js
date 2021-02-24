/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.arr = []
  this.obj = {}
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (!(val in this.obj)) {
    // 将数值作为KEY 数值在数组中的下标作为VAL
    this.obj[val] = this.arr.length;
    this.arr.push(val);
    return true;
  } else {
    return false;
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
// 重点
RandomizedSet.prototype.remove = function(val) {
  if (val in this.obj) {
    // 保留要删除的数值
    var temp = this.arr[this.obj[val]];
    // 将要删除的数值与最后一位交换
    this.arr[this.obj[val]] = this.arr[this.arr.length - 1];
    // ***相应的对象也要交换,将置换数值在对象中对应的val值更新***
    this.obj[this.arr[this.arr.length - 1]] = this.obj[val];
    this.arr[this.arr.length - 1] = temp;
    delete this.obj[val]
    this.arr.pop()
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  return this.arr[Math.floor(Math.random() * (this.arr.length))]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end
/* 
  主要考察数组 对象方法的时间复杂度
*/
