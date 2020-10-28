const express = require('express');
const db = require('../../database/game_model.js');
let router = express.Router();

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Server error');
});

router.route('/single/:gameId').get( async (req, res, next) => {
  const gameId = req.params.gameId;
  if ((gameId < 1 || gameId > 300) || (gameId === parseFloat(gameId))) {
    res.status(400).send('No game of that ID, please enter valid game ID');
  } else {
    try {
      const getSingleGame = await db.getSingleGame(gameId);
      res.status(200).send(getSingleGame);
    } catch (err) {
      res.status(500).send('Server Error, please wait while we work to fix it');
      next(err);
    }
  }
});

router.route('/multiple/').get( async (req, res) => {
  const multipleGameIds = req.query;
  try {
    (async function getGames(gameIdsObj) {
      let gamesArray = [];
      let invalidGameIds = [];
      for (const key in gameIdsObj) {
        const gameIds = gameIdsObj[key];
        if (gameIds) {
          if (Array.isArray(gameIds)) {
            for (const id of gameIds) {
              if ((id < 1 || id > 300) || (id === parseFloat(id))) {
                invalidGameIds.push(id);
              } else {
                gamesArray.push(db.getSingleGame(id));
              }
            }
          } else {
            gamesArray.push(db.getSingleGame(gameIds));
          }
        }
      }
      const games = await Promise.all(gamesArray);
      if (invalidGameIds.length > 0) {
        res.status(400).send('Invalid game ID(s), please enter valid ID(s)');
      } else {
        res.status(200).send(games);
      }
    })(multipleGameIds)
  } catch (err) {
    res.status(500).send('Server Error, please wait while we work to fix it');
    next(err);
  }
});

module.exports = router;
