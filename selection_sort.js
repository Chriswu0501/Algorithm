function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
    console.log(arr);
    return arr;
}

function swap(data, n1, n2) {
    let temp = data[n1];
    data[n1] = data[n2];
    data[n2] = temp;
}

selectionSort([3, 1, 2, 5, 4, 6, 8]);
