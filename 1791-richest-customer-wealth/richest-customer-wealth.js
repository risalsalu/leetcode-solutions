/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let result = 0;
    for(let customer of accounts){
        let total = customer.reduce((a,b)=>
        a+b
        ,0)
        result = Math.max(result,total)
    }
    return result
};