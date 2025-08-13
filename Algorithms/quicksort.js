function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];

    const less = [];
    const equal = [];
    const greater = [];

    for (const element of arr) {
        if (element < pivot) {
            less.push(element);
        } else if (element == pivot) {
            equal.push(element);
        } else {
            greater.push(element);
        }
    }
    return (quickSort(less).concat(equal, quickSort(greater)));
}

console.log(quickSort([89, 12, 694, 53, 54, 568]));

