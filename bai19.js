/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else {
      if (
        stack.length === 0 ||
        (char === ")" && stack[stack.length - 1] !== "(") ||
        (char === "}" && stack[stack.length - 1] !== "{") ||
        (char === "]" && stack[stack.length - 1] !== "[")
      ) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};