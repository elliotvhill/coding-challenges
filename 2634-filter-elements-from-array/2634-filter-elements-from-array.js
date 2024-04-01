/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const filter = function(arr, fn) {
    let filteredArr = []
    for (let i = 0; i < arr.length; i++) {
        n = arr[i]
        fn(arr[i], i) ? filteredArr.push(n) : "Expression not truthy"
    }
        console.log(filteredArr)
        return filteredArr
};