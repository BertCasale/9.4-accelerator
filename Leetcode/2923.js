// 2923. Find Champion I

// There are n teams numbered from 0 to n - 1 in a tournament.

// Given a 0-indexed 2D boolean matrix grid of size n * n. For all i, j that 0 <= i, j <= n - 1 and i != j team i is stronger than team j if grid[i][j] == 1, otherwise, team j is stronger than team i.

// Team a will be the champion of the tournament if there is no team b that is stronger than team a.

// Return the team that will be the champion of the tournament.


var findChampion = function(grid) {
  let strongestTeam = 0;
  let strongestScore = 0;
  
  for (let team = 0; team < grid.length; team++){
      let teamScore = 0;
      for (let score = 0; score < grid[team].length; score++){
          teamScore += grid[team][score];
      }
      if (teamScore > strongestScore){
          strongestScore = teamScore;
          strongestTeam = team;
      }
  }
  return strongestTeam;
};