function generateMatrix(n) {
  const matrix = new Array(n).fill().map(() => new Array(n).fill(0));
  let currentNum = 1;
  let rowStart = 0,
    rowEnd = n - 1;
  let colStart = 0,
    colEnd = n - 1;

  while (rowStart <= rowEnd && colStart <= colEnd) {
    // Fill the top row
    for (let i = colStart; i <= colEnd; i++) {
      matrix[rowStart][i] = currentNum;
      currentNum++;
    }
    rowStart++;

    // Fill the right column
    for (let i = rowStart; i <= rowEnd; i++) {
      matrix[i][colEnd] = currentNum;
      currentNum++;
    }
    colEnd--;

    if (rowStart <= rowEnd) {
      // Fill the bottom row
      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = currentNum;
        currentNum++;
      }
      rowEnd--;
    }

    if (colStart <= colEnd) {
      // Fill the left column
      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = currentNum;
        currentNum++;
      }
      colStart++;
    }
  }

  return matrix;
}

const n = 3;
const matrix = generateMatrix(n);
console.log(matrix);
