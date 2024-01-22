/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (str) {
  let i = 0;
  let sign = 1;
  let result = 0;

  // Bỏ qua khoảng trắng ở đầu chuỗi
  while (str[i] === " ") {
    i++;
  }

  // Xác định dấu của số
  if (str[i] === "-" || str[i] === "+") {
    sign = str[i] === "-" ? -1 : 1;
    i++;
  }

  // Đọc các chữ số
  while (i < str.length && isDigit(str[i])) {
    const digit = parseInt(str[i]);
    result = result * 10 + digit;

    // Kiểm tra nếu số vượt quá phạm vi
    if (
      result * sign < -Math.pow(2, 31) ||
      result * sign > Math.pow(2, 31) - 1
    ) {
      return sign === -1 ? -Math.pow(2, 31) : Math.pow(2, 31) - 1;
    }

    i++;
  }

  return result * sign;
};

// Kiểm tra xem ký tự có phải là chữ số hay không
function isDigit(char) {
  return char >= "0" && char <= "9";
}
