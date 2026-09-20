class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let streak = 0;

        for (let n of numSet){
            let currStreak = 1;

            if(!numSet.has(n-1)) {
                while (numSet.has(n+1)){
                    currStreak++;
                    n++;
                }
            }
            console.log(currStreak);
            streak = Math.max(streak, currStreak);
            
        }

        return streak;
    }
}
