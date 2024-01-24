/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const rows = new Array(9).fill().map(() => new Set());
  const columns = new Array(9).fill().map(() => new Set());
  const boxes = new Array(9).fill().map(() => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const digit = board[i][j];

      if (digit !== ".") {
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

        if (
          rows[i].has(digit) ||
          columns[j].has(digit) ||
          boxes[boxIndex].has(digit)
        ) {
          return false;
        }

        rows[i].add(digit);
        columns[j].add(digit);
        boxes[boxIndex].add(digit);
      }
    }
  }

  return true;
};
