/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 单调递减数列
// push:当前元素e入队时，相对于前面的元素来说，e最后进入窗口，e一定是最后离开窗口，
// 那么前面比e小的元素，不可能成为最大值，因此比e小的元素可以“压缩”掉
// pop:在元素入队时，是按照下标i入队的，因此队列中剩余的元素，其下标一定是升序的。
// 窗口大小不变，最先被排除出窗口的，一直是下标最小的元素，设为r。元素r在队列中要么是头元素，要么不存在。
var maxSlidingWindow = function (nums, k) {
  var arr = [];
  var queue = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      // queue[queue.length - 1] < nums[i] 没有 = ; 只有比他小的数，没有成为最大数的机会
      while (queue.length && queue[queue.length - 1] < nums[i]) {
        queue.pop();
      }
      queue.push(nums[i]);
      if (i === k - 1) {
        arr.push(queue[0]);
      }
    } else {
      // push 尾部增加
      while (queue.length && queue[queue.length - 1] < nums[i]) {
        queue.pop();
      }
      queue.push(nums[i]);
      // shift 头部删除
      if (nums[i - k] === queue[0]) {
        queue.shift();
      }
      arr.push(queue[0]);
    }
  }
  return arr;
};
maxSlidingWindow([9,10,9,-7,-4,-8,2,-6], 5);
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 单调递减队列
// 优秀解释 配合下面一段话 完美 https://leetcode-cn.com/problems/sliding-window-maximum/solution/dan-diao-dui-lie-by-labuladong/
// 理解单调队列的点睛之笔
// push:当前元素e入队时，相对于前面的元素来说，e最后进入窗口，e一定是最后离开窗口，
// 那么前面比e小的元素，不可能成为最大值，因此比e小的元素可以“压缩”掉
// pop:在元素入队时，是按照下标i入队的，因此队列中剩余的元素，其下标一定是升序的。
// 窗口大小不变，最先被排除出窗口的，一直是下标最小的元素，设为r。元素r在队列中要么是头元素，要么不存在。
/* var maxSlidingWindow = function(nums, k) {
  let n = nums.length;
  class slideWindow{
    constructor(){
      this.data = [];
    }
    push(val){
      let data = this.data;
      while(data.length > 0 && data[data.length - 1] < val){
        data.pop();
      }
      data.push(val);
    }
    pop(val){
      let data = this.data;
      if(data.length > 0 && data[0] === val){
        data.shift();
      }
    }
    max(){
      return this.data[0];
    }
  }
  let res = [];
  let windows = new slideWindow();
  for(let i = 0;i < n;i++){
    if(i < k - 1){
      windows.push(nums[i]);
    }else{
      windows.push(nums[i]);
      res.push(windows.max());
      // 下一次的头部删除
      windows.pop(nums[i - k + 1]);
    }
  }
  return res;
};
maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3); */
// @lc code=end
/* var maxSlidingWindow = function (nums, k) {
  var arr = [];
  var queue = [];
  for (let i = 0; i < nums.length; i++) {
    if (i < k) {
      if (!queue.length || nums[i] >= queue[queue.length - 1]) {
        queue.push(nums[i]);
      } else {
        while (nums[i] > queue[0]) {
          queue.shift();
        }
        queue.unshift(nums[i]);
      }
      if (i === k - 1) {
        arr.push(queue[queue.length - 1]);
      }
    } else {
      // push 尾部增加
      if (!queue.length || nums[i] >= queue[queue.length - 1]) {
        queue.push(nums[i]);
      } else {
        while (nums[i] > queue[0]) {
          queue.shift();
        }
        queue.unshift(nums[i]);
      }
      // shift 头部删除
      if (nums[i - k] === queue[queue.length - 1]) {
        queue.pop();
      }
      console.log(queue);
      arr.push(queue[queue.length - 1]);
    }
  }
  console.log(arr);
  return arr;
}; */
