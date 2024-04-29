// LC 2677 - Chunk Array -- S: O(), T: O()

/*
Nice work so far!

I would think about this problem in two parts:

(1) How do I create one of the chunks?
const createOneChunk = function (arr, size, startIndex) {}
// If start_index is out of bounds, return an empty array
// Otherwise return a new non-empty array of the chuck of elements starting at startIndex
// Note that the new array may have a length less than `size`

(2) How do I use (1) to create the final chunked array output?
const chunk = function (arr, size) {}
// initialize a startIndex at 0 and an outputArray
// while I still have more chucks to add to the outputArray
//    create a chunk (use createOneChunk),
//    add it to outputArray,
//    and update startIndex
*/

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
const chunk = function (arr, size) {
    let newArr = Array(arr)
    if (arr.length < 1) { // return empty array
        return console.log((arr = []))

    } else if (arr.length <= size) { // return all values in new subarray at arr[0]
        return console.log(newArr)
        
    } else if (arr.length > size) { // is arr.length > size?
        for (let i = 0; i < arr.length; i++) {
            console.log(newArr)
            newArr.push(arr[i])
            return console.log(newArr)
        }
        // console.log(
            //     `Array length is: ${arr.length}. Size is: ${size}. The total number of subarrays is: ${totalSubArrays}, the number of even subArrays is: ${subArrays}, and the last sub array size is: ${lastSubArrSize}`
            // )
            // let numberOfEvenArrays = null
            // let lastSubArrSize = arr.length % size
            // let totalSubArrays = Math.ceil(arr.length / size)
            // let subArrays = Math.floor(arr.length / size)
    }
}

// chunk([], 1) // Output: []
// chunk([1, 2, 3, 4, 5], 1) // Output: [[1],[2],[3],[4],[5]]
chunk([1, 9, 6, 3, 2], 3) // Output: [[1,9,6],[3,2]]
// chunk([1, 9], 3) // Output: [[1,9]]




///////////////////////////////

// LC 2727 - Is Object Empty -- S: O(1), T: O(n)

// /**
//  * @param {Object|Array} obj
//  * @return {boolean}
//  */
// const isEmpty = function(obj) {
//     // if (Array.isArray(obj) === true) {
//     //     console.log(obj.length === 0 ? true : false)
//     // }
//     return (console.log(Object.keys(obj).length < 1))
// };

// obj = { "x": 5, "y": 42 } // false
// isEmpty(obj)
// obj = {} // true
// isEmpty(obj)
// obj = [null, false, 0] // false
// isEmpty(obj)

////////////////////////////////

// LC 2619 - Array Prototype Last -- S: O(1), T: O(1)

// /**
//  * @return {null|boolean|number|string|Array|Object}
//  */
// Array.prototype.last = function() {
//     return (this.length === 0 ? console.log(-1) : console.log(this[this.length - 1]))
// };

// const arr = [1, 2, 3];
// const nums = [null, {}, 3]
// arr.last(); // 3
// nums.last(); // 3

//////////////////////////////////

// LC 2666 - Allow One Function Call -- S: O(), T: O()

// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// const once = function(fn) {
//     return function (...args) {
//         for (let i = 0; i <= 0; i++) {
//             if (i === 0) {
//                 return console.log(fn(...args))
//             } else {
//                 return undefined
//             }
//         }
//     }
// };

// let fn = (a, b, c) => (a + b + c)
// calls = [[1,2,3],[2,3,6]]
// let onceFn = once(fn)
// onceFn(1,2,3); // 6
// onceFn(2,3,6); // returns undefined without calling fn

//////////////////////////////////

// LC 2703 - Return Length of Arguments Passed -- S: O(1), T: O(1)

// /**
//  * @param {...(null|boolean|number|string|Array|Object)} args
//  * @return {number}
//  */
// const argumentsLength = function(...args) {
//     return args.length
// };

// argumentsLength(1, 2, 3); // 3
// argumentsLength([{}, null, "3"])

//////////////////////////////////

// LC 2629 - Function Composition -- S: O(n), T: O(n)

// /**
//  * @param {Function[]} functions
//  * @return {Function}
//  */
// const compose = function (functions) {
//     return function (x) {
//         if (functions.length === 0) {
//             return x
//         }
//         return functions.reduceRight((acc, fn) => fn(acc), x)
//     }
// }

// OR
// const compose = function(functions) {
//     return function(x) {
//         if (functions.length === 0) return x
//         let input = x

//         for (let i = functions.length - 1; i >= 0; i--){
//             const currentFunction = functions[i]
//             input = currentFunction(input)
//         }
//         return input
//     }
// };

// const fn = compose([(x) => x + 1, (x) => 2 * x])
//  fn(4) // returns 9

// Test cases:
// functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x], (x = 4) // Output: 65
// console.log(fn(4))
// functions = []
// console.log(fn(42))

//////////////////////

// LC 2626 -- S: O(n), T: O(1)
// n is the number of elements in the nums array

// /**
//  * @param {number[]} nums
//  * @param {Function} fn
//  * @param {number} init
//  * @return {number}
//  */
const reduce = function (nums, fn, init) {
    let val = init
    console.log(nums)
    if (nums.length === 0) {
        console.log(init)
        return init
    } else {
        for (let i = 0; i < nums.length; i++) {
            val = fn(val, nums[i])
            console.log(`Val is now ${val}`)
        }
    }
    return val
}

// nums = [1,7,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0 // Output: 10
// reduce(nums, fn, init)

// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100 // Output: 130
// reduce(nums, fn, init)

// ** USING REDUCE METHOD: //
// const val = nums.reduce((accum, curr) => accum + curr, init)
// console.log(val)

///////////////////////////

// LC 0058 -- S: O(n), T: O(n)

// /**
//  * @param {string} s
//  * @return {number}
//  */

// TRIM whitespace from beginning and end of string √
// SPLIT string into new array √
// POP last index of array and RETURN length √

// const lengthOfLastWord = function (s) {
//     let trimmedStr = s.trim()
//     console.log(trimmedStr)
//     if (trimmedStr.includes(' ')) { // if s is more than 1 word
//         let sArray = trimmedStr.split(' ') // create array from s
//         for (let i = 0; i < sArray.length; i++) {
//             if (sArray[i].length < 1) {
//                 sArray.pop()
//                 return sArray[sArray.length-1].length
//             } else {
//                 console.log(sArray.pop().length)
//                 return sArray.pop().length
//             }
//         }
//     } else { // s is only 1 word
//         console.log(trimmedStr.length)
//         return trimmedStr.length
//     }
// }

// s = 'Hello World'
// lengthOfLastWord(s)
// s = 'a '
// lengthOfLastWord(s)
// s = '   fly me   to   the moon  '
// lengthOfLastWord(s)

///////////////////////////

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// const filter = function(arr, fn) {
//     let filteredArr = []

//     for (let i = 0; i < arr.length; i++) {
//         n = arr[i]
//         fn(arr[i], i) ? filteredArr.push(n) : "Expression not truthy"
//     }
//         console.log(filteredArr)
//         return filteredArr
// };

// // arr = [0, 10, 20, 30], fn = function greaterThan10(n) { return n > 10; }
// // arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// arr = [-2, -1, 0, 1, 2], fn = function plusOne(n) { return n + 1 }

// filter(arr, fn)
