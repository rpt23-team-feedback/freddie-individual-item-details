const app = require('../../app');
const request = require('supertest');

describe('API routes', () => {

  it('should have a status code of 200 for a valid single game ID', async (done) => {
    const res = await request(app).get('/games/single/300');
    expect(res.statusCode).toBe(200);
    done();
  });

  it('should have a status code of 400 for an invalid single game ID', async (done) => {
    const res = await request(app).get('/games/single/301');
    expect(res.statusCode).toBe(400);
    done();
  });

  it('should have a status code of 200 for multiple valid game ID\'s', async (done) => {
    const res = await request(app).get('/games/multiple?tier1=1&tier1=2&tier2=3&tier2=4');
    expect(res.statusCode).toBe(200);
    done();
  });

  it('should have a status code of 400 for multiple invalid game ID\'s', async (done) => {
    const res = await request(app).get('/games/multiple/?tier1=301&tier1=302&tier2=303&tier2=304');
    expect(res.statusCode).toBe(400);
    done();
  });

});
