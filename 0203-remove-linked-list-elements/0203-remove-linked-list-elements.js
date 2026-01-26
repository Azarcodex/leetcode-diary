/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (head === null) return head

    let dummy = new ListNode(-1)
    dummy.next = head
    let start = dummy
    let prev = dummy
    while (start !== null) {
        if (start.val === val) {
            prev.next = start.next
            start = prev
        }
        prev = start
        start = start.next
    }
    return dummy.next

};