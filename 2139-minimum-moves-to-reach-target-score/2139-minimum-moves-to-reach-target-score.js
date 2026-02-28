/**
 * @param {number} target
 * @param {number} maxDoubles
 * @return {number}
 */
var minMoves = function (target, maxDoubles) {
    let count = 0

    while (target > 1 && maxDoubles > 0) {
        if (target % 2 === 0) {
            target = target / 2
            maxDoubles--
        }
        else {
            target--
        }
        count++
    }
    return target + count - 1
};