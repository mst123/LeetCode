/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力解决 时间复杂度 O(n2)
var twoSum = function(nums, target) {
  if (nums.length === 0) {
    return []
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return [];
};
// 利用hash映射 时间复杂度O(n)
var twoSum = function (nums, target) {
  var map = new Map();
  for (let i = 0; i < nums.length; i++) {
    var dif = target - nums[i]
    if (map.has(dif)) {
      return [i, map.get(dif)]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
};