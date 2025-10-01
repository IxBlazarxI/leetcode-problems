/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
  let consumedBottles = 0;
  while (numBottles >= numExchange) {
    consumedBottles += numExchange;
    numBottles -= numExchange;

    numBottles += 1;
  }
  return consumedBottles + numBottles;
};
