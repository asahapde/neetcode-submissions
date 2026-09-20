class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        let map = new Map();

        for(let letter of t){
            if(map.has(letter)){
                map.set(letter, map.get(letter)+1);
            } else {
                map.set(letter, 1);
            }
        }

        let left = 0;
        let right = 0;
        let res = [-1, -1];
        let len = Infinity;

        let have = 0;
        let need = map.size;

        let window = new Map();

        while(right < s.length){
            let rightLet = s[right];

            if(window.has(rightLet)){
                window.set(rightLet, window.get(rightLet)+1);
            } else {
                window.set(rightLet, 1);
            }

            if(map.has(rightLet) && (map.get(rightLet) === window.get(rightLet))) {
                have++;
            }

            while (have === need) {
                let leftLet = s[left];

                if((right - left + 1) < len) {
                    res = [left, right];
                    len = right - left + 1;
                }

                window.set(leftLet, window.get(leftLet)-1);

                if(map.has(leftLet) && (map.get(leftLet) > window.get(leftLet))) {
                    have--;
                }
                left++
            }
            
            right++;
        }

        if(len === Infinity) return "";
        else return s.slice(res[0], res[1]+1)
    }
}
