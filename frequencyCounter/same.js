/**
 * Write a function called 'same', which accepts two arrays.
 * The function should return true if every value in the array has its corresponding value squared in the second array.
 * The frequency of value must be the same
 */

/**
 * Input: nums1[], nums2[]
 * Output: Boolean
 * 
 * [1, 2, 3], [4, 1, 9] // true
 * [1, 2, 3], [4, 9] // false ( missing the squared value) --> nums1.length !== nums2.length
 * [1, 2, 3, 3], [4, 1, 1, 9]  // false (frequency not the same) 
 * {1: 1, 2: 1, 3: 2}
 * {4: 1, 1: 2, 9: 1}
 * 
 * key factors:
 * k1^2 = k2
 * dict1[k1] = dict2[k2]
 * 
 * Solution:
 * 0. Edge: nums1.length !== nums2.length return false
 * 1. init two dicts (dict1, dict2)
 * 2. create a function to build dict {num: frequency}
 * 3. iterate through dict1's keys
 *       if k1^2 not in dict2   return false
 *       if dict1[k1] !== dict2[squared] return false
 *    return true
 */

 const same = (nums1, nums2) => { // [1, 2, 2, 4]   [1, 4, 16, 16]
    if (nums1.length !== nums2.length) return false;

    const buildDict = (nums) => {
        const dict = {};
        for (let num of nums) {
            dict[num] = dict[num] + 1 || 1; 
        }
        return dict;
    }

    const dict1 = buildDict(nums1); //{1: 1, 2: 2, 4: 1}
    const dict2 = buildDict(nums2); // {1: 1, 4: 1, 16: 2}
    for (let k1 in dict1) { // k1: 1 -> 2
        const squared = k1 * k1; // 1 -> 4
        if (dict2[squared]) return false; // X-> X
        if (dict2[squared] !== dict1[k1]) return false; // X -> dict2[squared]: 1, dict1[k1]: 2
    }

    return true;
}


console.log("should return false if frequency is not the same", same([1, 2, 2, 4],  [1, 4, 16, 16]));    
console.log("should return false if the two arrs have different length", same([1, 2, 2, 4],  [1, 4, 16]));    
console.log("should return true if keys are squared and the frequency is the same", same([1, 2, 2, 4],  [1, 4, 4, 16]));    