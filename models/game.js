function Game(player1,player2){

	this.player1 = player1;
	this.player2 = player2;

};

Game.prototype.PAIRS = { rock: 'scissors', paper: 'rock', scissors: 'paper' };

Game.prototype.randomPick = function(){

	var all_keys = Object.keys(this.PAIRS);

	var this_pick = Math.round(Math.random()*(all_keys.length-1))

	return all_keys[this_pick]
};

Game.prototype._isSamePick = function() {

	return this.player1.pick === this.player2.pick;
}

Game.prototype._isWinner = function(pick,opponent_pick) {

	pick          = this.player1.pick;
	opponent_pick = this.player2.pick;

	return this.PAIRS[pick] === opponent_pick; 

}

Game.prototype.winner = function() {


  if(this._isSamePick()) return null;

  if(this._isWinner()){	 

  	return this.player1;
  
  } else return this.player2;
}


module.exports = Game;

