class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let map = new Map();

        for(let i = 0; i < nums.length; i++){
            if(map[nums[i]]) map[nums[i]] = map[nums[i]] + 1;
            else map[nums[i]] = 1;
        }

        let bucket = []
        let result = []

        for (let [num, freq] of Object.entries(map)) {
            if(bucket[freq]) bucket[freq] = bucket[freq].add(num)
            else bucket[freq] = new Set().add(num)
        }

        for(let i = bucket.length-1; i >= 0; i--){
            if(bucket[i]) result.push(...bucket[i]);
            if(result.length === k) break;
        }

        console.log(result)

        return result
    }
}
