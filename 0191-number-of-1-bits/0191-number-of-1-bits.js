/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    const str = n.toString(2)
    let count = 0
    for (i=0; i < str.length; i++){
        if (str[i] === "1") count++;
    }
    return count
};