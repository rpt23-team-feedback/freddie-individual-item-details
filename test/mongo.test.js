const mongoose = require('mongoose');

describe('Game model', () => {

  beforeAll((done) => {
    mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });
    mongoose.connection.once('open', () => {
      done();
    })
    .on('error', err => {
      console.log('Error connecting to db:', err);
    })
  })

  // afterAll( async (done) => {
  //   //await mongoose.connection.close();
  //   done();
  // })

  describe('random test', () => {
    test('it should be a random test', (done) => {
      const myObj = {firstName: 'Freddie', lastName: 'Perez'};
      expect(myObj).toBeDefined();
      done();
    })
  });

  // describe('getSingleGame', () => {
  //   test('it should return a single game document using gameId property', async (done) => {
  //     const singleGame = await db.getSingleGame({'gameId': 5});
  //     expect(singleGame).toBeDefined();
  //     done();
  //   })
  // })
// check schema not mongoose, define error routes - does front end handle the error
// error if gameId exist or gameId 5 doesn't exist for example
// look into tree shaking for webpack - google page speed
});
