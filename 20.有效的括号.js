/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// "()[]{}" 这种情况直接gg 还是得用栈
// 上面出错的情况也不是不能解决，只是没有栈来的简单清晰
/* var isValid = function(s) {
  var obj = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  s = s.trim();
  if (s.length % 2 !== 0) {
    return false;
  }
  for (let i = 0; i < s.length/2; i++) {
    if (obj[s[i]] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}; */
var isValid = function(s) {
  var stack = [];
  var obj = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  s = s.trim();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      if (obj[stack.pop()] !== s[i]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
// 栈
// @lc code=end

