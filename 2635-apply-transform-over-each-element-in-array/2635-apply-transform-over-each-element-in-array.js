/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function(arr, fn) {
    
    let newArray = []
    let n = 0
    
    for (let i = 0; i < arr.length; i++) {
        n = fn(arr[i], i)
        newArray.push(n)
    }

    return newArray
    
};