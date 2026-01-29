/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let res = [], k = 0, pos = 1
    let sorted = [...score].sort((a, b) => b - a)

    while (k < score.length) {
        for (let i = 0; i < score.length; i++) {
            if (score[i] === sorted[k]) {
                score[i] = k === 0 ? "Gold Medal" : k === 1 ? "Silver Medal" : k === 2 ? "Bronze Medal" : String(pos)
                k++
                pos++
            }
        }
    }
    return score

};