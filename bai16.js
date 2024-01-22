/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (!digits) return []; 

  const digitToLetters = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  const combinations = [];

  const generateCombinations = function(index, currentCombination) {
    if (currentCombination.length === digits.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentDigit = digits[index];
    const currentLetters = digitToLetters[currentDigit];

    for (let i = 0; i < currentLetters.length; i++) {
      const currentLetter = currentLetters[i];
      generateCombinations(index + 1, currentCombination + currentLetter);
    }
  };

  generateCombinations(0, '');

  return combinations;
};