/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

/*
object


#
# Fatal error in , line 0
# Fatal JavaScript invalid size error 195652814 (see crbug.com/1201626)
#
#
#
#FailureMessage Object: 0x7ffcd9a9f530
----- Native stack trace -----

 1: 0xd491d1  [node]
 2: 0x2169281 V8_Fatal(char const*, ...) [node]
 3: 0x10cdb38  [node]
 4: 0x12ac81f  [node]
 5: 0x12ac9a7  [node]
 6: 0x1526326 v8::internal::Runtime_GrowArrayElements(int, unsigned long*, v8::internal::Isolate*) [node]
 7: 0x1971ef6  [node]
Trace/breakpoint trap (core dumped)
*/

var moveZeroes = function (nums) {
    console.log(typeof (nums))
    for (let i = 0; i < nums.length; i++) {
        let j = 0
        if (nums[i] != 0) {
            nums[i] = nums[j]
            j++
        }
        else {
            nums.push(nums[i])
            j++

        }
        j++


    }
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]