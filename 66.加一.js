/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 时间复杂度 O(n) 空间复杂度O(1)
var plusOne = function (digits) {
  var n = digits.length - 1;
  df(n, 1)
  function df(n, num) {
    if (n < 0) {
      return;
    } else {
      if (digits[n] + num === 10) {
        digits[n] = 0;
        // 如果第一位加起来等于10，需要多加一位数
        if (n === 0) {
          digits.unshift(0);
          n++;
        }
        return df(n - 1, 1);
      } else {
        digits[n] = digits[n] + num;
        return df(n - 1, 0);
      }
    }
  }
  return digits;
}
// @lc code=end

