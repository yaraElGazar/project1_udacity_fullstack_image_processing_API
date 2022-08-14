import app from '../index';
import supertest from 'supertest';

const request = supertest(app);

describe('Test endpoint responses: /api', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api');
    expect(response.status).toBe(200);
  });
});

describe('Test endpoint responses: /api/images', () => {
  it('gets api/images', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(200);
  });
});

describe('Test endpoint responses: Wrong path', () => {
  it('gives error', async () => {
    const response = await request.get('/api/photo');
    expect(response.status).toBe(404);
  });
});
