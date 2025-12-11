const request = require('supertest');
const { app, sumar } = require('./app');

describe('Pruebas de la aplicacion', () => {
  
  describe('Funcion sumar', () => {
    test('debe sumar dos numeros correctamente', () => {
      expect(sumar(2, 3)).toBe(5);
      expect(sumar(10, 20)).toBe(30);
      expect(sumar(-5, 5)).toBe(0);
    });
  });

  // Test de endpoints
  describe('GET /', () => {
    test('debe devolver la pagina principal', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).toBe(200);
      expect(response.headers['content-type']).toMatch(/html/);
    });
  });

  describe('GET /api/saludo', () => {
    test('debe devolver un JSON con mensaje de saludo', async () => {
      const response = await request(app).get('/api/saludo');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('mensaje');
      expect(response.body).toHaveProperty('timestamp');
      expect(response.body).toHaveProperty('ambiente');
      expect(response.body.mensaje).toContain('Hola Mundo');
    });
  });

  describe('GET /api/health', () => {
    test('debe devolver estado OK del servidor', async () => {
      const response = await request(app).get('/api/health');
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('status', 'OK');
      expect(response.body).toHaveProperty('uptime');
    });
  });

});