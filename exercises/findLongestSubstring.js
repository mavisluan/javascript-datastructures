/**
 * Sliding Window findLongestSubstring
 *
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters
 *
 * findLongestSubstring('') // 0
 * findLongestSubstring('rithmschool') // 7
 * findLongestSubstring('thisisawesome') // 6
 * findLongestSubstring('bbbbbbbbb') // 1
 * findLongestSubstring('thecatinthehat') // 7
 * Time: O(N)
 */

/**          0   1  2   3   4   5   6   7   8   9   10  11  12
 *           t   h  i   s   i   s   a   w   e   s   o   m   e
 *                                              s
 *                                                          e
 * seen -> keep track of the char and last valid index (not repeated)    {char: index + 1}
 *      if char in seen -> move start to char's last valid index -> update char's new valid index
 * seen:{ t:1,h:2,i:5,s:10,         a:7,w:8,e:13,   o: 11, m: 12}
 * maxLen:0->1 ->2->3->4                 -> 5           -> 6
 * lenL 0-> 1 -> 2->3->4-> 2-> 2 ->3 ->4 -> 5->4   ->5  -> 6-> 4
 *                      4-3+1  5-4+1            10-6+1 11-6+1 12-9+1
 * (end - start + 1)
 */
// Time: O(N) Space: O(N)
const findLongestSubstring = (nums) => {
    let [start, end ] = [0, 0];
    let maxLength = 0;
    const seen = {};
    while (end < nums.length) {
        const char = nums[end];
        if (seen[char]) {
            start = Math.max(start, seen[char]); // if char exists-> move start tp seen[char] (last valid index)
        }

        maxLength = Math.max(end-start+1, maxLength);
        // store the index of the next char so as to not double count (record the last valid index for this char)
        seen[char] = end + 1;
        end ++;
    }
    return maxLength;
}

console.log("should return 6", findLongestSubstring("thisisawesome"))
console.log("should return 7", findLongestSubstring("rithmschool"))
console.log("should return 0", findLongestSubstring(""))
