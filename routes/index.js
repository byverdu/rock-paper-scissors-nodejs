//var game_info = require('./game');
var player_class = require('../models/player');
var game_class   = require('../models/game');
var express = require('express');
var router = express.Router();

var game, player1, player2;

/* GET home page. */

router.get('/', function(request, respond) {
  respond.render('index', { title: 'RockPaperScissors' });
});

router.post('/',function(request, respond){
	player1 = new player_class(request.param('player1'));
	player2 = new player_class('computer');
	game    = new game_class(player1,player2);


	// console.log(player1,player2,game)

	respond.render('game',{ player1: player1.name })
})

router.post('/game', function(request,respond){

	pick1 = request.param('name');
	pick2 = game.randomPick();

	console.log(pick1)

	respond.render('result', { pick1: pick1,
														 pick2: pick2 })
})

module.exports = router;














