class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        let adjList = new Map();

        for(let [a, b] of prerequisites){
            if(!adjList[a]){
                adjList[a] = [b];
            } else {
                adjList[a].push(b);
            }
        }

        let visited = new Set();

        function dfs(curr){
            if(visited.has(curr)) return false;
            if(adjList[curr] === []) return true;

            visited.add(curr);

            if(adjList[curr]){
                for(let c of adjList[curr]){
                    if(!dfs(c)) return false;
                }
            }

            visited.delete(curr);
            adjList[curr] = [];

            return true;
        }

        for(let key in adjList){
            if(!dfs(key)) return false
        }

        return true;
    }
}
