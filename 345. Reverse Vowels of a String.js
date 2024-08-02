/**
 Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.


Example 1:

Input: s = "hello"
Output: "holle"
 */

var reverseVowels = function (s) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let vowelsInS = s.split("").filter((letter, index) => {
        if (vowels.includes(letter)) {
            return letter
        }
    })



    let reversedVowelLetter = s.split("").map((letter, index) => {
        if (vowels.includes(letter)) {
            letter = vowelsInS.pop()
        }
        return letter
    })

    return (reversedVowelLetter.join(""))


};
reverseVowels("hAlla")