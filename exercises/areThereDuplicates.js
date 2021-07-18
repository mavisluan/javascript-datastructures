/**
 * Frequency Counter/ Multiple Pointers
 * areThereDuplicates
 *
 * Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed.
 * You can solve this using the frequency counter pattern OR the multiple pointers pattern.
 *
 * areThereDuplicates(1,2,3) // false
 * areThereDuplicates(1, 2, 2) // true
 * areThereDuplicates('a', 'b', 'c', 'a') // true
 *
 * Restrictions: Time: O(N) Space: O(N)
 * Bonus: Time: O(n Log(N))  Space: O(1)
 */
/**
 * Input: random arguments (num, str)
 * Output: Boolean
 *
 * [ 1, 2, 3]
 *              ^
 * unique: (1, 2, 3) // false
 *
 *  [ 1, 2, 2]
 *          ^
 *  unique:  (1, 2)  // true
 *
 *  Time: O(N) Space O(N)
 *  Solution 1: use set
 *  init unique = new Set()
 *  iterate through each arg
 *      if unique.has(arg) return true
 *      unique.add(arg)
 *  return false
 */
const areThereDuplicates = (...args) => { // ['a', 'b', 'c', 'a']
    if (!args.length) return true;
    const unique = new Set(); // ('a') -> ('a', 'b', 'c')

    for (let arg of args) { // 'a' -> 'b' -> 'c' -> 'a'
        if (unique.has(arg)) return true; // true
        else unique.add(arg);
    }
    return false;
}
// One line Solution
// const areThereDuplicates = (...args) => {
//     return new Set(args).size !== args.length;
// }

/**
 * Time: O(N Log(N))    Space: O(1)
 * Solution 2
 *
 * ['a', 1, 'c', 4, 'd', 3, 'o', 8, 10, 5, '?', '!']
 * sort by num and letter ascending
 *            L
 * sorted = ["!", 1, 3, 4, 5, 8, 10, "?", "a", "c", "d", "o"]
 *                R
 * init L, R for index pointers
 * if args[L] === args[R] return true
 * else L ++, R ++
 */
// NOTE: array.sort() return sorted array. The array is sorted in place, and no copy is made.
const areThereDuplicates2 = (...args) => { // ['a', 1, 'c', 4, 'd', 3, 'o', 8, 10, 5, '?', '!']
    if (!args.length) return true;
    args.sort(); // sort by char
    args.sort((a, b) => a - b); // sort by num

    let [left, right] = [0, 1];
    while (right < args.length) {
        if (args[left] === args[right]) return true;
        left ++;
        right ++;
    }
    return false;
}



console.log("should return false", areThereDuplicates2('a', 1, 'c', 4, 'd', 3, 'o', 8, 10, 5, '?', '!'))
console.log("should return true", areThereDuplicates2('a', 1, 'c', 4, 'd', 3, '!', 'o', 8, 10, 5, '?', '!'))

