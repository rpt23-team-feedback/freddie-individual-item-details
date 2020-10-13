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
    return await Game.findOne({gameId}).exec();
  } catch (error) {
    throw error;
  }
}

module.exports.getSingleGame = getSingleGame;
module.exports.Game = Game;