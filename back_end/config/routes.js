const players = require('../controllers/players.js');

module.exports = function(app){
    app.get('/players', players.getAll);
    app.post('/players/new', players.add);
    app.delete('/players/remove/:id',players.remove);
    app.post('/game/:game_id/:id',players.status);
    app.get("*")
}