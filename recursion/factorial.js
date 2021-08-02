// iterative solution
// Time: O(N) Space: O(1)
const factorial = (num) => {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }

    return total;
}


// recursive solution
const factorial2 = (num) => {
    if (num === 1) return 1;
    return num * factorial2(num - 1);
}

/**
 * num = 5
 * 5 * 4 * 3 * 2 * 1
 *
 *  fn(5)
 *    -> 5 * fn(4)
 *           -> 4 * fn(3)
 *                  -> 3 * fn(2)
 *                          -> 2 * fn(1)
 *                                    1
 */

console.log("should be equal", factorial(5)===factorial2(5));
console.log("should be 120", factorial(5));
