class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let sorted = strs.map(s => s.split("").sort().join(""));
        let map = new Map();
        let anList = [];

        for(let i = 0; i < sorted.length; i++){
            if(map[sorted[i]]){
                map[sorted[i]].push(strs[i]);
            } 
            else map[sorted[i]] = [strs[i]]
        }

        for(let key in map){
            anList.push(map[key]);
        }


        return anList;
    }
}
