function heapify(arr, i, n) {
    let largest = i;

    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (arr[largest] < left) {
        largest = left;
    }
    if (arr[largest] < right) {
        largest = right;
    }
    if (arr[largest] != i) {

    }
}
