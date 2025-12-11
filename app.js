const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Practica Final</title>
    </head>
    <body>
      <h1>Hola Mundo, hola ITLA!!</h1>
      <p>Aplicacion DevOps CI/CD</p>
    </body>
    </html>
  `);
});

// API endpoint
app.get('/api/saludo', (req, res) => {
  res.json({ 
    mensaje: 'Esta es la practica final!!',
    timestamp: new Date().toISOString()
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Función para testing
function sumar(a, b) {
  return a + b;
}

// Exportar para tests
module.exports = { app, sumar };

// Iniciar servidor
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`);
  });
}