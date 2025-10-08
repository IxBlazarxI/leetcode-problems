/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  potions.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < spells.length; i++) {
    let l = 0, r = (potions.length - 1);
    let weakestPot = potions.length;
    while (l <= r) {
      let m = Math.floor((l + r) / 2);
      if (spells[i] * potions[m] >= success) {
        r = m - 1;
        weakestPot = m;
      } else {
        l = m + 1;
      }
    }
    res.push(potions.length - weakestPot);
  }
  return res;
};
