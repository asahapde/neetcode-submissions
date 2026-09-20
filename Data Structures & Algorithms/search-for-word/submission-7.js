class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        function dfs(row, col, index){
            if(index === word.length) return true;
            if(row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] !== word[index]) return false;
            board[row][col] = "#";

            let res = (dfs(row+1, col, index+1) || dfs(row-1, col, index+1) || dfs(row, col+1, index+1) || dfs(row, col-1, index+1))
            
            board[row][col] = word[index];

            return res;
        }

        for(let r = 0; r < board.length; r++){
            for(let c = 0; c < board[0].length; c++){
                if(board[r][c] === word[0] && dfs(r, c, 0)) return true;
            }
        }

        return false;

        
    }
}
