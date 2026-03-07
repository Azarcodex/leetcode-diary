/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let arr = ["type", "color", "name"]
    let count = 0
    let idx = arr.indexOf(ruleKey)
    for (let item of items) {
        if (item[idx] === ruleValue) {
            count++
        }
    }
    return count
};

// type,color,name