class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let longest = 0;
        let set = new Set();

        let l = 0;
        let r = 0;

        while(r < s.length){
            if(set.has(s[r])){
                set.delete(s[l]);
                l++;
            } else {
                set.add(s[r]);
                longest = Math.max(longest, set.size);
                r++;
            }

        }

        return longest;
    }
}
