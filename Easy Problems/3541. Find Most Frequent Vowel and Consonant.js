/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
  let map = new Map();
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

  let vow = (s.split("").filter(char => vowels.includes(char)));
  let cons = (s.split("").filter(char => consonants.includes(char)));

  let vowMap = new Map();
  let consMap = new Map();

  for (let i = 0; i < vow.length; i++) {
    if (vowMap[vow[i]]) {
      vowMap[vow[i]]++;
    } else {
      vowMap[vow[i]] = 1;
    }
  }
  for (let i = 0; i < cons.length; i++) {
    if (consMap[cons[i]]) {
      consMap[cons[i]]++;
    } else {
      consMap[cons[i]] = 1;
    }
  }

  const vowMax = Math.max(...Object.values(vowMap), 0);
  const consMax = Math.max(...Object.values(consMap), 0);

  max = (vowMax) + (consMax);
  return max;
};

console.log(maxFreqSum("successes"));
console.log(maxFreqSum("aeiuoeuao"));
