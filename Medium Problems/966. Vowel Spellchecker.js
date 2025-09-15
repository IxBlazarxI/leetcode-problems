var spellchecker = function(wordlist, queries) {
  const exact = new Set(wordlist);
  const lowerMap = new Map();
  const vowelMap = new Map();
  let result = [];

  for (const word of wordlist) {
    const lower = word.toLowerCase(); 
    const v = word.toLowerCase().replace(/[aeiou]/g,"*")
    if (!lowerMap.has(lower)) {
      lowerMap.set(lower, word);
    }
    if (!vowelMap.has(v)) {
      vowelMap.set(v, word);
    }
  } 
//  console.log(lowerMap);
//  console.log(vowelMap);

  for (let i = 0; i < queries.length; i++) {
    const lower = queries[i].toLowerCase();
    const vowel = queries[i].toLowerCase().replace(/[aeiou]/g,"*");
    if (exact.has(queries[i])) {
      result.push(queries[i]);
      continue;
    }
    if (lowerMap.has(lower)) {
      result.push(lowerMap.get(lower));
      continue;
    }
    if (vowelMap.has(vowel)) {
      result.push(vowelMap.get(vowel));
      continue;
    }
    result.push("");
  }
  return result;
}
