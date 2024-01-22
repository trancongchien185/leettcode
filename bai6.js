// Reverse Integer

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Cho số nguyên x 32 bit có dấu, trả về x với các chữ số bị đảo ngược. Nếu đảo ngược x làm cho giá trị nằm ngoài phạm vi số nguyên 32 bit đã ký [-231, 231 - 1] thì trả về 0.

// Giả sử môi trường không cho phép bạn lưu trữ số nguyên 64 bit (có dấu hoặc không dấu).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
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
