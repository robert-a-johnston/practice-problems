// two player game
// rules
// initially n number of towers 
// towers of m height
// players alternate turns
// player can choose a tower and reduce its height
// player can remove any number of height units
//    as long as height is > 1 and
//     x = current height
//     y = ending height
//     y % x = 0


function towerBreakers(n, m) {
  // Write your code here
  if(m === 1) return 2
  else if(n % 2 === 0) return 2
  else
      return 1
}