/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力法，leetcode抽风，这竟然打败了99.92的人
/* var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] + nums[i] === target) {
        return [i, j]
      }
    }
  }
}; */
// 网友优秀答案
var twoSum = function(nums, target){
  const map = new Map();
  for(let i = 0; i < nums.length; i++){
    if (map.has(nums[i])){
      return [map.get(nums[i]), i];
    }else{
      map.set(target - nums[i], i);
    }
  }
}
// @lc code=end

