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
	player2 = new player_class(request.param('player2'));
	game    = new game_class.Game(player1,player1)


	console.log(player1,player2,game)

	respond.render('game',{ 

				player1: player1.name, 
				player2: player2.name, 
				result_player1: 'game' 
	})
})

router.post('/game', function(request,respond){

	respond.render('result', { result_player1: game_class.albert() })
})

module.exports = router;














