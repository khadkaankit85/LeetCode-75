/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

*/
let a = [1, 2, 3]
var gcdOfStrings = function (str1, str2) {
    // lets create possible string
    let array1 = str1.split("")
    let array2 = str2.split("")
    let possibleSolution = array1.filter((a, i) => {
        if (array2.includes()) {
            console.log(a)
            return a
        }
    })
    console.log(possibleSolution)
};
gcdOfStrings("ABCABC", "ABC")