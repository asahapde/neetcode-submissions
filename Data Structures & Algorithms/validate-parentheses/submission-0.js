class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let checkBrackets = new Map([["]", "["], ["}", "{"], [")", "("]]);

        for(let bracket of s){
            if(checkBrackets.has(bracket)){
                if(stack && stack[stack.length-1] === checkBrackets.get(bracket)){
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(bracket);
            }
        }

        return stack.length === 0;
    }
}
