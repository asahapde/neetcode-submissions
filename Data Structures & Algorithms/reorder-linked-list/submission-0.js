/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let slow = head;
        let fast = head;

        while(fast.next && fast.next.next){
            fast = fast.next.next;
            slow = slow.next;
        }

        let curr = slow.next;
        slow.next = null;

        let prev = null;

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }

        let l1 = head;
        let l2 = prev;

        while(l1){
            let temp = l1.next;
            l1.next = l2;
            l1 = l2;
            l2 = temp;
        }
    }
}
