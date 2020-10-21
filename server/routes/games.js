const express = require('express');
const db = require('../../database/game_model.js');
let router = express.Router();
console.log(db);

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

router.route('/single/:gameId').get( async (req, res, next) => {
  const gameId = req.params.gameId;
  try {
    const getSingleGame = await db.getSingleGame(gameId);
    res.json(getSingleGame);
  } catch (err) {
    res.status(500).send('No game found');
    next(err);
  }
});

router.route('/multiple/').get( async (req, res) => {
  const multipleGameIds = req.query;
  try {
    (async function getGames(gameIdsObj) {
      let gamesArray = [];
      for (const key in gameIdsObj) {
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
  } catch (err) {
    res.status(500).send('Cannot find games');
    next(err);
  }
});

module.exports = router;
