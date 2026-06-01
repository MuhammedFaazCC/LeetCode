/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let freq = new Array(nums.length + 1).fill(0);

    for (let num of nums) {
        freq[num]++;
    }

    let duplicate, missing;

    for (let i = 1; i <= nums.length; i++) {
        if (freq[i] === 2) duplicate = i;
        if (freq[i] === 0) missing = i;
    }

    return [duplicate, missing];
};