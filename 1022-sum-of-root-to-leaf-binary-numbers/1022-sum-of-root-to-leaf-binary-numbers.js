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
 * @return {number}
 */
var sumRootToLeaf = function (root) {
    let sum = 0

    function sumOf(root, target = "") {
        if (root === null) return

        target = target + root.val

        if (root.left === null && root.right === null) {
            let binary = parseInt(target, 2)
            sum += binary
        }
        sumOf(root.left, target)
        sumOf(root.right, target)
    }
    sumOf(root)
    return sum
};