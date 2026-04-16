/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let length = 0;
    let curr = head;

    while(curr !== null){
        length++;
        curr = curr.next;
    }

     if( length === n ){
        return head.next;
     }

     curr = head;
     for(i=1 ; i<length-n ;i++){
        curr = curr.next;
     }

     curr.next = curr.next.next;
     return head;
};