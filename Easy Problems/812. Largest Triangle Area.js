/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
  let max = 0;    
  let n = points.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        let area = 0.5 * Math.abs(points[i][0] * (points[j][1] - points[k][1]) + points[j][0] * (points[k][1] - points[i][1]) + points[k][0] * (points[i][1] - points[j][1]));
        if (max < area) {
          max = area;
        }
      }
    }
  }
  return max;
};
