const request = require('supertest');
const app = require('./app');

describe('Testando a Rota Principal', () => {
  it('Deve responder com status 200 e a mensagem correta', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('mensagem', 'Pipeline CI/CD funcionando!');
  });
});
