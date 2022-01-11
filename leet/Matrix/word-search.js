// Given an m x n grid of characters board and 
// a string word, return true if word exists in the grid.


// The word can be constructed from letters 
// of sequentially adjacent cells, where adjacent 
// cells are horizontally or vertically neighboring. 
// The same letter cell may not be used more than once.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  const rows = board.length;
  const cols = board[0].length;
  const dirX = [-1, 0, 1, 0];
  const dirY = [0, -1, 0, 1];

  let visited = new Array(rows).fill(null).map(row => new Array(cols).fill(0));
  
  var check = (i, j) => {
       if(i >= 0 && j >= 0 && i < rows && j < cols) return true;
       else return false;
  }
  
  
  var dfs = (wordIdx, i, j) => {
  if(!check(i, j)){
      return false;
  }
  
   if(!visited[i][j]){
       visited[i][j] = 1;
   
      if( word[wordIdx] === board[i][j] ){
          if(wordIdx === word.length - 1) return true;
          
          for(let z = 0; z < 4; z++){
              const newI = i + dirX[z];
              const newJ = j + dirY[z];
              
              if(dfs(wordIdx + 1, newI, newJ)) return true;
          }
          
      }
      visited[i][j] = 0; 
      return false;
      
   }else   
      return false;
  }
   
  for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
          if(dfs(0, i, j)) return true;
        
      }
  }
  
  return false;
  
};

const board1 = [["A","B","C","E"], ["S","F","C","S"], ["A","D","E","E"]]
const word1 = 'ABCCED'
const word2 = 'SEE'

console.log(exist(board1, word1))  //true
// console.log(exist(board, word2))  //tru