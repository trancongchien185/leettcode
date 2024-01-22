//Zigzag Conversion
// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

// Chuỗi "PAYPALISHIRING" được viết theo mẫu ngoằn ngoèo trên một số hàng nhất định như thế này: (bạn có thể muốn hiển thị mẫu này bằng phông chữ cố định để dễ đọc hơn)

// P A H N
// A P L S I I G
// Y I R
// Và sau đó đọc từng dòng: "PAHNAPLSIIGYIR"

// Viết mã sẽ lấy một chuỗi và thực hiện chuyển đổi này với một số hàng:

// chuyển đổi chuỗi(chuỗi s, int numRows);
// Example 1:

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
// Example 3:

// Input: s = "A", numRows = 1
// Output: "A"

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const rows = new Array(numRows).fill("");
  let currentRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; i++) {
    rows[currentRow] += s.charAt(i);

    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currentRow += goingDown ? 1 : -1;
  }

  let result = "";
  for (let i = 0; i < numRows; i++) {
    result += rows[i];
  }

  return result;
};
