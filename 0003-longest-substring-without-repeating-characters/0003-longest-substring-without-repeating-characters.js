/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let track = 0
    let maxLen = 0

    let set = new Set()
    for (let i = 0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[track])
            track++
        }

        set.add(s[i])
        maxLen = Math.max(maxLen, i - track + 1)
    }
    return maxLen
};