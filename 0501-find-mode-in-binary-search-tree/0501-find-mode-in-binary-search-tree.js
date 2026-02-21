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
 * @return {number[]}
 */
var findMode = function (root) {
    if (root === null) return []
    let arr = [], res = []
    let map = new Map()
    function Inorder(root) {
        if (root === null) return null
        Inorder(root.left)
        arr.push(root.val)
        Inorder(root.right)
    }
    Inorder(root)
    for (let i of arr) {
        if (map.has(i)) {
            map.set(i, map.get(i) + 1)
        }
        else {
            map.set(i, 1)
        }
    }
    let max = 0
    for (let i of map.values()) {
        max = Math.max(max, i)
    }
    for (let [key, val] of map) {
        if (val === max) {
            res.push(key)
        }
    }
    return res

};

/* 
1.Inorder traversal gives you sorted Array   
2.using map or object counting each
3.max count -> as resulting array
*/