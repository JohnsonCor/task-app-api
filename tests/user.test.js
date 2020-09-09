const request = require('supertest');
const app = require('../src/app');

test('should signup a new user', async () => {
  await request(app)
    .post('/users')
    .send({
      name: 'jest user',
      email: 'corey@jest.com',
      password: 'jest123',
    })
    .expect(201);
});
