/**
 * @param {number} n 
 * @param {number[]}
 */
var sumZero = function(n) {
  let resArr = [];
  let uniqueN = Math.floor(n / 2);

  if (n % 2 != 0) {
    resArr.push(0);
  }

  for (let i = 1; i <= uniqueN; i ++) {
    resArr.push(-i, i);
  }

  return resArr;
}

console.log(sumZero(5));
console.log(sumZero(4));
console.log(sumZero(3));
console.log(sumZero(8));
console.log(sumZero(6));
