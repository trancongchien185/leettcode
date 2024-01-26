/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var i = a.length - 1;
  var j = b.length - 1;
  var carry = 0;
  var result = "";

  // Thực hiện cộng hai số nhị phân
  while (i >= 0 || j >= 0) {
    var sum = carry;

    if (i >= 0) {
      sum += parseInt(a[i]);
      i--;
    }

    if (j >= 0) {
      sum += parseInt(b[j]);
      j--;
    }

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  // Nếu còn chữ số nhớ cuối cùng
  if (carry) {
    result = carry + result;
  }

  return result;
};
