import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importar Link
import './Header.css'; // Importar los estilos

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Ajusta el valor según cuando quieras que el color cambie
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img 
          src="https://lh5.googleusercontent.com/Fi0_EXGYY9TAX5J543h5Tq4slX92n-OUsBSV-jDPiwyzhC_bjiw-AvnHZID5J-wAka6u981UsH0p28_cdv6MC5Q=w16383" 
          alt="Logo" 
        />
      </div>
      <nav className="nav">
        <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
          <li><Link to="/analisis">About</Link></li> {/* Enlace actualizado */}
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;