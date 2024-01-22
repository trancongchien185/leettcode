/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }
  let str = x.toString();

  let right = str.length;

  for (let i = 0; i < right / 2; i++) {
    if (str[i] !== str[right - 1 - i]) {
      return false;
    }
  }
  return true;
};
