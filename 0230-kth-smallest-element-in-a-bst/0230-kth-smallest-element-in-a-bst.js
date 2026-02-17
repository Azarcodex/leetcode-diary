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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    function traverse(root) {
        let res = []
        function inOrder(root) {
            if (root === null) return
            inOrder(root.left)
            res.push(root.val)
            inOrder(root.right)
        }
        inOrder(root)
        return res
    }
    let arr = traverse(root)
    return arr[k - 1]
};

