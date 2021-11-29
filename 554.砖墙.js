/*
 * @lc app=leetcode.cn id=554 lang=javascript
 *
 * [554] 砖墙
 */

// @lc code=start
/**
 * @param {number[][]} wall
 * @return {number}
 */
var longestPalindrome = function(s) {
  if(s.length<=1){
    return s
  }
  let maxPostiton, maxLength = 0
  for(let i = 0; i<s.length;i++){
    const l1 = help1(s, i)
    const l2 = help2(s, i)
    if(l1>maxLength){
      maxLength = l1
      maxPostiton = i
    }
    if(l2>maxLength){
      maxLength = l2
      maxPostiton = i
    }
  }
  function help1(s, pos){
    let length = 0
    for(let i = 0;pos+i<s.length && pos -i >=0;i++){
      if(s[pos+i] === s[pos-i]){
        length = 2*i + 1
      }else{
        break
      }

    }
    return length
  }
  function help2(s, pos){
    let length = 0
    for(let i = 0;pos+i+1<s.length && pos-i>=0;i++){
      if(s[pos+1+i] === s[pos-i]){
        length = 2*(i+1)
      }else{
        break
      }

    }
    return length
  }
  return s.substr( maxPostiton - (Math.ceil(maxLength/2)-1), maxLength)
};
// @lc code=end

