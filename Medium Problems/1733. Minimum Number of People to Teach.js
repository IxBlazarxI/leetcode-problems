/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function(n, languages, friendships) {
  let noFriends = new Set();

  for (let i = 0; i < friendships.length; i++) {
    console.log(friendships[i]);
  }

  for (let i = 0; i < n; i++) {

  }
};

let num = 3;
let lang = [[2], [1, 3], [1, 2], [3]];
let friends = [[1, 4], [1, 2], [3, 4], [2, 3]];

minimumTeachings(num, lang, friends);
