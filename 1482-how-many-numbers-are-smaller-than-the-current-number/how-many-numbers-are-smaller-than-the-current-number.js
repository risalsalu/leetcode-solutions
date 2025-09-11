/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let result = [...nums].sort((a,b)=> a-b)
    return nums.map(a => result.indexOf(a))
};