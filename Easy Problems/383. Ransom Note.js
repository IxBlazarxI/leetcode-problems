/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  let splittedRansome = ransomNote.split("");
  let splittedMagazine = magazine.split("");

  for (let i = 0; i < splittedRansome.length; i++) {
    if (splittedMagazine.indexOf(splittedRansome[i]) === -1) {
      return false;
    } else {
      splittedMagazine.splice(splittedMagazine.indexOf(splittedRansome[i]), 1);
    }
  }
  return true;
};

let rans = "aa";
let mag = "aab";

canConstruct(rans, mag);
