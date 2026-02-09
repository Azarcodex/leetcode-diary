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
var isValidBST = function (root) {
    function Validate(root, min = -Infinity, max = Infinity) {
        if (root === null) return true

        if (root.val <= min || root.val >= max) {
            return false
        }

        let leftTree = Validate(root.left, min, root.val)
        let rightTree = Validate(root.right, root.val, max)

        return leftTree && rightTree
    }
    return Validate(root)
};