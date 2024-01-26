/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  var m = grid.length;
  var n = grid[0].length;

  // Tạo ma trận dp[m][n] để lưu tổng nhỏ nhất cho các đường đi từ (0,0) đến (i,j)
  var dp = new Array(m);

  // Khởi tạo hàng đầu tiên của ma trận dp
  dp[0] = new Array(n).fill(0);
  dp[0][0] = grid[0][0];

  // Khởi tạo cột đầu tiên của ma trận dp
  for (var i = 1; i < m; i++) {
    dp[i] = new Array(n).fill(0);
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // Khởi tạo dòng đầu tiên của ma trận dp
  for (var j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // Tính toán tổng nhỏ nhất cho các đường đi từ (0,0) đến (i,j) dựa trên ô trước đó
  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  // Trả về tổng nhỏ nhất của đường đi từ (0,0) đến (m-1,n-1)
  return dp[m - 1][n - 1];
};
