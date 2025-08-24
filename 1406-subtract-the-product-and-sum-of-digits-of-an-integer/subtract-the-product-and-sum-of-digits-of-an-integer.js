/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let digits = n.toString().split("").map(Number);
    let product = 1;
    let sum = 0;
    
    for(let digit of digits){
        product *= digit;
        sum += digit;
    }
    return product - sum;
};