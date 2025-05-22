
import { useState, useEffect } from 'react';

export const OfferModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openOfferModal', handleOpen);
    return () => window.removeEventListener('openOfferModal', handleOpen);
  }, []);

  return (
    <div className={`modal ${isOpen ? 'active' : ''}`} id="offerModal">
      <div className="modal-content">
        <span className="close-modal" onClick={() => setIsOpen(false)}>
          ×
        </span>
        <h2>Nezávazná poptávka</h2>
        <form id="offerForm" onSubmit={(e) => {
          e.preventDefault();
          // Add form submission logic here
        }}>
          <label htmlFor="name">Jméno</label>
          <input id="name" type="text" required />

          <label htmlFor="company">Společnost</label>
          <input id="company" type="text" />

          <label htmlFor="email">E‑mail</label>
          <input id="email" type="email" required />

          <label htmlFor="phone">Telefon</label>
          <input id="phone" type="tel" />

          <label htmlFor="work">Rozsah práce</label>
          <textarea id="work" rows={4}></textarea>

          <button type="submit">Odeslat</button>
        </form>
      </div>
    </div>
  );
};