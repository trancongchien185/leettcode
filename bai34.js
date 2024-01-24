/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
  const n = nums.length;
  let currentPosition = 0;
  let nextPosition = 0;
  let jumps = 0;

  for (let i = 0; i < n - 1; i++) {
    nextPosition = Math.max(nextPosition, i + nums[i]);
    if (currentPosition === i) {
      currentPosition = nextPosition;
      jumps++;
      if (currentPosition >= n - 1) {
        return jumps;
      }
    }
  }

  return jumps;
}
