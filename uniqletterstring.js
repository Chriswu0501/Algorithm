function uniqueLetterString(s) {
    let start = 0;
    let end = 0;
    let counter = {};
    let maxL = -Infinity;

    while (end < s.length) {
        console.log(counter, start, end, maxL);
        if (counter[s[end]]) {
            counter[s[start]]--;
            start++;
        } else {
            counter[s[end]] = 1;
            end++;
            let currL = end - start;
            if (currL > maxL) {
                maxL = currL;
            }
        }
    }

    if (maxL === -Infinity) {
        return null;
    }
    return maxL;
}

console.log(uniqueLetterString(""));
