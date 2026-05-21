/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ones = [0];
    let a = 0;
    for(let i of nums){
        if(i===1){
            ones[a]+=1;
        }
        if(i===0){
            a++
            ones.push(0);
        }
    }
    return Math.max(...ones);
};