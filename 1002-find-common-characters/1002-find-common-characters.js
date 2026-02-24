/**
 * @param {string[]} words
 * @return {string[]}
 */


var commonChars = function (words) {
    let obj = {}
    let res = []

    for (let i = 0; i < words.length; i++) {
        let x = words[i]
        obj = {}
        for (let j = 0; j < x.length; j++) {
            obj[x[j]] = (obj[x[j]] || 0) + 1
        }
        res.push(obj)
    }
    console.log(res)
    return commonLetters(res)

};
function commonLetters(arr) {
    if (!arr.length) return [];

    return Object.keys(arr[0])
        .filter(key => arr.every(obj => key in obj))
        .flatMap(key => {
            const min = Math.min(...arr.map(obj => obj[key]));
            return Array(min).fill(key);
        });
}