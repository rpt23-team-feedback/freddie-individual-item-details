const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
mongoose.connect('mongodb://localhost/games', { useNewUrlParser: true });

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});
db.on('error', console.error.bind(console, 'connection error:'));

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

const Game = new mongoose.model('Game', gameSchema);

const getSingleGame = async (gameId) => {
  try {
    const foundGame = await Game.findOne({gameId}).exec();
    if (foundGame.length === 0) {
      throw err;
    }
    return foundGame;
  } catch (error) {
    throw error;
  }
}

const saveNewGame = (gameObj) => {
  const newGame = new Game({
    name: gameObj.name,
    photo_url: gameObj.photo_url,
    video_url: gameObj.video_url,
    creators: gameObj.creators,
    os_options: gameObj.os_options,
    description: gameObj.description,
    gameplay: gameObj.gameplay,
    key_features: gameObj.key_features,

  });
  return newGame.save((err, game) => {
    if (err) {
      console.error(err);
    } else {
      return game;
    }
  })
}

module.exports = {
  Game: Game, getSingleGame, saveNewGame
};