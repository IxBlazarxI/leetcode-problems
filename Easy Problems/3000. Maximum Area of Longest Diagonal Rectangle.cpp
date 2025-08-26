class Solution {
public:
    int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {
        int maxDiagonal = 0;
        int maxArea = 0;

        for (int i = 0; i < dimensions.size(); i++) {
            int diagonal = pow(dimensions[i][0], 2) + pow(dimensions[i][1], 2);
            if (diagonal > maxDiagonal) {
                maxDiagonal = diagonal;
                maxArea = dimensions[i][0] * dimensions[i][1];
            } else if (diagonal == maxDiagonal) {
                maxArea = max(maxArea, dimensions[i][0] * dimensions[i][1]);
            }
        }
        return maxArea;
    }
};
