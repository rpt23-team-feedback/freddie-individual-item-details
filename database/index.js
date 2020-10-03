const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/games', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const gameSchema = new mongoose.Schema({
  name: {type: String, required: true},
  photo_url: {type: String, required: true},
  video_url: {type: String, required: true},
  creators: [String, String, String],
  os_options: [String, String, String, String],
  description: {type: String, required: true},
  gameplay: [String, String, String, String, String],
  key_features: [String, String, String, String, String]
});

autoIncrement.initialize(mongoose.connection);
gameSchema.plugin(autoIncrement.plugin, { model: 'Game', field: 'gameId', startAt: 1, incrementBy: 1});

const Game = mongoose.model('Game', gameSchema);

const saveNewGame = (gameObj) => {
  const newGame = new Game({
    name: gameObj.name,
    photo_url: gameObj.photo_url,
    video_url: gameObj.video_url,
    creators: gameObj.creators,
    os_options: gameObj.os_options,
    description: gameObj.description,
    gameplay: gameObj.gameplay,
    key_features: gameObj.key_features
  });
  return newGame.save((err, game) => {
    if (err) {
      console.error(err);
    } else {
      return game;
    }
  })
}

const getAllGames = () => {
  return Game.find({}, (err, games) => {
    if (err) {
      console.error('Error getting all game items:', err);
    } else {
      console.log('All game items in db:', games);
      return games;
    }
  })
}

const getSingleGame = (gameId) => {
  return Game.findOne({gameId}, (err, game) => {
    if (err) {
      console.error('Error getting single game item:', err);
    } else {
      console.log('Single game item in db:', game);
      return game;
    }
  })
}

module.exports.saveNewGame = saveNewGame;
module.exports.getAllGames = getAllGames;
module.exports.getSingleGame = getSingleGame;