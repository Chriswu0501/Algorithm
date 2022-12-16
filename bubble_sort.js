function bubbleSort(arr) {
    let count = 0;
    let flag = true;
    for (let i = 0; i < arr.length - 1 && flag; i++) {
        flag = false;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                flag = true;
            }
            count++;
        }
    }
    console.log(count);
    return arr;
}

function swap(arr, n1, n2) {
    let temp = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = temp;
}
let test = [];
for (let i = 0; i < 100; i++) {
    test.push(Math.floor(Math.random() * 100));
}

console.log(bubbleSort(test));
