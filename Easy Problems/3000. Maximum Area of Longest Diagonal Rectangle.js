/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    let maxDiagonal = 0;
    let maxArea = 0;
    for (i = 0; i < dimensions.length; i++) {
        let diagonal = Math.sqrt((dimensions[i][0] * dimensions[i][0] + dimensions[i][1] * dimensions[i][1]));
        if (diagonal > maxDiagonal) {
            maxDiagonal = diagonal;
            maxArea = dimensions[i][0] * dimensions[i][1];
        } else if (diagonal === maxDiagonal) {
            maxArea = Math.max(maxArea, dimensions[i][0] * dimensions[i][1]);
        }
    }     
    return maxArea;
};
