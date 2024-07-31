/*
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.


Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"

*/
var gcdOfStrings = function (str1, str2) {
    // largest string that divides both should always be less than or equal to the smaller string
    if (str1.length < str2.length) {
        return gcdOfStrings(str2, str1);
    }
    if (str2 === "") {
        return str1;
    }
    if (str1.startsWith(str2)) {
        return gcdOfStrings(str1.slice(str2.length), str2);
    }
    return "";
};

console.log(gcdOfStrings("ABCABC", ""))