/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  const n = nums.length;
  
  if (n <= 1) {
    return n;
  }
  
  let k = 1;

  for (let i = 1; i < n; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};