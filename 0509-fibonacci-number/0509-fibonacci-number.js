/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if(n===0) return 0
    if (n <= 1) return 1

    let start = 0
    let sec = 1

    for (let i = 2; i <= n; i++) {
        let curr = start + sec
        start = sec
        sec = curr
    }
    return sec
};

