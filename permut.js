let result = [];

function permut(arr, start) {
    if (start >= arr.length) {
        result.push([...arr]);
    } else {
        for (let i = start; i < arr.length; i++) {
            swap(arr, start, i);
            permut(arr, start + 1);
            swap(arr, start, i);
        }
    }
}

function swap(arr, n1, n2) {
    let temp = arr[n2];
    arr[n2] = arr[n1];
    arr[n1] = temp;
}

permut(["A", "B", "C"], 0);
console.log(result);
