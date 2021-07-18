/**
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 *
 * sumZero([-3, -2, -1, 0, 1, 2, 3] // [-3, 3]
 * sumZero([-2, 0, 1, 3]) //undefined
 * sumZero([1,2,3]) // undefined
 *
 * Input: nums[]
 * Output: [ a pair of nums] or undefined
 *   /
 * [-3, -2, -1, 0, 3, 4, 5, 6]
 *                       \
 * L:   -3
 * R:    6 -> 5 -> 4 -> 3
 * sum: 3  -> 2 -> 1  -> 0
 *     > 0   >0   >0
 *     mv R to L
 * return [-3, 3]
 *
 *Solution:
 *  init two index pointers-> left: 0    right: nums.length -1;
 *  while (left < right) {
 *      leftVal = nums[left];
 *      rightVal = nums[right];
 *      sum = leftVal + rightVal
 *      if ( sum === 0) return [leftVal, rightVal];
 *      else if (sum > 0) {
 *          right --;
 *      } else {
 *          left --;
 *      }
 *  }
 *  return undefined
 *  */
// Time: O(N)  space: O(1)
const sumZero = (nums) => { // [ -2, -1, 0, 2, 4, 6]
    let [left, right] = [0, nums.length -1];
    // left: 0
    // right: 5 -> 4 -> 2
    while (left < right) {
        const leftVal = nums[left]; // leftVal: -2
        const rightVal = nums[right]; // rightVal: 6 -> 4
        const sum = leftVal + rightVal; // sum: 4 -> 2
        if (sum === 0) return [leftVal, rightVal]; // [-2, 2]
        else if (sum > 0) {
            right --;
        } else {
            left ++;
        }
    }
    return undefined;
}

console.log("should return  [-2, 2]", sumZero( [ -2, -1, 0, 2, 4, 6]))
console.log("should return  undefined", sumZero( [-2, 0, 1, 3]))
console.log("should return  undefined", sumZero( [1, 2, 3]))
