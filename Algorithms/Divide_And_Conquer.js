function divide_and_conquer(arr, high, low) {
    // Base case 
    if (low === high) {
        return { max: arr[low], min: arr[low] };
    }
    
    // If there are only two elements 
    if (arr[low] > arr[high]) {
        return { max: arr[low], min: arr[high]}
    } else {
        return { max: arr[high], min: arr[low]}
    }

    // General case
    
}
