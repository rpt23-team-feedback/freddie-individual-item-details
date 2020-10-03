const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const db = require('../database/index.js');
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
// app.use(express.static(path.join(__dirname, 'public', 'index.html')));

app.get('/games', (req, res) => {
  const getAllGames = db.getAllGames();
  getAllGames.then((games) => {
    res.send(games);
  })
});

app.get('/', (req, res) => {
  res.send('HELLO FROM ROOT');
  // res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/games/:gameId', (req, res) => {
  const gameId = req.params.gameId;
  // console.log(gameId);
  const getSingleGame = db.getSingleGame(gameId);
  getSingleGame.then((game) => {
    res.json(game);
  })
  // res.send('get for game recieved');
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});



