/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return []

    let queue = [root]
    let result = []

    while (queue.length > 0) {
        let size = queue.length
        let curr = []
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            curr.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.unshift(curr)
    }
    return result
};