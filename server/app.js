const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3000;
const db = require('../database/index.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static(__dirname + '/public'));

app.get('/games', (req, res) => {
  const getAllGames = db.getAllGames();
  getAllGames.then((games) => {
    res.send(games);
  })
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});



