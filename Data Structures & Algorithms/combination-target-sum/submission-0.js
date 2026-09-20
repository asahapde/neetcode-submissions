class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        let res = [];

        function dfs(index, current, arr) {
            if(current < 0) return;
            if(current === 0) res.push([...arr]);

            for(let i = index; i < nums.length; i++){
                arr.push(nums[i]);
                dfs(i, current-nums[i], arr);
                arr.pop();
            }
        }

        dfs(0, target, []);
        
        return res;
    }
}

