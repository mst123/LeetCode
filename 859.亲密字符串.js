/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
  if (A.length !== B.length) {
    return false;
  }
  var Arr = A.split('');
  var Brr = B.split('');
  var diff = [];
  if (A === B) {
    return A.length > new Set(B).size
  }
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] !== Brr[i]) {
      diff.push(Arr[i], Brr[i])
    }
  }
  if (diff.length !== 4) {
    return false;
  }
  if (diff[0] === diff[3] && diff[1] === diff[2]) {
    return true;
  }
  return false;

};
// @lc code=end

