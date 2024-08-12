import React from 'react';
import './Home.css'; // Importar los estilos específicos para Home

function Home() {
  return (
    <div className="home">
      <section className="intro">
        <h1>Bienvenido a Nuestra Página</h1>
        <p>Ofrecemos los mejores servicios para ti.</p>
        <button>Descubre Más</button>
      </section>
      <section className="features">
        <h2>Características</h2>
        <div className="feature-item">
          <h3>Característica 1</h3>
          <p>Descripción de la característica 1.</p>
        </div>
        <div className="feature-item">
          <h3>Característica 2</h3>
          <p>Descripción de la característica 2.</p>
        </div>
        <div className="feature-item">
          <h3>Característica 3</h3>
          <p>Descripción de la característica 3.</p>
        </div>
      </section>
      <section className="cta">
        <h2>¡Contáctanos!</h2>
        <p>Para más información, no dudes en ponerte en contacto con nosotros.</p>
        <button>Contacta con Nosotros</button>
      </section>
    </div>
  );
}

export default Home;
