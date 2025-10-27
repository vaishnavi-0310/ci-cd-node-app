const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with JSON and status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Hello from CI/CD demo!');
    expect(res.body).toHaveProperty('uptime');
  });
});
