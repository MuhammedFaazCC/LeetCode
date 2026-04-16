/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let stack = [];
    let curr = head;
    while(curr){
        stack.push(curr.val);
        curr = curr.next;
    }
    curr = head;
    while(curr){
        if(curr.val !== stack[stack.length-1]){
            return false
        }
        curr = curr.next;
        stack.pop()
    }
    return true
};