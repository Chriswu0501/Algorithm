function isSubsequence(s1, s2) {
    if (s1.length == 0) {
        return true;
    }

    let p1 = 0;
    let p2 = 0;

    while (p2 < s2.length) {
        if (s1[p1] == s2[p2]) {
            p1++;
        }
        if (p1 >= s1.length) {
            return true;
        }
        p2++;
    }
    return false;
}

console.log(isSubsequence("", "bac"));
