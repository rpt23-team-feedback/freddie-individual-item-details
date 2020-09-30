const mongoose = require('mongoose');

describe('inserts a game document into database', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await mongoose.connect('mongodb://localhost/games', { useNewUrlParser: true });
    db = await connection.db('games');
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const games = db.collection('games');

    const testGame = {
      name: 'Mario Kart',
      photo_url: 'http://placeimg.com/640/480',
      video_url: 'http://placevid.com/362/180',
      creators: ['Creator One', 'Creator Two', 'Creator Three'],
      os_options: ['Steam', 'Mac', 'Linux', 'Windows'],
      description: 'Sed odit quia ut. Atque quis ad. Saepe odit exercitationem qui. Ipsam sint non aperiam totam. Et quos et. Vel quae qui est impedit voluptatum iure sint ipsa et.',
      gameplay: [
        'Fugiat qui autem dolores placeat.',
        'Quia voluptates neque sequi.',
        'Omnis quo neque explicabo expedita et minima eius repellendus.',
        'Omnis doloremque non dolor corporis totam.',
        'Rerum a ut voluptas aspernatur et veritatis.'
      ],
      key_features: [
        'Velit dolor numquam alias et ex ad fugit culpa ut.',
        'Iusto inventore quasi modi voluptatem.',
        'Quia nobis ipsa itaque.',
        'Impedit amet suscipit reprehenderit iste qui.',
        'Quas suscipit consequuntur nostrum perspiciatis.'
      ]
    };
    await games.insertOne(mockUser);

    const insertedGame = await games.findOne({name: 'Mario Kart'});
    expect(insertedGame).toEqual(testGame);
  });
});

