const request = require('supertest');
const { app, sumar } = require('./app');

describe('Pruebas Hola Mundo', () => {
  
  test('Función sumar debe funcionar', () => {
    expect(sumar(2, 3)).toBe(5);
  });

  test('GET / debe devolver HTML', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hola Mundo');
  });

  test('GET /api/saludo debe devolver JSON', async () => {
    const response = await request(app).get('/api/saludo');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('mensaje');
    expect(response.body).toHaveProperty('timestamp');
    expect(typeof response.body.mensaje).toBe('string');
  });

  test('GET /api/health debe retornar OK', async () => {
    const response = await request(app).get('/api/health');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('OK');
  });

});