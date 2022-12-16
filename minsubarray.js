function minSubarray(arr, n) {
    let start = 0;
    let end = 0;
    let total = 0;
    let minL = Infinity;

    while (start < arr.length) {
        if (total < n && end < arr.length) {
            total += arr[end];
            end++;
        }
        while (total >= n) {
            let currL = end - start;
            if (currL < minL) {
                minL = currL;
            }
            total -= arr[start];
            start++;
        }
        if (end >= arr.length) {
            break;
        }
        console.log(start, end, total);
    }

    if (minL === Infinity) {
        return 0;
    } else {
        return minL;
    }
}

console.log(minSubarray([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 70));
