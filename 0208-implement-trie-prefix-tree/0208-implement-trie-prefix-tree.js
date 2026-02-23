var TrieNode = function () {
    this.children = {}
    this.endOfword = false
}
var Trie = function () {
    this.root = new TrieNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
    let current = this.root

    for (let i of word) {
        if (!current.children[i]) {
            current.children[i] = new TrieNode()
        }
        current = current.children[i]
    }
    current.endOfword = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
    let current = this.root
    for (let i of word) {
        if (!current.children[i]) return false
        current = current.children[i]
    }
    return current.endOfword
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
    let current = this.root
    for (let i of prefix) {
        if (!current.children[i]) return false
        current = current.children[i]
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */