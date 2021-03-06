/**
 * @param {number[]} nums
 * @return {boolean}
 * https://leetcode.com/problems/contains-duplicate/description/
 * Given an array of integers, find if the array contains any duplicates. 
 * Your function should return true if any value appears at least twice in the array, 
 * and it should return false if every element is distinct.
 * 
 * Fixed
 */
var containsDuplicate = function(nums) {
    var hash = {};
    const numsLength = nums.length;
    
    for(let i = 0; i < numsLength; i++){
        let currentNum = nums[i];
        if(hash[currentNum] !== undefined){ 
            return true;
        }
        hash[currentNum] = currentNum;
    }
    return false;
};