/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] O(1) 时间插入、删除和获取随机元素
 */

// @lc code=start
var RandomizedSet = function() {
  this.hash = Object.create(null, {})
  this.array = []
};

RandomizedSet.prototype.insert = function(val) {
  if (typeof this.hash[val] !== "undefined") {
    return false
  } else {
    this.array.push(val)
    // 存储位置
    this.hash[val] = this.array.length - 1
    return true
  }
};

RandomizedSet.prototype.remove = function(val) {
  if (typeof this.hash[val] !== "undefined") {
    // 待删除元素的索引
    const index = this.hash[val]
    // 对末尾元素进行操作
    const tailValue = this.array[this.array.length - 1]
    this.hash[tailValue] = index
    this.array[index] = tailValue
    // 删除
    this.array.pop()
    delete this.hash[val]
    return true
  } else {
    return false
  }
};

RandomizedSet.prototype.getRandom = function() {
  return this.array[Math.floor(Math.random()*this.array.length)]
};
/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
// @lc code=end

