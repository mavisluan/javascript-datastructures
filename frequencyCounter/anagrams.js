/**
 * Give two strings, write a function to determine if the second string is the anagram of the first
 * An anagram is a word, phrase or name formed by rearranging the letters of another, such as
 * cinema, formed from iceman
 *
 * Input: "", ""   Output: true
 * Input: "aaz", "zza"  Output: false;
 * Input: "rat", "car"   Output: false
 * Input: "awesome", "awesom"  Output: false
 * Input: "qwerty", "qeywrt"   Output: true
 */
/**
 * Input: str1, str2
 * Output: Boolean
 *
 * examples:
 *  * Input: "rat", "car"   Output: false
 * Input: "awesome", "awesom"  Output: false ---> not the same length ---> return false
 * Input: console.log("should return true", validAnagram("", ""))
 Output: true
 * {q:0, w:, e:0, r:0, t:0, y:0}
 * "qeywrt"
 *       ^
 * Solution;
 * Edge: if str1.length !== str2.length return false;
 *       if !str1,length && !str2.length return true;
 *       init dict
 *       iterate through str1
 *          count and collect character's frequency into dict
 *       iterate through str2
 *          if char2 not in dict --> return false
 *          dict[char2] --
 *       return true
 */
// Time: O(N) Space: O(N)
const validAnagram = (str1, str2) => {  // "somehow", "sometow"
    if (str1.length !== str2.length) return false;
    if (!str1.length && !str2.length) return true;

    const dict = {};  // {s: 0, o:1, m: 0, e: 0, h: 1, w: 1} // space: O(N)
    for (let char of str1) {
        dict[char] = dict[char] + 1 || 1;
    }

    for (let char of str2) { // "tow"
        if (!dict[char]) return false;
        dict[char] -= 1;
    }
    return true;
}

console.log("should return false", validAnagram("somehow", "sometow"))
console.log("should return false", validAnagram("awesome", "awesom"))
console.log("should return true", validAnagram("", ""))
console.log("should return true", validAnagram("qwerty", "qeywrt"))

