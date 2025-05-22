import React from 'react';
import { Link } from 'react-router-dom';

export const ServicesPage = () => {
  return (
    <>
      <section className="page-hero">
        <div className="parallax-bg"></div>
        <h1 className="animate-fade">Naše služby</h1>
        <p className="animate-fade animate-delay-1">
          Kompletní digitální řešení pro váš úspěšný byznys
        </p>
        <Link to="/kontakt" className="cta animate-fade animate-delay-2">
          Kontaktujte nás
        </Link>
      </section>

      <section className="services-detail">
        <h2>Co pro vás můžeme udělat</h2>
        
        <div className="service-item animate-on-scroll">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
            </svg>
          </div>
          <div className="service-content">
            <h3>Webový Design</h3>
            <p>
              Vytváříme webové stránky plně přizpůsobené vašim konkrétním potřebám, se zaměřením na moderní a atraktivní design, 
              který zaujme vaše zákazníky. Naše weby jsou:
            </p>
            <ul>
              <li>Responzivní - perfektně fungují na všech zařízeních</li>
              <li>Rychlé - optimalizované pro maximální výkon</li>
              <li>Přístupné - použitelné pro všechny uživatele</li>
              <li>SEO-friendly - připravené pro dobré umístění ve vyhledávačích</li>
            </ul>
            <Link to="/kontakt" className="btn-secondary">Zjistit více</Link>
          </div>
        </div>

        <div className="service-item animate-on-scroll">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
          </div>
          <div className="service-content">
            <h3>Tvorba AI Chat Asistentů</h3>
            <p>
              Vytváříme chytré a přívětivé AI asistenty, kteří automatizují zákaznickou podporu a zlepšují interakci se zákazníky. 
              Naši asistenti umí:
            </p>
            <ul>
              <li>Odpovídat na nejčastější dotazy zákazníků 24/7</li>
              <li>Pomáhat s výběrem produktů a služeb</li>
              <li>Sbírat zpětnou vazbu a kontaktní údaje</li>
              <li>Předávat složitější požadavky lidskému operátorovi</li>
            </ul>
            <Link to="/kontakt" className="btn-secondary">Zjistit více</Link>
          </div>
        </div>

        <div className="service-item animate-on-scroll">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
            </svg>
          </div>
          <div className="service-content">
            <h3>SEO a PPC Marketing</h3>
            <p>
              Pomáháme vašemu webu získat vyšší návštěvnost pomocí optimalizace pro vyhledávače a cílených reklamních kampaní.
              Naše služby zahrnují:
            </p>
            <ul>
              <li>Analýzu klíčových slov a konkurence</li>
              <li>Technické SEO a optimalizaci obsahu</li>
              <li>Tvorbu a správu PPC kampaní</li>
              <li>Pravidelné reporty a optimalizaci výsledků</li>
            </ul>
            <Link to="/kontakt" className="btn-secondary">Zjistit více</Link>
          </div>
        </div>

        <div className="service-item animate-on-scroll">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3h8c.55 0 1-.45 1-1s-.45-1-1-1H8c-2.76 0-5 2.24-5 5s2.24 5 5 5h8.5c.55 0 1-.45 1-1s-.45-1-1-1z" />
            </svg>
          </div>
          <div className="service-content">
            <h3>Správa Webů</h3>
            <p>
              Nabízíme správu webů, které jsme vytvořili, aby vaše online přítomnost byla vždy aktuální a fungovala bez problémů.
              V rámci správy zajišťujeme:
            </p>
            <ul>
              <li>Pravidelné aktualizace obsahu a systému</li>
              <li>Monitoring výkonu a bezpečnosti</li>
              <li>Zálohování a obnovu dat</li>
              <li>Technickou podporu při problémech</li>
            </ul>
            <Link to="/kontakt" className="btn-secondary">Zjistit více</Link>
          </div>
        </div>

        <div className="service-item animate-on-scroll">
          <div className="service-icon">
            <svg viewBox="0 0 24 24" width="48" height="48">
              <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0 1 12 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 0 0-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 0 1 2.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z" />
              <circle cx="6.5" cy="11.5" r="1.5" />
              <circle cx="9.5" cy="7.5" r="1.5" />
              <circle cx="14.5" cy="7.5" r="1.5" />
              <circle cx="17.5" cy="11.5" r="1.5" />
            </svg>
          </div>
          <div className="service-content">
            <h3>Branding a Grafika</h3>
            <p>
              Pomáháme budovat silnou značku a vizuální identitu, která vás odliší od konkurence.
              Naše grafické služby zahrnují:
            </p>
            <ul>
              <li>Návrh loga a vizuální identity</li>
              <li>Tvorbu propagačních materiálů</li>
              <li>Design pro sociální sítě</li>
              <li>Tiskové materiály a produktovou fotografii</li>
            </ul>
            <Link to="/kontakt" className="btn-secondary">Zjistit více</Link>
          </div>
        </div>
      </section>

      <section className="process-section">
        <h2>Jak pracujeme</h2>
        
        <div className="process-timeline">
          <div className="process-step animate-on-scroll">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3>Konzultace</h3>
              <p>Začínáme důkladnou konzultací, během které se seznámíme s vašimi potřebami, cíli a představami.</p>
            </div>
          </div>
          
          <div className="process-step animate-on-scroll">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3>Analýza a Plánování</h3>
              <p>Provedeme analýzu vašich požadavků a konkurence, stanovíme cíle a vytvoříme detailní plán projektu.</p>
            </div>
          </div>
          
          <div className="process-step animate-on-scroll">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3>Návrh</h3>
              <p>Vytvoříme návrh designu nebo koncept řešení, který s vámi konzultujeme a upravujeme podle vašich připomínek.</p>
            </div>
          </div>
          
          <div className="process-step animate-on-scroll">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3>Realizace</h3>
              <p>Implementujeme schválené řešení, programujeme funkce a připravujeme obsah.</p>
            </div>
          </div>
          
          <div className="process-step animate-on-scroll">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3>Testování</h3>
              <p>Důkladně testujeme všechny funkce, zajišťujeme kompatibilitu a optimalizujeme výkon.</p>
            </div>
          </div>
          
          <div className="process-step animate-on-scroll">
            <div className="step-number">6</div>
            <div className="step-content">
              <h3>Spuštění</h3>
              <p>Po finálním schválení spouštíme projekt do ostrého provozu a zajišťujeme hladký přechod.</p>
            </div>
          </div>
          
          <div className="process-step animate-on-scroll">
            <div className="step-number">7</div>
            <div className="step-content">
              <h3>Podpora a Údržba</h3>
              <p>Poskytujeme průběžnou podporu, údržbu a optimalizaci pro zajištění dlouhodobého úspěchu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <h2>Připraveni začít?</h2>
        <p>Kontaktujte nás pro nezávaznou konzultaci nebo cenovou nabídku</p>
        <Link to="/kontakt" className="cta">Kontaktujte nás</Link>
      </section>
    </>
  );
};
