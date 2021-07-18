/**
 * Multiple Pointers - averagePair
 * Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 *
 * Bonus Constraints:
 * Time: O(N) Space: O(1)
 *
 * Examples:
 * averagePair([1,2,3], 2.5) // true
 * averagePair([1,3,3,5,6,7,10,12,19], 8) // true
 * averagePair([-1,0,3,4,5,6], 4.1) // false
 * averagePair([], 4) // false
 */
/** Question and examples
 * find a pair of nums whose average = target
 * Not necessary consecutive
 *
 * Input: SORTED nums[], target: num
 * Output: Boolean
 *
 * Examples:
 *          L
 * [1,3,3,5,6,7,10,12,19], 8
 *               R
 * sum:     20/2 = 10 -> 6.5 -> 7.5 ->8.5 -> 7.5 -> 8
 * target   8      >8   <8      <8    >8     <8    =8 (return true)
 * leftVal:  1  -----------------3 ---5  --- 5  -- 6
 * rightVal: 19  ------- 12 -----12 --12 -- 10 --  10
 * while( nums[left] === leftVal ) left ++
 * while( nums[right] === rightVal ) right ++
 */
/**
 * Solution: Two pointers
 * Edge: if !nums.length return false
 * init left = 0, right = nums.length - 1; avg = 0;
 * leftVal, rightVal
 * while (left < right) {
 *     leftVal = nums[left];
 *     rightVal = nums[right];
 *     avg = (leftVal + rightVal)/2;
 *     if (avg === target) {
 *         return true;
 *     } else if (avg > target) {
 *        right --;
 *        while( nums[right] === rightVal ) {
 *           right --;
 *        }
 *     } else {
 *       left ++;
 *       while (nums[left] === leftVal) {
 *          left ++;
 *       }
 *     }
 * }
 *
 * return false;
 */

/**
 *
 * @param nums
 * @param target
 * @returns {boolean}
 *                  L
 *      [-1,0,3,3,3,4,5,6,6], 4.1
 *                  R
 *tgt: 4.1  <  <    >    <     >
 *avg:0 ->2.4->3 -> 4.5->4 -> 4.5
 * lVal: -1 -> 0 -> 3    3 -> 4
 * rVal:  6    6    6 -> 5    5
 */
const averagePair = (nums, target) => {
    if (!nums.length) return false;
    let [left, right, avg] = [0, nums.length -1, 0];
    while (left < right) {
        const leftVal = nums[left];
        const rightVal = nums[right];
        avg = (leftVal + rightVal) / 2;
        if (avg === target) {
            return true;
        } else if (avg > target) {
            right --;
            while (nums[right] === rightVal) {
                right --;
            }
        } else {
            left ++;
            while (nums[left] === leftVal) {
                left ++;
            }
        }
    }
    return  false;
}

console.log("should return false", averagePair([], 4));
console.log("should return false", averagePair([-1,0,3,3,3,4,5,6,6], 4.1));
console.log("should return true", averagePair([1,3,3,5,6,7,10,12,19], 8))
