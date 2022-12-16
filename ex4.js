function arrayPush(n) {
    let arr = [1, 3, 5, 6, 8];
    for (let i = 0; i < n; i++) {
        arr.push(10);
    }
}

arrayPush(100);

function arrayUnshift(n) {
    let arr = [1, 3, 5, 6, 8];
    for (let i = 0; i < n; i++) {
        arr.unshift(10);
    }
}

arrayUnshift(100);
