/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const n = nums.length;
  const result = [];

  nums.sort((a, b) => a - b);

  for (let a = 0; a < n - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;

    for (let b = a + 1; b < n - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      let left = b + 1;
      let right = n - 1;

      while (left < right) {
        const sum = nums[a] + nums[b] + nums[left] + nums[right];

        if (sum === target) {
          result.push([nums[a], nums[b], nums[left], nums[right]]);

          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;

          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};
