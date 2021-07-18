/**
 * Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
 * If the value is not found, return -1.
 *
 * Input: [1,2,3,4,5,6], target: 4
 * Output: 3 (index)
 *
 * Input:  [1,2,3,4,5,6], target: 5
 * Output: 5
 *
 * Input:  [1,2,3,4,5,6], target: 11
 * Output: -1
 */

/**
 * Input: an array of SORTED nums, target: num
 * Output: index
 *         s m e
 *  [1,2,3,4,5,6],  4
 *  3
 *
 *  target: 4  <4  >4    = 4
 *  nums[mid]: 3 -> 5 ->  4
 *  start:     0 -> 3     3
 *  end:       5     5 -> 3
 *  mid:       2  -> 4    3
 *   Math.floor(s + e)/2
 *
 *  Solution:
 *  init start, end, mid --> index
 *  while(start <= end) {
 *      mid = Math.floor(start + end);
 *      const num = nums[mid];
 *      if (num === target) {
 *          return mid;
 *      } else if (num > target) {
 *          end = mid -1;
 *      } else {
 *          start = mid + 1;
 *      }
 *  }
 *
 *  return -1;
 */

/** s         m  e
 * [1,2,4,6,7,9,12]
 *
 * s:   0 -> 4
 * e:   6    6
 * m:   3 -> 5
 * num: 6 -> 9
 *     < 9
 * target: 9
 */
// Time: O(log(N))   Space: O(1) Binary Search
const search = (nums, target) => {
    let [start, end] = [0, nums.length - 1];
    while (start <= end) {
        const mid = Math.floor(start + end);
        const num = nums[mid];
        if (num === target) {
            return mid;
        } else if (num > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}


console.log("should return 3", search([1, 2, 3, 4, 5, 6], 4));
console.log("should return 5", search( [1,2,4,6,7,9,12],  9))
console.log("should return -1", search( [1,2,4,6,7,9,12],  3))
