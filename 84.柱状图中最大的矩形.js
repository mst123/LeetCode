/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
// 注意区分 11.盛水最多的容器 左右指针,不受中间数值影响 在这里不适用
// 暴力求解，数组长度3000时，超时了
// 时间复杂度O(n^3) 空间复杂度 O(1)
/* var largestRectangleArea = function (heights) {
  var maxArea = heights[0], area;
  for (let i = 0; i < heights.length - 1 ; i++) {
    for (let j = i + 1; j < heights.length; j++) {
      area = (j - i + 1) * Math.min(...heights.slice(i, j + 1));
      maxArea = maxArea > area ? maxArea : area;
    }
  }
  for (let i = 0; i < heights.length; i++) {
    maxArea = heights[i] > maxArea ? heights[i] : maxArea;
  }
  return maxArea;
}; */
// 遍历每根柱子，求以他高度为高度的最大面积 
// 时间复杂度 O(n^2) 空间复杂度 O(1)
// 也超时了。。
/* var largestRectangleArea = function (heights) {
  var maxArea = 0, area;
  for (let i = 0; i < heights.length; i++) {
    area = heights[i] * findLengthByLR(heights[i], i - 1, i + 1);
    if (area > maxArea) {
      maxArea = area;
    }
  }
  function findLengthByLR(cur, l, r) {
    if ((l < 0 || heights[l] < cur) && (r >= heights.length || heights[r] < cur)) {
      return r - 1 - l
    } else {
      if (l >= 0 && heights[l] >= cur) {
        l--;
      }
      if (r < heights.length && heights[r] >= cur) {
        r++;
      }
      return findLengthByLR(cur, l, r);
    }
  }
  return maxArea;
}; */
// 栈方法 时间复杂度O(n) 空间复杂度O(n)
// 单调栈示意图 https://leetcode-cn.com/problems/largest-rectangle-in-histogram/solution/zhu-zhuang-tu-zhong-zui-da-de-ju-xing-by-leetcode-/
var largestRectangleArea = function (heights) {
  // 定义一个虚拟的左边界，方便计算
  var stack = [{
    pos: -1,
    val: -1
  }], maxArea = 0, heightObj, area;
  let i = 0;
  for (i = 0; i < heights.length; i++) {
    // 也就是没找到右边界
    // 栈中维持了一个由小到大的顺序，也就是元素的左边界
    if (heights[i] >= stack[stack.length - 1].val) {
      stack.push({
        pos: i,
        val: heights[i]
      })
    //找到了右边界，左边界就是元素在栈中前边的那个元素
    } else {
      // 循环条件除了后一个更小 还必须要stack一直存在左边界 -1
      // 满足条件不停退栈的过程其实也是寻找当前元素的左边界
      while (heights[i] < stack[stack.length - 1].val && stack.length > 1) {
        // 退出栈的元素，左右边界都有了 所以退栈计算，以防干扰
        heightObj = stack.pop();
        // i代表右边界 栈顶表示左边界
        area = heightObj.val * (i - stack[stack.length - 1].pos - 1);
        if (area > maxArea) {
          maxArea = area;
        }
      }
      // 出栈结束后，当前元素heights[i]还需要入栈
      stack.push({
        pos: i,
        val: heights[i]
      })
    }
  }
  // 栈中可能还存在元素，需要继续计算
  while (stack.length > 1) {
    heightObj = stack.pop();
    area = heightObj.val * (i - stack[stack.length - 1].pos - 1);
    if (area > maxArea) {
      maxArea = area;
    }
  }
  return maxArea;
};
largestRectangleArea([2, 4]);
// @lc code=end

