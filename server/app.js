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


// app.get('/', (req, res) => {
//  res.sendFile(__dirname+'/../public/index.html');
//   console.log('Hello from GET');
// });

app.get('/games', (req, res) => {
  let gameObj = {
    name: 'test game name',
    photo_url: 'test game photo url',
    video_url: 'test game video url',
    creators: ['test creator one', 'test creator two', 'test creator three'],
    os_options: ['Linux', 'Mac', 'Windows', 'Steam'],
    description: 'test game description',
    gameplay: ['gameplay one', 'gameplay two', 'gameplay three'],
    key_features: ['key feature one', 'key feature two', 'key feature three', 'key feature four', 'key feature five',]
  }
  db.saveNewGame(gameObj);
  res.send('Hello from GET games');
});

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});



