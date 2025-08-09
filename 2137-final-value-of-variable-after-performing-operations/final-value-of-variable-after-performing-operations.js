/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let num = 0
    for(let operation of operations){
        if(operation.includes('++')){
             num ++
        }else{
             num --
        }
    }
    return num
};