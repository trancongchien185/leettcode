/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
  const result = [];

  function permuteHelper(currentPerm, remainingNums, result) {
    if (remainingNums.length === 0) {
      result.push(currentPerm);
      return;
    }

    for (let i = 0; i < remainingNums.length; i++) {
      const num = remainingNums[i];
      const newRemainingNums = remainingNums.filter((_, index) => index !== i);
      const newPerm = [...currentPerm, num];
      permuteHelper(newPerm, newRemainingNums, result);
    }
  }

  permuteHelper([], nums, result);

  return result;
}