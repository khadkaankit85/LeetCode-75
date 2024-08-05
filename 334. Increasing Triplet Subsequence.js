/*
Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

Example 1:

Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.
*/

var increasingTriplet = function (nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num; // smallest so far
        } else if (num <= second) {
            second = num; // second smallest so far
        } else {
            // if we find a number larger than both first and second, we have our triplet
            return true;
        }
    }

    return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); // Output: true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // Output: false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // Output: true
