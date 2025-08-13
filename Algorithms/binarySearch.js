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

function binarySearch(arr, target, low, high) {
    if (low > high) {
        return -1;
    } 
    let mid = Math.floor((high + low) / 2);
    if (arr[mid] == target) {
        return mid;
    } else if (target < arr[mid]) {
        return binarySearch(arr, target, low, mid - 1);
    } else {
        return binarySearch(arr, target, mid + 1, high);
    }
}

let arr = [4, 6, 23, 677, 43, 3, 7, 4434, 2, 1];
target = 677;

let sortedArray = quickSort(arr);
let index = binarySearch(sortedArray, target, 0, sortedArray.length - 1);

console.log(sortedArray);
console.log(index);

