/**
 * Multiple Pointers - isSubsequence
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 *
 * Examples:
 * isSubsequence('hello', 'hello world') // true
 * isSubsequence('sing', 'sting') // true
 * isSubsequence('abc', 'abracadabra') // true
 * isSubsequence('abc', 'acb') // false (order matters)
 *
 * The solution must have at least
 * Time: O(N+M)   Space: O(1)
 */
/**
 * Question & Example:
 * check if str1's chars exist in str2 in the same order
 * Input: str1, str2
 * Output: Boolean
 *      |
 * 'sing'       'sting'
 *                    |
 *     |
 * 'abc', 'abracadabra'
 *             |
 */
/**
 * Solution:
 * Edge:
 *  Upper/Lower case
 *  Empty string
 *
 *  init pointer1, pointer2 = 0
 *  while (pointer1 < str1.length && pointer2 < str2.length) {
 *      if(str1[pointer1] === str2[pointer2]) {
 *          pointer1++;
 *          pointer2++;
 *      } else {
 *          pointer2++;
 *      }
 *  }
 *  return pointer1 === str1.length;
 */
// Time: O(M+N) Space: O(1)
const isSubsequence = (str1, str2) => { // 'abc', 'acb'
    if (str1.length === 0) return true;
    let [pointer1, pointer2] = [0, 0]; // p1: 0->1->2     p2:0->1->2->3
    while (pointer1 < str1.length && pointer2 < str2.length) { // char1: 'a'->b
        if (str1[pointer1].toLowerCase() === str2[pointer2].toLowerCase()) {  // char2:'a'->c ->b
            pointer1++;
        }
        pointer2++;
    }

    return pointer1 === str1.length;
}

console.log("should return false", isSubsequence('abc', 'acb'));
console.log("should return true", isSubsequence('sing', 'sting'))
