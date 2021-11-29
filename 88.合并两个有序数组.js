/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 合并后排序就不写了
// 比较大小然后排序，还是双指针比较容易， 简单题 也不简单啊
var merge = function (nums1, m, nums2, n) {
  // 为了符合题意，将nums1有用的部分复制了一份
  var nums1Copy = nums1.slice(0, m);
  // 两个指针
  var i = 0, j = 0, index = 0;
  // 确保两个数组都有值，方便比较，将后续处理放置在最后比较容易处理
  while (typeof nums1Copy[i] !== "undefined" && typeof nums2[j] !== "undefined") {
    if (nums1Copy[i] > nums2[j]) {
      nums1[index] = nums2[j];
      j++;
    } else {
      nums1[index] = nums1Copy[i];
      i++;
    }
    index++;
  }
  // 一方的数组用完了，只要将另一个数组剩余元素拼接到后边即可
  if (typeof nums1Copy[i] !== "undefined") {
    while (typeof nums1Copy[i] !== "undefined") {
      nums1[index++] = nums1Copy[i++];
    }
  } else {
    while (typeof nums2[j] !== "undefined") {
      nums1[index++] = nums2[j++];
    }
  }
};
// 上面属于先排列小的，如果改为先排列大的，就不需要额外空间了
// 也是属于双指针
var merge = function (nums1, m, nums2, n) {
  var l1 = m - 1, l2 = n - 1, tail = nums1.length - 1;
  while (l1 >= 0 && l2 >= 0) {
    if (nums1[l1] > nums2[l2]) {
      nums1[tail] = nums1[l1--];
    } else {
      nums1[tail] = nums2[l2--];
    }
    tail--;
  }
  if (l1 < 0) {
    while (l2 >= 0) {
      nums1[tail--] = nums2[l2--]; 
    }
  }
  if (l2 < 0) {
    while (l1 >= 0) {
      nums1[tail--] = nums1[l1--]; 
    }
  }
  return nums1;
};

/* var merge = function(nums1, m, nums2, n) {
  let p1 = p2 = 0
  const arr = []
  while(p1 < m || p2 < n){
    if(p1 === m){
      arr.push(nums2[p2])
      p2++
    }else if(p2 === n){
      arr.push(nums1[p1])
      p1++
    }else if(nums1[p1] <= nums2[p2]){
      arr.push(nums1[p1])
      p1++
    }else{
      arr.push(nums2[p2])
      p2++
    }
  }
  for(let i=0;i<arr.length;i++){
    nums1[i] = arr[i];
  }
}; */
// @lc code=end

