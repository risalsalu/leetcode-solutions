/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(a, b) {
    let k = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b) {
            a[k] = a[i];
            k++;
        }
    }

    return k;
};
