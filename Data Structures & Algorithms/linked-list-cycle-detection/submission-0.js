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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head) return null;

        let fast = head;
        let slow = head;

        while(fast){
            if(!fast.next){
                return false;
            } else {
                fast = fast.next.next;
                slow = slow.next;
            }

            if(fast === slow) return true;
        }

        return false;
    }
}
