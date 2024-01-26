/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var n = digits.length;

  // Lặp qua từng chữ số từ phải sang trái
  for (var i = n - 1; i >= 0; i--) {
    // Tăng giá trị của chữ số hiện tại lên 1
    digits[i]++;

    // Nếu chữ số được tăng không vượt quá 9, ta đã hoàn tất việc tăng
    if (digits[i] <= 9) {
      return digits;
    }

    // Nếu chữ số được tăng vượt qua 9,
    // ta đặt nó thành 0 và tiếp tục với chữ số trước đó
    digits[i] = 0;
  }

  // Nếu ta đã duyệt qua toàn bộ mảng nhưng vẫn có chữ số cần tăng,
  // ta chèn chữ số 1 vào đầu mảng
  digits.unshift(1);

  return digits;
};
