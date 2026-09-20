/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root === null) return [];

        let queue = [root];
        let tree = [];

        while(queue.length){
            let level = [];
            let levelSize = queue.length;
            
            while(levelSize){
                let curr = queue.shift();

                if(curr.left) queue.push(curr.left);
                if(curr.right) queue.push(curr.right);

                level.push(curr.val);
                levelSize--;
            }

            tree.push(level);
        }

        return tree;
    }
}
