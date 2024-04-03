/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    let trimmedStr = s.trim()
    if (trimmedStr.includes(' ')) { 
        let sArray = trimmedStr.split(' ') 
        for (let i = 0; i < sArray.length; i++) {
            if (sArray[i].length < 1) {
                sArray.pop()
                return sArray[sArray.length-1].length
            } else {
                return sArray.pop().length
            }
        }
    } else { 
        return trimmedStr.length
    }
}