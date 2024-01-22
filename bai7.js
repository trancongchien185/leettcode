/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let reversed = 0;
  let isNegative = false;

  if (x < 0) {
    isNegative = true;
    x *= -1;
  }

  while (x > 0) {
    const digit = x % 10;
    reversed = reversed * 10 + digit;
    x = Math.floor(x / 10);
  }

  if (reversed > Math.pow(2, 31) - 1) {
    return 0;
  }

  return isNegative ? -reversed : reversed;
};