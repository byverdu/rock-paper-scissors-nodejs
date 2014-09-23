//exports.PAIRS = { rock: 'scissors', paper: 'rock', scissors: 'paper' }

var Game = function(player1,player2){

	this.player1 = player1;
	this.player2 = player2;
};

var randomPick = function(){

	var pick = { rock: 'scissors', paper: 'rock', scissors: 'paper' };

	var all_keys = Object.keys(pick);

	var this_pick = Math.round(Math.random()*all_keys.length)

	return all_keys[this_pick]
};

module.exports.Game = Game;

module.exports.randomPick = randomPick;