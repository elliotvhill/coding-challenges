/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
    let n = nums.length
    let sortedNums = nums.toSorted()
    let i = 0

    while (i <= n) {
        if (sortedNums.includes(i)) { i++ }
        else {
            return i
        }
    }
}