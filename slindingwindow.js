function maxSum(arr, size) {
    let maxValue = -Infinity;
    let temp = 0;
    if (size > arr.length) {
        return null;
    }

    for (let i = 0; i <= arr.length - size; i++) {
        if (i == 0) {
            for (let j = i; j < i + size; j++) {
                temp += arr[j];
            }
        } else {
            temp -= arr[i - 1];
            temp += arr[i + 2];
        }

        if (temp > maxValue) {
            maxValue = temp;
        }
    }
    return maxValue;
}

console.log(maxSum([2, 7, 3, 7, 25, 0, 6, 1, -5, 12, -11], 3));

function minSum(arr, size) {
    let minValue = Infinity;
    let temp = 0;
    if (size > arr.length) {
        return null;
    }

    for (let i = 0; i <= arr.length - size; i++) {
        if (i == 0) {
            for (let j = i; j < i + size; j++) {
                temp += arr[j];
            }
        } else {
            temp -= arr[i - 1];
            temp += arr[i + 2];
        }

        if (temp < minValue) {
            minValue = temp;
        }
    }
    return minValue;
}

console.log(minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3));
