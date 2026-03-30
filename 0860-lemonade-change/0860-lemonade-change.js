/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    if (bills.length === 1) return false
    let map = new Map()
    for (let i of bills) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        }
        else {
            map.set(i, 1)
        }
        if (i === 10) {
            if (map.get(5) < 1 || map.get(5) === undefined) {
                return false
            }
            map.set(5, map.get(5) - 1)
        }
        console.log(i)
        if (i === 20) {
            if (map.get(5) < 1 || map.get(5) === undefined) {
                return false
            }

            console.log("hello")
            if (map.get(10) === undefined || map.get(10) < 1) {
                if (map.get(5) < 3) {
                    return false
                }
            }
            if (map.get(5) >= 1 && map.get(10) >= 1) {
                map.set(5, map.get(5) - 1)
                map.set(10, map.get(10) - 1)
            }
            else if (map.get(5) >= 3) {
                map.set(5, map.get(5) - 3)
            }
        }
    }
    return true
};