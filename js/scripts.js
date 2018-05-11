//business logic
var rolling = function(){
  return Math.floor(Math.random() * 6) + 1;
}
function Player(roll,tempscore,totalscore,turn,playername){
  this.roll=0;
  this.tempscore=0;
  this.totalscore=0;
  this.turn=0;
  this.playername;
}
