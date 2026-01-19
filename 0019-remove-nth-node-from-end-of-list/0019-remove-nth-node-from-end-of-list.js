/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head.next === null && n === 1) {
        return null
    }
    let start = head, count = 0
    while (start !== null) {
        start = start.next
        count++
    }
    let del_pos = count - n
    let curr = head, current = 0

    if (del_pos === 0) {
        return head.next
    }

    while (curr !== null && current < del_pos - 1) {
        curr = curr.next
        current++
    }
    curr.next = curr.next.next

    return head
};