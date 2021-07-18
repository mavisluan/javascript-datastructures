/**
 * countUniqueValues
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
 *
 * Input: [1, 1, 1, 1, 1, 2]   Output: 2
 * Input [1,2,3,4,4,4,7,7,12,12, 13]    Output:  7
 * Input: []   Output: 0
 * Input: [-2, -1, -1, 0, 1]   Output: 4
 *
 * Input: sorted array of nums
 * Output: count of the unique nums in the array
 * \
 * [1, 1, 1, 1, 1, 2]
 *                  /
 * counter: 1 + 1 = 2
 *                        \
 * [1,2,3,4,4,4,7,7,12,12,13]
 *                           /  stop when either L or R >= nums.length
 * counter: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7
 * init L = 0; R = 1
 * if nums[L] !== nums[R] -> increase counter, mv L to R, R ++
 * else --> R ++
 *
 * [] --> 0
 * [1] --> 1
 * Edge: nums.length <= 1 --> return nums.length
 *
 * Solution:
 * check edge: nums.length <= 1 --> return nums.length
 * init L = 0; R = 1; counter = 1;
 * while (L < nums.length && R < nums.length) {
 *     if (nums[L] !== nums[R]) {
 *         counter ++;
 *         L = R;
 *         R ++;
 *     } else {
 *         R ++;
 *     }
 * }
 *
 * return counter
 */
/*                 L
  [-2, -1, -1, 0, 1]
                    R
*/
// Time: O(N) Space: O(1)
// Two pointers and one counter variable
const countUniqueValues = (nums) => {
    if (nums.length <= 1) return nums.length;

    let [left, right, counter ] = [0, 1, 1];
    while ( right < nums.length) {
        if (nums[left] !== nums[right]) {
            counter ++; // counter: 1 -> 2 -> 3 -> 4
            left = right;
            right ++;
        } else {
            right ++;
        }
    }

    return counter;
}

console.log("should return 4", countUniqueValues([-2, -1, -1, 0, 1]))
console.log("should return 7", countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log("should return 0", countUniqueValues([]))
console.log("should return 1", countUniqueValues([9]))

/**              L
 * [1,2,3,4,7,12,13,7,12,12,13]
 *                           R
 * Solution:
 * Use two pointers to check if the values are the same
 * Update left value with the right value to collect all the unique values on the left of L pointer
 * When R reach the end of the array, return L + 1 (because L is the index based on 0)
 * L: 0
 * R: 1
 * While R < nums.length
 *      if (nums[L] === nums[R]) R ++
 *      else {
 *          L ++
 *          nums[L] = nums[R];
 *          R++
 *      }
 * return L + 1
 */
// Time: O(N) Space: O(1)
function countUniqueValues2(nums){
    if (nums.length <= 1) return nums.length;

    let [i, j] = [0, 1];
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            i ++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i + 1;
}
