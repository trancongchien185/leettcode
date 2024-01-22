/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }

  let result = strs[0];

  for (let i = 1; i < strs.length; i++) {
    const currentString = strs[i];
    let j = 0;

    while (
      j < result.length &&
      j < currentString.length &&
      result[j] === currentString[j]
    ) {
      j++;
    }

    result = result.substring(0, j);

    if (result === "") {
      return "";
    }
  }

  return result;
};
