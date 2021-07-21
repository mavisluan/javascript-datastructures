/**
 * Sliding window - maxSubarraySum
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function
 *
 * Note: A subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100,300] is not.
 *
 * maxSubarraySum([100, 200, 300, 400], 2) // 700
 * maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
 * maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
 * maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2) // 5
 * maxSubarraySum([2, 3], 3) // null
 */
/**
 * Q ans examples:
 * Input: nums[], num: length of subarray (consecutive)
 * Output: maxSum of subarray
 *
 * Edge:
 * nums.length < num -> return null
 *                   [          ] -> stop when end = nums.length -1
 * [1, 4, 2, 10, 23, 3, 1, 0, 20], 4
 *
 * start: 0     -> 1        -> 2        -> 3 -> 4 -> 5
 * end:   3     -> 4        -> 5        -> 6 -> 7 -> 8
 * sum: 0 -> 17 -> 17-1+23=39->39-4+3=38 -> 37-> 27 -> 24
 * maxSum: 0 -> 17 -> 39            39
 */
/**
 * Solution:
 * @param nums
 * @param len
 * @returns {null}
 * calculate first subarray's sum and update maxSum
 * let sum = 0; maxSum = 0
 * for (let i = 0; i < len; i++) {
 *     sum += nums[i];
 * }
 * maxSum = sum;
 * init: start = 1; end: len;
 * while (end < nums.length) {
 *     sum = sum - nums[start] + nums[end];
 *     maxSum = Math.max(sum, maxSum);
 *     start ++;
 *     end++;
 * }
 * return maxSum;
 */                                                         [  ]
const maxSubarraySum = (nums, len) => { // [-3, 4, 0, -2, 6, -1], 2
    if(nums.length < len) return null;
    let [sum, maxSum] = [0, 0]; // sum: 0 -> 1 -> 4 -> -2 -> 4-> 5
    for (let i = 0; i < len; i++) {
        sum += nums[i];
    }
    maxSum = sum; // maxSum: 0 -> 1 -> 4 -> 5

    let [start, end] = [1, len];
    while (end < nums.length) {
        sum = sum - nums[start-1] + nums[end];
        maxSum = Math.max(sum, maxSum);
        start++;
        end++;
    }
    return maxSum;
}

console.log("should return 700", maxSubarraySum([100, 200, 300, 400], 2))
