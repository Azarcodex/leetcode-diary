/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function (s, k) {
    let res = ""

    for (let i = 0; i < s.length; i++) {
        let idx = (i + k) % s.length
        // console.log(idx)
        res += s[idx]
    }
    return res

};
// (i + k) % s.length