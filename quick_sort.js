let arr = [15, 3, 6, 7, 2, 1, 8, 4, 10, 9, 5, 56, 44, 22];

quickSort(0, arr.length);
console.log(arr);

function partition(p, r) {
    let pivot = arr[r - 1];
    let point = p - 1;

    for (let i = p; i < r; i++) {
        if (arr[i] <= pivot) {
            point++;
            
            let temp = arr[i];
            arr[i] = arr[point];
            arr[point] = temp;
        }
    }

    return point;
}

function quickSort(p, r) {
    if (p < r) {
        let q = partition(p, r);
        quickSort(p, q);
        quickSort(q + 1, r);
    }
}

// quickSort(0, arr.length - 1);
// console.log(arr);

// function partition(p, r) {
//     let pivot = arr[r];
//     let point = p - 1;

//     for (let i = p; i < r; i++) {
//         if (arr[i] <= pivot) {
//             point++;
            
//             let temp = arr[i];
//             arr[i] = arr[point];
//             arr[point] = temp;
//         }
//     }

//     let temp = arr[r];
//     arr[r] = arr[point + 1];
//     arr[point + 1] = temp;

//     return point + 1;
// }

// function quickSort(p, r) {
//     if (p < r) {
//         let q = partition(p, r);
//         quickSort(p, q - 1);
//         quickSort(q + 1, r);
//     }
// }
