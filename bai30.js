const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

function KiemTraDaHoanThanh() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        return false;
      }
    }
  }
  return true;
}

function timViTriConTrongVaDienVao() {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === ".") {
        const set1 = new Set();
        console.log("init set");
        console.log(set1);
        console.log(`vị trí còn thiếu ở ô ${i} ${j}`);
        console.log(`Giá trị đã có sẵn ở row ${i} là`);

        for (let k = 0; k < board[i].length; k++) {
          if (board[i][k] !== ".") {
            console.log(board[i][k]);
            set1.add(board[i][k]);
          }
        }
        console.log(`Giá trị đã có sẵn ở colum ${j} là`);

        for (let k = 0; k < board[i].length; k++) {
          if (board[k][j] !== ".") {
            console.log(board[k][j]);
            set1.add(board[k][j]);
          }
        }

        console.log(`Giá trị đã có sẵn ở 9 ô vuông là`);
        const r = Math.floor(i / 3) * 3;
        const c = Math.floor(j / 3) * 3;
        for (let k = r; k < r + 3; k++) {
          for (let q = c; q < c + 3; q++) {
            if (board[k][q] !== ".") {
              console.log(board[k][q]);
              set1.add(board[k][q]);
            }
          }
        }
        console.log("kich thuoc cua set la :");
        console.log(set1.size);
        if (set1.size === 9) {
          console.log(board);
          console.log("set");
          console.log(set1);
          console.log("sai o dau do roi");
        }
        if (set1.size === 8) {
          if (!set1.has("1")) {
            console.log("gia tri con thieu la 1");
            board[i][j] = "1";
            return;
          }
          if (!set1.has("2")) {
            console.log("gia tri con thieu la 2");
            board[i][j] = "2";
            return;
          }
          if (!set1.has("3")) {
            console.log("gia tri con thieu la 3");
            board[i][j] = "3";
            return;
          }
          if (!set1.has("4")) {
            console.log("gia tri con thieu la 4");
            board[i][j] = "4";
            return;
          }
          if (!set1.has("5")) {
            console.log("gia tri con thieu la 5");
            board[i][j] = "5";
            return;
          }
          if (!set1.has("6")) {
            console.log("gia tri con thieu la 6");
            board[i][j] = "6";
            return;
          }
          if (!set1.has("7")) {
            console.log("gia tri con thieu la 7");
            board[i][j] = "7";
            return;
          }
          if (!set1.has("8")) {
            console.log("gia tri con thieu la 8");
            board[i][j] = "8";
            return;
          }
          if (!set1.has("9")) {
            console.log("gia tri con thieu la 9");
            board[i][j] = "9";
            return;
          }
        }
        console.log("*******************************New Item****************");
      }
    }
  }
}

while (!KiemTraDaHoanThanh()) {
  timViTriConTrongVaDienVao();
}

console.log(board);
console.log("Da Hoan Thanh, HAHAHA, day so tim duoc la: ");
