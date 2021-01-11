/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 时间空间度 O(n^2) 空间复杂度 O(1)
/* var removeDuplicates = function (nums) {
  var temp = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === temp) {
      temp = nums[i];
      nums.splice(i, 1)
      i--;
    } else {
      temp = nums[i];
    }
  }
  return nums.length
}; */
// 利用双指针把不重复的元素 移到左侧
// 时间空间度 O(n) 空间复杂度 O(1)
// 0会转换成false 稳妥的方式还是用typeof
var removeDuplicates = function (nums) {
  var l = 0, r = 1, length = 0;
  while (typeof nums[r] !== "undefined") {
    if (nums[l] !== nums[r]) {
      length++;
      nums[++l] = nums[r];
    }
    r++;
  }
  return length + 1;
};
// @lc code=end

