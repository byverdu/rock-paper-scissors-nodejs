//var game_info = require('./game');
var player_class = require('./player');
var express = require('express');
var router = express.Router();

// function Player(name) {
// 	this.name = name
// }

// Player.prototype.selectPick = function() {
// 	this.randomPick()
// }

// Game.prototype.Pairs = game_info.PAIRS;

// function Game(player1,player2) {
// 	this.player1 = player1;
// 	this.player2 = player2;
// }

// Player.prototype.randomPick = function() {
// 	this.pick = pick
// }

// router.post('/',function(req,res){

// 	var player1 = req.param('player1'),
// 	    player2 = req.param('player2'),
// 	    game;

// 	game = new Game(player1,player2);

// 	res.render('user', { players: game.Pairs })


// console.log(game_info)
//})

/* GET home page. */
router.get('/', function(request, respond) {
  respond.render('index', { title: 'RockPaperScissors' });
});

router.post('/',function(request, respond){
	var player1 = new player_class(request.param('player1'));
	var player2 = new player_class(request.param('player2'));

	console.log(player1,player2)

	respond.render('game',{ player1: player1.name, player2: player2.name })
})

module.exports = router;














