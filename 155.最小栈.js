/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
// push 和 pop的时候更新最小值 时间复杂度是O(n)
// O(1) https://leetcode-cn.com/problems/min-stack/solution/chai-zhi-fa-155-zui-xiao-zhan-by-fe-lucifer/
// 上边题解 两个栈的方法比较容易记忆和理解 
var MinStack = function () {
  this.arr = [];
  this.min = null;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.arr.push(x);
  this.min = this.min === null ? x : Math.min(x, this.min);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.arr.length < 1) {
    return null;
  } else {
    var pop = this.arr.pop();
    this.min = this.arr.length === 0 ? null : Math.min(...this.arr);
    return pop;
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.arr.length < 1) {
    return null;
  } else {
    return this.arr[this.arr.length - 1];
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

