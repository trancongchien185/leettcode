/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanTable[s[i]];
    const next = romanTable[s[i + 1]];

    if (next && next > current) {
      result += next - current;
      i++;
    } else {
      result += current;
    }
  }

  return result;
};
