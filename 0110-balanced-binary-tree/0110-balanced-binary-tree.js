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
 * @return {boolean}
 */
var isBalanced = function (root) {
    function checkHeight(root) {
        if (root === null) return 0

        let leftTree = checkHeight(root.left)
        if (leftTree === -1) return -1

        let rightTree = checkHeight(root.right)
        if (rightTree === -1) return -1

        if (Math.abs(leftTree - rightTree) > 1) return -1


        return Math.max(leftTree, rightTree) + 1
    }
    return checkHeight(root) !== -1
};