const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/futbol', (req, res) => {
  res.json({
    equipo1: "Equipo A",
    equipo2: "Equipo B",
    goles: [2, 1],
    corners: [5, 3],
    tarjetas: [1, 2]
  });
});

app.get('/api/basket', (req, res) => {
  res.json({
    equipo1: "Equipo C",
    equipo2: "Equipo D",
    puntos: [98, 102],
    jugadorDestacado: "Jugador X",
    rebotes: 12,
    asistencias: 8
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});