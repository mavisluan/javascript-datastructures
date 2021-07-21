/**
 * Sliding Window - minSubArrayLen
 *
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 *
 * The function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
 *
 * minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> [4, 3]
 * minSubArrayLen([2,1, 6, 5, 4], 9) // 2 -> [5, 4]
 * minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> because 62 > 52
 * minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0
 *
 * Time: O(N) Space: O(1)
 */
/**
 * Input: nums[], target num
 * Output: num (minimal length)
 * Edge: return 0 if not found
 * contiguous subarray
 * sum >= target
 *              [  ]
 * [2, 3, 1, 2, 4, 3], 7
 *  2  5  6  8-> len: 4
 *     3  4  6   10 -> len: 4
 *        1  3  7 -> len: 3
 *           2  6  9 -> len: 3
 *              4  3 -> len: 2
 *
 * [2, 3, 1, 2, 4, 3], 7
 * [2, 5, 6, 8, 12, 15]
 *           7   3 --> len: index 5- 3 = 2
 *
 * [2, 1, 6, 5, 4], 9
 * [2, 3, 9, 14, 18]
 *        9   6  -> len: index 4 - 2 = 2
 *
 * [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52 -> check if num > target, return 1
 *  3  4 11  22 24  33 41 62 124
 *
 *  Solution1: Two loops (overwrite the current nums array)
 *  Time: O(N) Space: O(1)
 *      if nums[0] > target -> return 1
 *  iterate through the nums array (i = 1, i < nums.length)
 *      if nums[i] > target -> return 1
 *      else {
 *        nums[i]= nums[i-1] + nums[i];
 *      }
 *  iterate through the updated array with sum result
 *      j = nums.length -2; j-- j >= 0
 *      last = nums[nums.length -1];
 *      if (last - nums[j] >= target) return nums.length -1 - j;
 *  return 0
 */                                         // 0  1  2  3  4   5
const minSubArrayLen = (nums, target) => { // [2, 3, 1, 2, 4, 3], 7
    if (nums.length === 1) {
        return nums[0] >= target ? 1: 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) return 1;
        nums[i] =  (nums[i-1]!== undefined) ? nums[i] + nums[i-1]: nums[i];
    }
    const last = nums[nums.length -1];
    for (let j = nums.length -2; j >= 0; j --) {
        if ( last - nums[j] >= target) {
            return nums.length -1 -j;
        }
    }
    return 0;
}

/**
 * Solution2
 * control the calculation range with a sliding window
 * if (total < target) increase the window
 * else {
 *    update minLen
 *    decrease the window
 * }
 *
 *           0  1  2  3  4  5  6
 *          [2, 3, 1, 2, 4, 3],  7
 *                          s
 *                              e
 * total:0-> 2->5->6-> 8
 *              6     -> 10
                   7
                      6 --> 9
                          7
                             3
 * minLen: infinity->4 -> 3 -> 2
 * len:4-0=4 -> 5-1=4 -> 5-2=3 -> 6-3=3 -> 6-4
 *
 * init start, end pointers to control the size of the sliding window
 * (total = add up elements between start and end-1 )
 * init minLen = Infinity, total = 0;
 *
 * iterate through the nums array
 *  if total < sum && end < nums.length (increase the window)
 *      total += num[end]
 *      end ++
 *  else if total >= sum (shrink the window)
 *      calculate len and compare with minLen
 *      total -= num[start]
 *      start ++
 */
// Solution 2: open& close sliding window
// Time: O(N)  Space: O(1)
/**          0  1  2  3  4
 *          [2, 1, 6, 5, 4]
 *                       s
 *                          e
 * tot: 0-> 2 ->3-> 9 -> 7 -> 12 -> 11 -> 5 -> 9 -> 4
 *      <   <   <   =     <    >    >     <    =
 * tar: 9   9   9
 * len:           3-0=3      4-1  4-2        5-3
 * minLen: Infinity -> 3      3     2         2
 */
function minSubArrayLen2(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while (start < nums.length) {
        // if current window doesn't add up to the given sum then
        // move the window to right
        if(total < sum && end < nums.length){
            total += nums[end];
            end++;
        }
            // if current window adds up to at least the sum given then
        // we can shrink the window
        else if(total >= sum){
            minLen = Math.min(minLen, end-start);
            total -= nums[start];
            start++;
        }
        // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
        else {
            break;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}
console.log("should return 2", minSubArrayLen2([2, 3, 1, 2, 4, 3],  7))
console.log("should return 2", minSubArrayLen2([2,1, 6, 5, 4], 9))
console.log("should return 1", minSubArrayLen2([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
