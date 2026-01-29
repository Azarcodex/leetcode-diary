/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let obj = {}
    let len = score.length
    let sorted = [...score].sort((a, b) => b - a)
    let medals = ["Gold Medal", "Silver Medal", "Bronze Medal"]
    for (let i = 0; i < len; i++) {
        if (i < 3) {
            obj[sorted[i]] = medals[i]
        }
        else {
            obj[sorted[i]] = (i + 1).toString()
        }
    }
    let res = []

    for (let i = 0; i < len; i++) {
        res.push(obj[score[i]])
    }
    return res
};