/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const combinations = [];

  const generateParentheses = (leftCount, rightCount, current) => {
    if (leftCount === 0 && rightCount === 0) {
      combinations.push(current);
      return;
    }

    if (leftCount > 0) {
      generateParentheses(leftCount - 1, rightCount, current + "(");
    }

    if (rightCount > leftCount) {
      generateParentheses(leftCount, rightCount - 1, current + ")");
    }
  };

  generateParentheses(n, n, "");

  return combinations;
};
