import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import weebyLogo from '../assets/weeby-logo.png';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src={weebyLogo} alt="weeby logo" />
      </div>

      <button 
        className="burger" 
        aria-label="Toggle menu"
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={isMenuOpen ? 'active' : ''}>
        <ul>
          <li>
            <Link 
              to="/" 
              aria-current={location.pathname === '/' ? 'page' : undefined}
            >
              O nás
            </Link>
          </li>
          <li>
            <Link 
              to="/sluzby"
              aria-current={location.pathname === '/sluzby' ? 'page' : undefined}
            >
              Služby
            </Link>
          </li>
          <li>
            <Link 
              to="/cenik"
              aria-current={location.pathname === '/cenik' ? 'page' : undefined}
            >
              Ceník
            </Link>
          </li>
          <li>
            <Link 
              to="/kontakt"
              aria-current={location.pathname === '/kontakt' ? 'page' : undefined}
            >
              Kontakt
            </Link>
          </li>
          <li>
            <a className="cta-link" href="#" onClick={() => window.dispatchEvent(new CustomEvent('openOfferModal'))}>
              Poptat nabídku
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};