/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 正常二分法
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      return mid
    }
  }
  return -1
};
// 含有重复元素 找到第一个等于target的数
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      if (mid === 0 || nums[mid - 1] !== target) {
        return mid
      }
      right = mid - 1
    }
  }
  return -1
};
// 含有重复元素 找到最后一个等于target的数
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      if (mid === nums.length - 1 || nums[mid + 1] !== target) {
        return mid
      }
      left = mid + 1
    }
  }
  return -1
};
// 含有重复元素 查找第一个大于等于给定值的元素
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] >= target) {
      if (mid === 0 || nums[mid - 1] < target) {
        return mid
      }
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    }
  }
  return -1
};
// 含有重复元素 查找最后一个小于等于给定值的元素
var search = function(nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] <= target) {
      if (mid === nums.length - 1 || nums[mid + 1] > target) {
        return mid
      }
      left = mid + 1
    }
  }
  return -1
};
// @lc code=end

