function merge(a1, a2) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < a1.length &&  j < a2.length) {
        if (a1[i] > a2[j]) {
            result.push(a2[j]);
            j++;
        } else {
            result.push(a1[i]);
            i++;
        }
    }

    while (i < a1.length) {
        result.push(a1[i]);
        i++;
    }

    while (j < a2.length) {
        result.push(a2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    } else {
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid, arr.length);
        return merge(mergeSort(left), mergeSort(right));
    }
}

console.log(mergeSort([5, 3, 8, 7, 2, 1, 4, 9, 6, -1, 0, -5]));