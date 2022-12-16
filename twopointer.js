function avgPair(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    let result = [];
    while (left < right) {
        let avg = (arr[left] + arr[right]) / 2;
        if (avg > n) {
            right--;
        } else if (avg < n) {
            left++;
        } else {
            result.push([arr[left], arr[right]]);
            left++;
            right--;
        }
    }
    return result;
}

console.log(avgPair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5));
