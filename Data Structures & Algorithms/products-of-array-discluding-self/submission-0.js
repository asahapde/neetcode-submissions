class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let res = []

        let f = 1;
        let b = 1;

        for (let i=0; i < nums.length; i++){
            res.push(f);
            f*=nums[i];
        }

        for (let i =nums.length-1; i >= 0; i--){
            res[i] *=b
            b*=nums[i];
        }

        console.log(res);

        return res
    }
}
