class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let validChar = "abcdefghijklmnopqrstuvwxyz1234567890";
        let cleanString = "";

        for(let i = 0; i < s.length; i++){
            if(validChar.indexOf(s.charAt(i).toLowerCase()) != -1){
                cleanString+=s.charAt(i).toLowerCase();
            }
        }

        let left = 0;
        let right = cleanString.length-1;

        while(left<right){
            if(cleanString.charAt(left) != cleanString.charAt(right)){
                return false;
            }

            left++;
            right--;
        }

        return true
    }
}
