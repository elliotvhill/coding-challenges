/**
 * @param {string} val
 * @return {Object}
 */
const expect = (val) => ({
    toBe: (val2) => {
        if (val !== val2) throw new Error('Not Equal')
        return true
    },
    notToBe: (val2) => {
        if (val === val2) throw new Error('Equal')
        return true
    }
});


expect(5).toBe(5); // true
expect(5).notToBe(5); // throws "Equal"
