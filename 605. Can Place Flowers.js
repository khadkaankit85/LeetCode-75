/*
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.


Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
*/


var canPlaceFlowers = function (flowerbed, n) {
    let count = 0; // Count of flowers that can be planted
    let length = flowerbed.length;

    for (let i = 0; i < length; i++) {
        // Check if current plot is empty and adjacent plots are also empty or boundaries
        if (flowerbed[i] === 0 &&
            (i === 0 || flowerbed[i - 1] === 0) &&
            (i === length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1; // Plant a flower here
            count++; // Increment the count of planted flowers
            i++; // Skip the next plot to maintain no-adjacent-flowers rule
        }
    }

    return count >= n; // Check if we have planted enough flowers
};

// Example usage
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1)); // Output: true