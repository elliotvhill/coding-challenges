//////////////////////////////////
// LEETCODE JAVASCRIPT PROBLEMS //
//////////////////////////////////


// 1672. Richest Customer Wealth - Easy - √

    // You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

    // A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

    // Example 1:

    // Input: accounts = [[1,2,3],[3,2,1]]
    // Output: 6
    // Explanation:
    // 1st customer has wealth = 1 + 2 + 3 = 6
    // 2nd customer has wealth = 3 + 2 + 1 = 6
    // Both customers are considered the richest with a wealth of 6 each, so return 6.
    // Example 2:

    // Input: accounts = [[1,5],[7,3],[3,5]]
    // Output: 10
    // Explanation:
    // 1st customer has wealth = 6
    // 2nd customer has wealth = 10
    // 3rd customer has wealth = 8
    // The 2nd customer is the richest with a wealth of 10.
    // Example 3:

    // Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
    // Output: 17


    // Constraints:
    // m == accounts.length
    // n == accounts[i].length
    // 1 <= m, n <= 50
    // 1 <= accounts[i][j] <= 100


    // let accounts = [[1, 5], [7, 3], [3, 5]]

//// SOLUTION: ////
    // const maximumWealth = function(accounts) {
    //     let sum = 0
    //     for (let i = 0; i < accounts.length; i++) {
    //         let account = accounts[i]
    //         let accSum = 0
    //         for (let i = 0; i < account.length; i++) {
    //             accSum += account[i]
    //             if (sum < accSum) {
    //                 sum = accSum
    //             }
    //         }
    //     }
    //     console.log(sum)
    //     return sum
    // };
    // maximumWealth(accounts)

//////////////////////////////

// 412. Fizz Buzz - Easy

    // Given an integer n, return a string array answer (1-indexed) where:

    // answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
    // answer[i] == "Fizz" if i is divisible by 3.
    // answer[i] == "Buzz" if i is divisible by 5.
    // answer[i] == i (as a string) if none of the above conditions are true.
    

    // Example 1:

    // Input: n = 3
    // Output: ["1","2","Fizz"]
    // Example 2:

    // Input: n = 5
    // Output: ["1","2","Fizz","4","Buzz"]
    // Example 3:

    // Input: n = 15
    // Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
    

    // Constraints:
    // 1 <= n <= 10^4


//// SOLUTION: ////
    // const fizzBuzz = function(n) {
        
    // };

    
//////////////////////////////

// 1. Two Sum - Easy

    // Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    // You may assume that each input would have exactly one solution, and you may not use the same element twice.

    // You can return the answer in any order.

    
    // Example 1:
    // Input: nums = [2,7,11,15], target = 9
    // Output: [0,1]
    // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

    // Example 2:
    // Input: nums = [3,2,4], target = 6
    // Output: [1,2]
    
    // Example 3:
    // Input: nums = [3,3], target = 6
    // Output: [0,1]
    

    // Constraints:
    // 2 <= nums.length <= 104
    // -109 <= nums[i] <= 109
    // -109 <= target <= 109
    // Only one valid answer exists.
    

    // Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
    
//// SOLUTION: ////
    // const twoSum = function(nums, target) {
    //     for (let i = 0; i < nums.length; i++){
    //         let missingNum = target - nums[i]
    //         if (nums.includes(missingNum)) {
    //             console.log('index of missingNum is: ', nums.indexOf(nums[i]))
    //         } else {
    //             return console.log('no match for target num in nums array')
    //         }
    //     }
    // }

    // twoSum([2,7,11,15], 9)
    // twoSum([2,11,15], 9)
    // twoSum([3,3], 6)




//////////////////////////////

// 268. Missing Number - Easy √
    // Given an array nums containing n distinct numbers in the range[0, n], return the only number in the range that is missing from the array.

const missingNumber = function (nums) {
    let n = nums.length
    let sortedNums = nums.toSorted()
    let i = 0

    while (i <= n) {
            
            if (sortedNums.includes(i)) { i++ }
            else {
                console.log(`num ${i} is missing`)
                return i
            }

        }
}

missingNumber([3,0,1,2])
missingNumber([3,0,1])
missingNumber([3])

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////

//////////////////////////////


