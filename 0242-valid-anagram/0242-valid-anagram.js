/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sor = s.split('').sort().join('')
    let sor2 = t.split('').sort().join('')
    return sor==sor2
};