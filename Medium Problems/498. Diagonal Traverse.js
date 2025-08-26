/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    const m = mat.length, n = mat[0].length;
    const res = [];
    let upBool = true; 
    let row = col = 0; 
    
    while (res.length != m * n) {
        res.push(mat[row][col]);
        row++;
        col++;
    }
};

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// 1 2 3
// 4 5 6
// 7 8 9
