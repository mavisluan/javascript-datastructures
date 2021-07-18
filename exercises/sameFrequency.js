/**
 * Frequency Counter - sameFrequency
 * Write a function call sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
 *
 * You solution MUST have the following complexities:
 * Time: O(N)
 *
 * sameFrequency(182, 281) // true
 * sameFrequency(34, 14) // false
 * sameFrequency(3589578, 5879385) // true
 * sameFrequency(22, 222) // false
 */
/**
 * Input: two positive integers
 * Output: Boolean
 *
 * digit && frequency are the same
 *
 * `3589578`, `5879385`
 * {3: 0, 5: 0, 7: 0, 8: 0, 9: 0}
 *
 * `5879385`  --> true
 *        ^
 *
 * `34`, `14`
 * {3: 1, 4: 1}
 *  `14`  --> false
 *   ^
 */
/**
 * convert nums to strings
 * init: dict = {num: frequency}
 *
 * iterate through nums1 string
 *  dict[num] = dict[num] + 1 || 1;
 *
 * iterate through nums2 string
 *  if (!dict[num]) return false;
 *  else dict[num] -= 1;
 *
 * return true;
 */
// Time: O(N) Space: O(N)
const sameFrequency = (nums1, nums2) => {
    nums1 = nums1.toString(); // `182`
    nums2 = nums2.toString(); // `281`

    const dict = {}; // {`1`: 0, `8`: 0, `2`: 0}
    for (let num of nums1) {
        dict[num]= dict[num] + 1 || 1;
    }

    for (let num of nums2) { // `281`: `2` -> `8` -> `1`
        if (!dict[num]) return false;
        else dict[num] -= 1;
    }
    return true;
}

console.log("should return true", sameFrequency(182, 281));
console.log("should return false", sameFrequency(22, 222));
console.log("should return false", sameFrequency(124, 324));

