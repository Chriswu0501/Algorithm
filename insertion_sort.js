function insertSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    console.log(arr);
    return arr;
}

insertSort([3, 1, 4, 5, 7, 6]);
