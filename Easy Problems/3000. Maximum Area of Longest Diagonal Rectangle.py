class Solution(object):
    def areaOfMaxDiagonal(self, dimensions):
        """
        :type dimensions: List[List[int]]
        :rtype: int
        """
        maxDiagonal = 0
        maxArea = 0
        for i in range(len(dimensions)):
            diagonal = dimensions[i][0] ** 2 + dimensions[i][1] ** 2
            if diagonal > maxDiagonal:
                maxDiagonal = diagonal
                maxArea = dimensions[i][0] * dimensions[i][1]
            elif diagonal == maxDiagonal:
                maxArea = max(maxArea, dimensions[i][0] * dimensions[i][1])
        return maxArea
