/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var winningPlayer = function (x, y) {
    let target = 115
    let count = 0
    while (x >= 1 && y >= 4) {
        count++
        x -= 1
        y -= 4
    }
    return count % 2 === 0 ? "Bob" : "Alice"
};


/*
 No of coins 75 is 2
 No of coins 10 is 7

 Alice will always start
 */







