/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let str = ""

    while (head !== null) {
        str += head.val
        head = head.next
    }
    let rev = str.split("").reverse().join("")

    if (str === rev) {
        return true
    }
    return false
};