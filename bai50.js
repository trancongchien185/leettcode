/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
function uniquePaths(m, n) {
  const dp = new Array(m).fill().map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1; // Gán 1 cho các ô lưới trên cột đầu tiên
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1; // Gán 1 cho các ô lưới trên hàng đầu tiên
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

// Ví dụ:
const m = 3;
const n = 7;
const paths = uniquePaths(m, n);
console.log(paths);
