/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let stringNum = num.toString();
    let searchTerm = "6";
    let indexOfFirst = stringNum.indexOf(searchTerm);
    let numArr = stringNum.split('');
        if (numArr[indexOfFirst] == "6") {
            numArr[indexOfFirst] = "9"; 
        }
    let finalNum = numArr.join('');
    let result = parseInt(finalNum);
    return result;
};

let num = 99999699966669;
console.log(maximum69Number(num));
