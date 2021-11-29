/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 双指针
 var twoSum = function(numbers, target) {
  let left = 0, right = numbers.length-1
  while(left < right) {
    const sum = numbers[left] + numbers[right]
    if(sum > target) {
      right--
    }else if (sum < target){
      left++
    }else if(sum === target){
      return [left+1, right+1]
    }
  }
};
// @lc code=end

