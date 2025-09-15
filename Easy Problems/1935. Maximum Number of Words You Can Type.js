/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
function canBeTypedWords(text, brokenLetters) {
  let splittedText = text.split(" ");    
  let count = 0;

  for (let i = 0; i < splittedText.length; i++) {
    let word = splittedText[i];
    let isBroken = false;
    for (let j = 0; j < brokenLetters.length; j++) {
      if (word.includes(brokenLetters[j])) {
        isBroken = true;
        break;
      }
    }
    if (!isBroken) {
      count++;
    }
  }
  return count;
};

let texts = "Can these letters be typed on the broken keyboard";
let brokenCharacters = "ao";
console.log(canBeTypedWords(texts, brokenCharacters));
