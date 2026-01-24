/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let start = 0, end = s.length - 1
    s = s.split("")
    while (start <= end) {
        if (
            (s[start].charCodeAt(0) >= 65 && s[start].charCodeAt(0) <= 90 ||
                s[start].charCodeAt(0) >= 97 && s[start].charCodeAt(0) <= 122)
            &&
            (s[end].charCodeAt(0) >= 65 && s[end].charCodeAt(0) <= 90 ||
                s[end].charCodeAt(0) >= 97 && s[end].charCodeAt(0) <= 122)
        ) {
            console.log(s[start], s[end])
            let t = s[start]
            s[start] = s[end]
            s[end] = t
            start++
            end--
        }
        else if (
            s[start].charCodeAt(0) < 65 ||
            (s[start].charCodeAt(0) > 90 && s[start].charCodeAt(0) < 97) ||
            s[start].charCodeAt(0) > 122
        ) {
            start++;
        }

        else if (
            s[end].charCodeAt(0) < 65 ||
            (s[end].charCodeAt(0) > 90 && s[end].charCodeAt(0) < 97) ||
            s[end].charCodeAt(0) > 122
        ) {
            end--;
        }

    }
    return s.join("")


};

//rules

/*
All the characters that are not english should not be included

 */