/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  const backtrack = (combination, startIndex, currentSum) => {
    if (currentSum === target) {
      result.push([...combination]);
      return;
    }

    if (currentSum > target) {
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      const num = candidates[i];
      combination.push(num);
      backtrack(combination, i, currentSum + num);
      combination.pop();
    }
  };

  backtrack([], 0, 0);

  return result;
};
