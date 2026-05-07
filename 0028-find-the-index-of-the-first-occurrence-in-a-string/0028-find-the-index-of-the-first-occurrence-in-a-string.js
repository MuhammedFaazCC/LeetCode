/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(!haystack.includes(needle)){
        return -1;
    }
    let str = "";
    return haystack.indexOf(needle);
};