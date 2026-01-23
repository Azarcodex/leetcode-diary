/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let res = [[]]

    for (let i of nums) {
        let size = res.length
        for (let j = 0; j < size; j++) {
            res.push([...res[j], i])
        }
    }
   return res
};