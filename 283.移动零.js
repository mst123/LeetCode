/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 时间复杂度 O(n2) 空间复杂度O(1)
/* var moveZeroes = function(nums) {
  for (let i = 0, l = nums.length; i < l; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      // 不加的话 会无限循环
      l--;
      i--;
    }
  }
  return nums;
}; */
// 因为是需要保持非零元素的相对位置，此算法会倒叙
/* var moveZeroes = function(nums) {
  for (let i = 0, l = nums.length - 1; i <= l; i++) {
    if (nums[i] === 0) {
      nums[i] = nums[l];
      nums[l] = 0;
      l--;
    }
  }
  return nums;
}; */
var moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      // 处于同一位置，不能置换，会有bug，会把当前数变为0
      if (i !== j) {
        nums[i] = 0;
      }
      j++;
    }
  }
  return nums;
};
// @lc code=end

