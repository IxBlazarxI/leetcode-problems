class Solution {
    public int areaOfMaxDiagonal(int[][] dimensions) {
        int n = dimensions.length;
        double  maxDiagonal = 0;
        int maxArea = 0;

        for (int i = 0; i < n; i++) {
            double diagonal = ((Math.pow(dimensions[i][0], 2)) + (Math.pow(dimensions[i][1], 2)));
            if (diagonal > maxDiagonal) {
                maxDiagonal = diagonal;
                maxArea = dimensions[i][0] * dimensions[i][1];
            } else if (diagonal == maxDiagonal) {
                maxArea = Math.max(maxArea, dimensions[i][0] * dimensions[i][1]);
            }
        }
        return maxArea;
    }
}
