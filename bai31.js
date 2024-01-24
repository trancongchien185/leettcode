/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) {
    return "1";
  }

  const previous = countAndSay(n - 1); // Tính chuỗi count-and-say cho n-1

  let result = ""; // Chuỗi count-and-say kết quả
  let count = 1; // Số lượng chữ số trong chuỗi con
  let digit = previous[0]; // Chữ số hiện tại

  // Duyệt qua các chữ số từ vị trí 1 đến hết chuỗi
  for (let i = 1; i < previous.length; i++) {
    if (previous[i] === digit) {
      count++; // Tăng số lượng chữ số
    } else {
      result += count.toString() + digit; // Thêm phần tử đã nói vào kết quả
      count = 1; // Đặt lại số lượng chữ số
      digit = previous[i]; // Chuyển sang chữ số mới
    }
  }

  // Thêm phần tử cuối cùng vào kết quả
  result += count.toString() + digit;

  return result; // Trả về chuỗi count-and-say cho n
};
