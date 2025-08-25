/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementsum = 0;
    let digitsum = 0;
    for (let i=0; i<nums.length ; i++){
        elementsum += nums[i]
    let digits = nums[i].toString().split("");
    for(let d of digits){
        digitsum += parseInt(d)
    }
    }
    return Math.abs(elementsum - digitsum);

};