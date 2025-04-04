import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [futbol, setFutbol] = useState(null);
  const [basket, setBasket] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/api/futbol').then(res => setFutbol(res.data));
    axios.get('http://localhost:3001/api/basket').then(res => setBasket(res.data));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>📊 GolyCanasta - Estadísticas</h1>

      {futbol && (
        <div>
          <h2>⚽ Fútbol</h2>
          <p><strong>Partido:</strong> {futbol.equipo1} vs {futbol.equipo2}</p>
          <p><strong>Goles:</strong> {futbol.goles.join(" - ")}</p>
          <p><strong>Corners:</strong> {futbol.corners.join(" - ")}</p>
          <p><strong>Tarjetas:</strong> {futbol.tarjetas.join(" - ")}</p>
        </div>
      )}

      {basket && (
        <div>
          <h2>🏀 Baloncesto</h2>
          <p><strong>Partido:</strong> {basket.equipo1} vs {basket.equipo2}</p>
          <p><strong>Puntos:</strong> {basket.puntos.join(" - ")}</p>
          <p><strong>Jugador Destacado:</strong> {basket.jugadorDestacado}</p>
          <p><strong>Rebotes:</strong> {basket.rebotes}</p>
          <p><strong>Asistencias:</strong> {basket.asistencias}</p>
        </div>
      )}
    </div>
  );
};

export default App;