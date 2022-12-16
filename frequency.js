function sameFrequency(s1, s2) {
    let arr1 = s1.split("");
    let arr2 = s2.split("");

    if (arr1.length !== arr2.length) {
        return false;
    }

    let counter1 = {};

    for (let i = 0; i < arr1.length; i++) {
        if (!counter1[arr1[i]]) {
            counter1[arr1[i]] = 1;
        } else {
            counter1[arr1[i]]++;
        }
    }

    for (let j = 0; j < arr2.length; j++) {
        if (!counter1[arr2[j]]) {
            return false;
        } else {
            counter1[arr2[j]]--;
        }
    }

    for (let property in counter1) {
        if (counter1[property] !== 0) {
            return false;
        }
    }
    return true;
}

console.log(sameFrequency("aabc", "abbc"));
