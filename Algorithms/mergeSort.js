function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);

    let leftHalf = arr.slice(0, mid);
    let rightHalf = arr.slice(mid);

    leftHalf = mergeSort(leftHalf);
    rightHalf = mergeSort(rightHalf);

    return merge(leftHalf, rightHalf);
}

function merge(left, right) {
    let result = []
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }
    return result;
}

console.log(mergeSort([56, 32, 6646, 232, 5644, 423, 432, 31, 6, 3, 2, 1]));
