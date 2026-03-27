/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let map = new Map(), max = -Infinity, data

    for (let i of nums) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        }
        else {
            map.set(i, 1)
        }
    }
    for (let [key, val] of map) {
        if (val > max) {
            max = val
            data = key
        }
    }
    return data
};