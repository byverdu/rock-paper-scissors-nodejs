function Game(){

	this.player1;
	this.player2;

};

//var randomPick = Game.randomPick;

Game.prototype.randomPick = function(){

	var pick = { rock: 'scissors', paper: 'rock', scissors: 'paper' };

	var all_keys = Object.keys(pick);

	var this_pick = Math.round(Math.random()*all_keys.length)

	return all_keys[this_pick]
};

module.exports = Game;

//module.exports.randomPick = randomPick;
//exports.PAIRS = { rock: 'scissors', paper: 'rock', scissors: 'paper' }