/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 枚举 简单粗暴 但是遍历边界需要注意
// 时间复杂度O(n^2)
/* var maxArea = function(height) {
  var maxArea = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = i + 1; j < height.length; j++) {
      var area = (Math.min(height[i], height[j])) * (j - i);
      if (area > maxArea) {
        maxArea = area;
      }
    }
  }
  return maxArea;
}; */
// 双指针法 高的一侧固定 时间复杂度O(n) 
/* var maxArea = function(height) {
  var maxArea = 0;
  var j = height.length - 1;
  // = 不必要
  for (let i = 0; i < j; i++) {
    // 右侧柱子高，从左往右遍历
    var area = (Math.min(height[i], height[j])) * (j - i);
    if (area > maxArea) {
      maxArea = area;
    }
    // 左边柱子高,从右侧往左遍历
    if (height[i] > height[j]) {
      j--;
      i--;
    }
  }
  return maxArea;
}; */
// 改写一下 B格更高
var maxArea = function(height) {
  var maxArea = 0;
  var j = height.length - 1;
  // 
  for (let i = 0; i < j; ) {
    // 右侧柱子高，从左往右移动, 左边柱子高,从右侧往左移动
    var minHeight = height[i] > height[j] ? height[j--] : height[i++]
    // 距离 + 1 不能忘
    var area = minHeight * (j - i + 1);
    maxArea = area > maxArea ? area : maxArea;
  }
  return maxArea;
};
/* 引用评论一句话，我觉得说的不错
每次都移动自己最差的一边，虽然可能变得更差，
但是总比不动（或者减小）强，动最差的部分可能找到更好的结果，
但是动另一边总会更差或者不变，兄弟们，这不是题，这是人生，逃离舒适圈！！
*/
// @lc code=end

