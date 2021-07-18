/**
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array
 *
 * Input: [1,2,5,2,8,1,5], 2
 * Output: 10
 * Input: [1,2,5,2,8,1,5], 4
 * Output: 17
 * Input: [4,2,1,6], 1
 * Output: 6
 * Input: [4,2,1,6,2], 4
 * Output: 13
 * Input: [], 4
 * Output: null
 */

/**
 * Edge:
 * if nums.length === 0 return null
 * if nums.length === 1 return nums[0]
 *            [ ]
 * [1,2,5,2,8,1,5], 2 (window size)
 * sum: 0-> 1+2=3 -> 7 -> 9 -> 6
 * maxSum: 0 -> 3 -> 7 -> 9
 * L: 0 -> 1 -> 2 -> 3 -> 4
 * R: 1 ->2 -> 3 -> 4 -> 5  (stop at R to the end)
 *
 *         [     ]
 *  [1,2,5,2,8,1,5], 4 (window size)
 * sum: 0 ->10 -> 17 -> 16 -> 16
 * maxSum: 0 -> 10 -> 17
 * L: 0 -> 1 -> 2 -> 3
 * R: 3 -> 4 -> 5 -> 6(stop at R to the end)
 *
 * Input: nums[] (NOT sorted), n (count of consecutive elements to add)
 * Output: max sum of the consecutive elements to add
 * Solution:
 * Edge:
 *      if nums.length === 0 return null
 *      if nums.length === 1 return nums[0]
 *      if nums.length <= n add up all the nums -> return sum
 * Init:
 *      left: 0, right: n-1, sum: 0, maxSum: 0, runner;
 *      while (right < nums.length) {
 *          runner = left;
 *          if (runner === 0) {
 *              while(runner <= right>) {
 *                  sum += nums[runner];
 *              }
 *              maxSum = Math.max(sum, maxSum);
 *          } else {
 *              sum -= nums[left-1];
 *              sum ++ nums[right];
 *          }
 *          left ++;
 *          right ++;
 *      }
 *
 *      return maxSum;
 */
// Refactored: Time: O(N)  Space: O(1)
const maxSubarraySum = (nums, n) => {
    if (nums.length === 0) return null;
    if (nums.length === 1) return nums[0];
    // calculate the first window sum (left: 0, right: n-1)
    let sum = 0;
    for (let i = 0; i < n; i++) {
        // handle if array's length is shorter than n
        const num = nums[i] || 0;
        sum += num;
    }
    let [left, right, maxSum] = [1, n, 0];
    // reuse the previous calculation -> minus the first and add the last element
    while (right < nums.length) {
        sum = sum - nums[left - 1] + nums[right];
        maxSum = Math.max(sum, maxSum);
        left++;
        right++;
    }

    return maxSum;
}

console.log("should return 10", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2))
console.log("should return 17", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4))
console.log("should return 1", maxSubarraySum([1], 4))
console.log("should return null", maxSubarraySum([], 4))
