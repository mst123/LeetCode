/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 分析
/* 
迈向4级台阶，要么是3+1，要么是2+2
迈向5级台阶，要么是4+1，要么是3+2
F(N) = F(N-1) + F(N-2)
斐波拉契数列
*/
// 没做缓存，超时了。。。
/* var climbStairs = function(n) {
  if (n <= 3) {
    return n;
  } else {
    return climbStairs(n - 1) + climbStairs(n - 2);
  }
}; */
// 建议使用循环缓存
var climbStairs = function(n) {
  if (n < 3) {
    return n;
  }
  var f1 = 1, f2 = 2, f3 = 3;
  for (let i = 3; i <= n; i++) {
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
  }
  return f3;
};
// @lc code=end

