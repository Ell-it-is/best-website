import React from 'react';
import { Link } from 'react-router-dom';

export const PricingPage = () => {
  const handlePricingRequest = (plan: string) => {
    // Open offer modal with the selected plan
    window.dispatchEvent(new CustomEvent('openOfferModal', { 
      detail: { selectedPlan: plan }
    }));
  };

  return (
    <>
      <section className="page-hero">
        <div className="parallax-bg"></div>
        <h1 className="animate-fade">Ceník služeb</h1>
        <p className="animate-fade animate-delay-1">
          Transparentní a férové ceny – vyberte si balíček, který nejlépe vyhovuje vašim potřebám.
        </p>
      </section>

      <section className="pricing">
        <div className="pricing-grid">
          {/* BASE */}
          <article className="price-card">
            <div className="price-icon">✂️</div>
            <h3>Webový design <strong>BASE</strong></h3>
            <div className="price">10 000 Kč</div>
            <div className="per">jednorázově</div>
            <ul className="features">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Mobilní design
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Responzivní design
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Kontaktní formulář + Captcha
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Individuální design
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Nahrání obsahu na web
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M19 12h-14v-2h14v2zm0 4h-14v-2h14v2zm0-8h-14v-2h14v2z" fill="#0891b2"></path>
                </svg>
                Maximum 3 stránky
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2z" fill="#dc2626"></path>
                </svg>
                Nastavení cookies
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2z" fill="#dc2626"></path>
                </svg>
                SEO Optimalizace
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M19 13H5v-2h14v2z" fill="#dc2626"></path>
                </svg>
                Prioritní podpora
              </li>
            </ul>
            <button className="btn-price" onClick={() => handlePricingRequest('Base')}>Poptat</button>
          </article>

          {/* PLUS */}
          <article className="price-card">
            <div className="price-icon">⏫</div>
            <h3>Webový design <strong>PLUS</strong></h3>
            <div className="price">15 000 Kč</div>
            <div className="per">jednorázově</div>
            <ul className="features">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Mobilní design
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Responzivní design
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Kontaktní formulář + Captcha
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Individuální design
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Nahrání obsahu na web
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M19 12h-14v-2h14v2zm0 4h-14v-2h14v2zm0-8h-14v-2h14v2z" fill="#0891b2"></path>
                </svg>
                Maximum 5 stránek
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Nastavení cookies
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                SEO Optimalizace
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Prioritní podpora
              </li>
            </ul>
            <button className="btn-price" onClick={() => handlePricingRequest('Plus')}>Poptat</button>
          </article>

          {/* SPRÁVA WEBU */}
          <article className="price-card">
            <div className="price-icon">🔧</div>
            <h3>Správa vašeho <strong>webu</strong></h3>
            <div className="price">od 1 500 Kč</div>
            <div className="per">/ 3 měs.</div>
            <ul className="features">
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Pravidelné zálohy
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Pravidelné kontroly výkonu
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Aktualizace
              </li>
              <li>
                <svg viewBox="0 0 24 24">
                  <path d="M20.285 6.708l-11.4 11.398-5.657-5.657 1.414-1.414 4.243 4.243 9.986-9.985z" fill="#16a34a"></path>
                </svg>
                Bezpečnostní monitoring
              </li>
            </ul>
            <button className="btn-price" onClick={() => handlePricingRequest('Správa')}>Poptat</button>
          </article>
        </div>
      </section>
    </>
  );
};
