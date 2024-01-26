/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let maxSum = Number.NEGATIVE_INFINITY;
  let currentSum = 0;
  let start = 0;

  for (let i = 0; i < nums.length; i++) {
    currentSum += nums[i];

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
      start = i + 1;
    }
  }

  return maxSum;
}
