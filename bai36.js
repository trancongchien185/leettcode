/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permuteUnique(nums) {
  const result = [];

  function permuteUniqueHelper(currentPerm, remainingNums, result) {
    if (remainingNums.length === 0) {
      result.push(currentPerm);
      return;
    }

    const usedNums = new Set();

    for (let i = 0; i < remainingNums.length; i++) {
      const num = remainingNums[i];

      // Kiểm tra và tránh tạo ra các hoán vị trùng lặp
      if (usedNums.has(num)) {
        continue;
      }

      usedNums.add(num);

      const newRemainingNums = remainingNums.slice(0, i).concat(remainingNums.slice(i + 1));
      const newPerm = [...currentPerm, num];
      permuteUniqueHelper(newPerm, newRemainingNums, result);
    }
  }

  permuteUniqueHelper([], nums, result);

  return result;
}