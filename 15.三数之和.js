/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 没考虑到过滤重复三元素
/* var threeSum = function (nums) {
  var arr = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let n = j + 1; n < nums.length; n++) {
        if (nums[i] + nums[j] + nums[n] === 0) {
          arr.push([nums[i], nums[j], nums[n]]);
        } 
      } 
    }
  }
  return arr;
}; */
// 哈希 以后再写
// 排序后 双指针 , k l r 都需要跳过重复元素
// 题解地址 https://leetcode-cn.com/problems/3sum/solution/3sumpai-xu-shuang-zhi-zhen-yi-dong-by-jyd/
var threeSum = function (nums) {
  var arr = [];
  nums.sort((a, b) => a - b);
  for (let k = 0; k < nums.length - 2; k++) {
    if (typeof nums[k - 1] === "number" && nums[k] === nums[k - 1]) {
      continue;
    }
    var r = nums.length - 1;
    for (let l = k + 1; l < r;) {
      if (l > k + 1 && nums[l] === nums[l - 1]) {
        l++;
        continue;
      }
      if (r < nums.length - 1 && nums[r] === nums[r + 1]) {
        r--;
        continue;
      }
      switch (true) {
        case nums[k] + nums[l] + nums[r] === 0:
          arr.push([nums[k], nums[l], nums[r]]);
          l++;
          r--;
          break;
        case nums[k] + nums[l] + nums[r] < 0:
          l++;
          break;
        case nums[k] + nums[l] + nums[r] > 0:
          r--;
          break;
      }
      
    }
  }
  return arr;
};
// @lc code=end

