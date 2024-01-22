// Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.
// Cho một chuỗi s, trả về chuỗi con palindromic dài nhất trong s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    const len1 = expandAroundCenter(s, i, i);
    const len2 = expandAroundCenter(s, i, i + 1);

    const maxLength = Math.max(len1, len2);

    if (maxLength > end - start) {
      start = i - Math.floor((maxLength - 1) / 2);
      end = i + Math.floor(maxLength / 2);
    }
  }

  return s.substring(start, end + 1);
};

var expandAroundCenter = function (s, left, right) {
  while (left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
    left--;
    right++;
  }

  return right - left - 1;
};
