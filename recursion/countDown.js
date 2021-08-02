/**
 * Write a function that takes number n and counts down from n to 1
 */

const countDown = (n) =>{
    if (n <= 0) {
        console.log("All Done!");
        return;
    }

    console.log(n);
    countDown(n-1);
}
countDown(3);
/**
 * countDown(3)
 * print 3
 * countDown(2)
 * print 2
 * countDown(1)
 * print 1
 * countDown(0)
 * print All Down
 * return
 */
