// LC 2626 -- S: O(n), T: O(1)
// n is the number of elements in the nums array


/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
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
};

nums = [1,7,3,4]
fn = function sum(accum, curr) { return accum + curr; }
init = 0 // Output: 10
reduce(nums, fn, init)

nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr * curr; }
init = 100 // Output: 130
reduce(nums, fn, init)

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
