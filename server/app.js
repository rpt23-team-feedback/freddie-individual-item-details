const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3200;
const path = require('path');
const games = require('./routes/games');

app.use('/games', games);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
