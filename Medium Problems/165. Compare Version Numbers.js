/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
  if (version1 == version2) {
    return 0;
  }    

  let v1 = version1.split('.'); 
  let v2 = version2.split('.');
  let len = Math.max(v1.length, v2.length);
  for (let i = 0; i < len; i++) {
    let n1 = v1[i] ? parseInt(v1[i]) : 0;
    console.log(n1);
    let n2 = v2[i] ? parseInt(v2[i]) : 0;
    if (n1 > n2) {
      return 1;
    } else if (n1 < n2) {
      return -1;
    }
  }
  return 0;
};
