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
        console.log(n)
        newArray.push(n)
    }

    return newArray
    
};

arr = [1, 2, 3]
fn = function plusone(n) { return n + 1 }
map(arr, fn)
fn = function plusI(n, i) { return n + i }
map(arr, fn)
fn = function constant() { return 42 }
map(arr, fn)