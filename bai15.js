/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);

  let closestSum = Infinity;
  const n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    let left = i + 1;
    let right = n - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        return sum;
      }

      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum > target) {
        right--; // Giảm con trỏ right nếu tổng vượt quá target
      } else {
        left++; // Tăng con trỏ left nếu tổng nhỏ hơn target
      }
    }
  }

  return closestSum; // Trả về tổng gần nhất
};
