/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

class MinHeapx {
    constructor() {
        this.heap = []
    }

    insert(elm) {
        this.heap.push(elm)
        this.HeapifyUp()
    }
    HeapifyUp() {
        let length = this.heap.length - 1

        while (length > 0) {
            let parent = Math.floor((length - 1) / 2)
            if (this.heap[parent][1] > this.heap[length][1]) {
                this.swap(length, parent)
                length = parent
            }
            else {
                break
            }
        }
    }
    remove() {
        if (this.heap.length === 1) return this.heap.pop()
        let top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.HeapifyDown(0)
        return top
    }
    HeapifyDown(index) {
        let smallest = index
        let length = this.heap.length
        let left = 2 * index + 1
        let right = 2 * index + 2

        if (left < length && this.heap[left][1] < this.heap[smallest][1]) {
            smallest = left
        }
        if (right < length && this.heap[right][1] < this.heap[smallest][1]) {
            smallest = right
        }
        if (smallest !== index) {
            this.swap(index, smallest)
            this.HeapifyDown(smallest)
        }
    }
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    size() {
        return this.heap.length
    }
}
var topKFrequent = function (nums, k) {
    let object = {}
    let heap = new MinHeapx()
    for (let num of nums) {
        object[num] = (object[num] || 0) + 1
    }

    for (let num in object) {
        heap.insert([Number(num), object[num]])

        if (heap.size() > k) {
            heap.remove()
        }
    }
    console.log(heap)
    let result = []
    while (heap.size() > 0) {
        result.push(heap.remove()[0])
    }
    return result

};

