/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  var m = obstacleGrid.length;
  var n = obstacleGrid[0].length;

  var dp = new Array(m);

  dp[0] = new Array(n).fill(0);
  dp[0][0] = obstacleGrid[0][0] === 0 ? 1 : 0;

  for (var i = 1; i < m; i++) {
    dp[i] = new Array(n).fill(0);
    if (obstacleGrid[i][0] === 0) {
      dp[i][0] = dp[i - 1][0];
    }
  }

  for (var j = 1; j < n; j++) {
    if (obstacleGrid[0][j] === 0) {
      dp[0][j] = dp[0][j - 1];
    }
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1];
};
