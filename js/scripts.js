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
Player.prototype.moja= function(){
  if(roll==1){
    this.tempscore=0;
    alert("1 is not in your favour" + this.playername + ", your turn is over!")
  }else{
    this.tempscore+=this.roll;
  }
Player.prototype.hold= function(){
  this.totalscore+=this.tempscore;
  this.tempscore=0;
  alert(this.playername + ", your held your score, your turn is over.")
}
Player.prototype.proGamer=function(){
  if(this.totalscore==100){
    alert(this.playername + ", you are Master Dicer!!")
  }
}
Player.prototype.newGame= function(){
  this.roll=0;
  this.tempscore=0;
  this.totalscore=0;
  this.turn=0;
  this.playername=('');
}
var clearnames= function(){
  $("input#player1name").val("");
  $("input#player2name").val("");
}

//user-interface logic
