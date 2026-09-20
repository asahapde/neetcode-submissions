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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if(lists.length === 0) return null;

        for(let i = 1; i < lists.length; i++){
            lists[i] = mergeTwoLists(lists[i], lists[i-1])
        }

        return lists[lists.length-1];
    }
}

function mergeTwoLists(l1, l2) {
        let dummy = new ListNode();
        let head = dummy;

        while (l1 && l2){
            if(l1.val <= l2.val){
                dummy.next = l1;
                l1 = l1.next;
            } else {
                dummy.next = l2;
                l2 = l2.next;
            }
            dummy = dummy.next;
        }

        if(l1){
            dummy.next = l1;
        } else {
            dummy.next = l2;
        }

        return head.next;
    }
