class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let map = new Map();

        let topFreq = 0;
        let longest = 0;

        let left = 0;
        let right = 0;

        while(right < s.length){

            let rightChar = s[right];

            if(!map[rightChar]){
                map[rightChar] = 1;
            } else {
                map[rightChar]++;
            }

            topFreq = Math.max(topFreq, map[rightChar]);

            while((right-left+1)-topFreq > k){
                let leftChar = s[left];
                map[leftChar]--;
                left++;
            }

            longest = Math.max(longest, (right-left+1));

            right++;
        }

        return longest;
    }
}
