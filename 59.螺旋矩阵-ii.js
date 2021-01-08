/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
// 没搞定
var generateMatrix = function(n) {
  var arr = [], index = 1;
  var colMAX = n, rowMAX = n, colMIN = 0, rowMIN = 0;
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  //  0 0 '1' 开始
  // [row, col]
  return df(0, 0, 1);
  function df(col, row, sign) {
    if (index >= (n * n)) {
      return arr
    }
    if (sign % 4 === 3 || sign % 4 === 0) { //递减轮
      while (sign % 2 === 1 ? col >= colMIN : row >= rowMIN) {
        arr[row][col] = index;
        console.log([row, col]);
        index++
        if (sign % 2 === 1) { // 
          col-- 
        } else {
          row--
        }
      }
      if (sign % 2 === 1) { // 
        colMIN++
        return df(col+1, row, sign + 1)
      } else {
        rowMIN++
        return df(col, row+1, sign + 1)
      }
      
    } else { // 递增轮
      while (sign % 2 === 1 ? col < colMAX : row < rowMAX) {
        arr[row][col] = index;
        console.log([row, col]);
        index++
        if (sign % 2 === 1) { // 
          col++  
        } else {
          row++
        }
      }
      if (sign % 2 === 1) { // 
        colMAX--
        return df(col-1, row, sign + 1)
      } else {
        rowMAX--
        return df(col, row-1, sign + 1)
      }
      
    }
  }
};
// @lc code=end

