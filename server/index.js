const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3200;
const db = require('../database/index.js');
const path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/games/:gameId', (req, res) => {
  const gameId = req.params.gameId;
  const getSingleGame = db.getSingleGame(gameId);
  getSingleGame.then((game) => {
    res.json(game);
  })
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});



