const {MongoClient} = require('mongodb');

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
    db.createCollection('testGames', {
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['name', 'photo_url', 'video_url', 'description'],
          properties: {
            name: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            photo_url: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            video_url: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            creators: {
              bsonType: 'array',
              description: 'must be an array of strings'
            },
            os_options: {
              bsonType: 'array',
              description: 'must be an array of strings'
            },
            description: {
              bsonType: 'string',
              description: 'must be a string and is required'
            },
            gameplay: {
              bsonType: 'array',
              description: 'must be an array of strings'
            },
            key_features: {
              bsonType: 'array',
              description: 'must be an array of strings'
            }
          }
        }
      },
      validationAction: 'error'
    })
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a game item into collection', async () => {
    const games = db.collection('testGames');

    const testGame = {
      name: 'testGame',
      photo_url: 'testPhotoUrl',
      video_url: 'testVideoUrl',
      creators: ['testCreator1', 'testCreator2', 'testCreator3'],
      os_options: ['testOS1', 'testOS2', 'testOS3', 'testOS4'],
      description: 'this is a test description',
      gameplay: ['testGameplay1', 'testGameplay2', 'testGameplay3', 'testGameplay4'],
      key_features: ['testKeyFeatures1', 'testKeyFeatures2', 'testKeyFeatures3', 'testKeyFeatures4']
    };

    await games.insertOne(testGame);
    const insertedTestGame = await games.findOne({name: 'testGame'});
    expect(insertedTestGame).toEqual(testGame);
  });

  // it('should not insert a game item if missing required property', async () => {
  //   const games = db.collection('testGames');

  //   const invalidGame = {
  //     name: 'anotherTestGame',
  //     photo_url: undefined,
  //     video_url: 'testVideoUrl',
  //     creators: ['testCreator1', 'testCreator2', 'testCreator3'],
  //     os_options: ['testOS1', 'testOS2', 'testOS3', 'testOS4'],
  //     description: 'this is a test description',
  //     gameplay: ['testGameplay1', 'testGameplay2', 'testGameplay3', 'testGameplay4'],
  //     key_features: ['testKeyFeatures1', 'testKeyFeatures2', 'testKeyFeatures3', 'testKeyFeatures4']
  //   };

  //   await games.insertOne(invalidGame);
  //   const failedInvalidGameInsert = await games.find({name: 'anotherTestGame'});
  //   expect(failedInvalidGameInsert).toThrow();
  // });

});
