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


app.get('/games/single/:gameId', (req, res) => {
  const gameId = req.params.gameId;
  const getSingleGame = db.getSingleGame(gameId);
  getSingleGame.then((game) => {
    res.json(game);
  })
});

app.get('/games/multiple', (req, res) => {
  const multipleGameIds = req.query;
  // const gamesObj = {}; // use this object to keep track of tiers as the keys, and the value is an array of games
  /*
  gamesObj = {
    tier1: [{}, {}],
    tier2: [{}, {}, {}],   <---- my goal to for res.send
    tier3: [{}, {}]
  }
  */
  (async function getGames(gameIdsObj) {
    let gamesArray = [];
    for (const key in gameIdsObj) {
      //gamesObj[key] = [];
      const gameIds = gameIdsObj[key];
      if (gameIds) {
        if (Array.isArray(gameIds)) {
          for (const id of gameIds) {
            gamesArray.push(db.getSingleGame(id));
          }
        }
        else {
          gamesArray.push(db.getSingleGame(gameIds));
        }
      }
    }
    const games = await Promise.all(gamesArray);
    res.send(games);
  })(multipleGameIds)
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});



