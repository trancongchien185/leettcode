let x = 2;
let n = 10;

const add = function (x, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  const goi = add(x, Math.floor(n / 2));

  if (n % 2 === 0) {
    return goi * goi;
  } else {
    return goi * goi * x;
  }
};

const result = add(x, n);
console.log(result);
