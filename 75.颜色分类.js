/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 时间复杂度 O(n) 两次遍历 空间复杂度 1
/* var sortColors = function (nums) {
  var p = 0;
  for (let i = 0,n = nums.length; i < n; i++) {
    if (nums[i] === 0) {
      nums[i] = nums[p];
      nums[p] = 0;
      p++
    }
  }
  for (let i = p,n = nums.length; i < n; i++) {
    if (nums[i] === 1) {
      nums[i] = nums[p];
      nums[p] = 1;
      p++
    }
  }
  return nums;
}; */
// 双指针 一次遍历
var sortColors = function (nums) {
  var p1 = 0, p2 = nums.length - 1;
  for (let i = 0; i <= p2; i++) {
    if (nums[i] == 0)
    {
      nums[i] = nums[p1];
      nums[p1] = 0;
      ++p1;
    }
    if (nums[i] == 2)
    {
      nums[i] = nums[q];
      nums[q] = 2;
      --q;
      // 点睛之笔
      if (nums[i] != 1) {
        --i;
      }
    }
  }
};
// @lc code=end

