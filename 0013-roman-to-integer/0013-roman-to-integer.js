/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'I' && s[i + 1] === 'V' || s[i] === 'I' &&  s[i + 1] === 'X') {
            res -= 1;
        }
        else if (s[i] === 'X' && s[i + 1] === 'L' || s[i] === 'X' &&  s[i + 1] === 'C') {
            res -= 10;
        }
        else if (s[i] === 'C' && s[i + 1] === 'D' || s[i] === 'C' &&  s[i + 1] === 'M') {
            res -= 100;
        }
        else if (s[i] === 'I') {
            res += 1;
        }
        else if (s[i] === 'V') {
            res += 5;
        }
        else if (s[i] === 'X') {
            res += 10;
        }
        else if (s[i] === 'L') {
            res += 50;
        }
        else if (s[i] === 'C') {
            res += 100;
        }
        else if (s[i] === 'D') {
            res += 500;
        }
        else if (s[i] === 'M') {
            res += 1000;
        }
    }
    return res;
};