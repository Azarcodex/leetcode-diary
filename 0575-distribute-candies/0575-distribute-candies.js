/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
    // let map = new Map()
    let max = candyType.length / 2
    // for (let i of candyType) {
    //     if (map.has(i)) {
    //         map.set(i, map.get(i) + 1)
    //     }
    //     else {
    //         map.set(i, 1)
    //     }
    // }

    // if (max >= map.size) {
    //     return map.size
    // }
    // else {
    //     return max
    // }

    let set = [...new Set(candyType)]
    if (max >= set.length) {
        return set.length
    }
    else {
        return max
    }
};

/*
notes:
n is also even
alice is allowed only to eat n/2 and it should be maximum
 */