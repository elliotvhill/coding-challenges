/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
   let sum = 0
   for (let i = 0; i < accounts.length; i++) {
        let account = accounts[i]
        let accSum = 0
        for (let i = 0; i < account.length; i++) {
            accSum += account[i]
            if (sum < accSum) {
                sum = accSum
             }
        }
     }
    return sum
};