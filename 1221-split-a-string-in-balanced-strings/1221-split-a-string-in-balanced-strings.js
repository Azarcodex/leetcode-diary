/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let count = 0, track = 0

    for (let i of s) {
        if (i === 'R') {
            track++
        }
        else {
            track--
        }
        if (track === 0) {
            count++
        }
    }
    return count

};