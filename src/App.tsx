import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ServicesPage } from './components/ServicesPage';
import { PricingPage } from './components/PricingPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { OfferModal } from './components/OfferModal';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app" style={{ width: '100%', maxWidth: '100vw', overflow: 'hidden' }}>
        <Navbar />
        <main style={{ width: '100%' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sluzby" element={<ServicesPage />} />
            <Route path="/cenik" element={<PricingPage />} />
            <Route path="/kontakt" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <OfferModal />
      </div>
    </Router>
  );
}

export default App;