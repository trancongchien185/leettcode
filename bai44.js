/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
  let maxPosition = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > maxPosition) {
      return false;
    }

    maxPosition = Math.max(maxPosition, i + nums[i]);

    if (maxPosition >= nums.length - 1) {
      return true;
    }
  }

  return false;
}