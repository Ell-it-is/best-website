import React, { useState } from 'react';

interface ContactFormData {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  agreedToConditions: boolean;
}

export const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
    agreedToConditions: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        agreedToConditions: (e.target as HTMLInputElement).checked
      }));
    } else if (id === 'name') {
      // Split full name into name and surname
      const nameParts = value.split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';
      
      setFormData(prev => ({
        ...prev,
        name: firstName,
        surname: lastName
      }));
    } else {
      // Map form field IDs to formData properties
      const fieldMapping: Record<string, keyof ContactFormData> = {
        'email': 'email',
        'phone': 'phoneNumber',
        'subject': 'subject',
        'message': 'message'
      };
      
      const fieldName = fieldMapping[id];
      if (fieldName) {
        setFormData(prev => ({
          ...prev,
          [fieldName]: value
        }));
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const response = await fetch('http://localhost:5127/api/ContactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/plain'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      
      // Reset form
      setFormData({
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        subject: '',
        message: '',
        agreedToConditions: false
      });
      
      // Show success message
      alert('Váš dotaz byl odeslán. Děkujeme!');
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error instanceof Error ? error.message : 'Došlo k chybě při odesílání formuláře.');
      alert('Došlo k chybě při odesílání formuláře. Zkuste to prosím později.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="parallax-bg"></div>
        <h1 className="animate-fade">Kontaktujte nás</h1>
        <p className="animate-fade animate-delay-1">
          Máte dotaz nebo potřebujete cenovou nabídku? Ozvěte se nám.
        </p>
      </section>

      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-card">
            <h3 className="card-title">Kontaktní údaje</h3>
            
            <div className="contact-detail">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                </svg>
              </div>
              <div>
                <h4>Adresa</h4>
                <p>Webová 123, 110 00 Praha 1</p>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"></path>
                </svg>
              </div>
              <div>
                <h4>E-mail</h4>
                <p><a href="mailto:info@weeby.cz">info@weeby.cz</a></p>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 00-1.02.24l-2.2 2.2a15.074 15.074 0 01-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 018.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path>
                </svg>
              </div>
              <div>
                <h4>Telefon</h4>
                <p><a href="tel:+420123456789">+420 123 456 789</a></p>
              </div>
            </div>
            
            <div className="contact-detail">
              <div className="icon">
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"></path>
                </svg>
              </div>
              <div>
                <h4>Otevírací doba</h4>
                <p>Po-Pá: 9:00 - 17:00</p>
              </div>
            </div>
            
            <div className="social-media">
              <h4>Najdete nás také na</h4>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 2.04a10 10 0 00-1.56 19.9v-6.96H7.9V12h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.98h-2.34v6.96A10 10 0 0012 2.04z"></path>
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a3.807 3.807 0 01-.919 1.382 3.807 3.807 0 01-1.382.919c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.803 4.803 0 01-1.772-1.153 4.803 4.803 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428.254-.66.598-1.216 1.153-1.772.5-.509 1.105-.902 1.772-1.153.637-.247 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10z"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4.77 0 1.4.63 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69-.93 0-1.69.76-1.69 1.69 0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-card">
            <h3 className="card-title">Napište nám</h3>
            {submitError && (
              <div className="error-message">
                <p>{submitError}</p>
              </div>
            )}
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Jméno a příjmení</label>
                <input 
                  type="text" 
                  id="name" 
                  value={formData.name + (formData.surname ? ' ' + formData.surname : '')}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Telefon</label>
                <input 
                  type="tel" 
                  id="phone" 
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Předmět</label>
                <input 
                  type="text" 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Zpráva</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <div className="form-group checkbox-group">
                <label>
                  <input 
                    type="checkbox" 
                    checked={formData.agreedToConditions}
                    onChange={handleChange}
                    required 
                  />
                  <span>Souhlasím se zpracováním osobních údajů</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="cta" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Odesílání...' : 'Odeslat zprávu'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <h2>Kde nás najdete</h2>
        <div className="map-wrapper">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.1082433814976!2d14.41888371571138!3d50.077615979427535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b94f4de4aa0fd%3A0x84ec04072dc470dc!2zTsOhbS4gTcOtcnUgMSwgMTEwIDAwIFN0YXLDqSBNxJtzdG8sIMSMZXNrbw!5e0!3m2!1scs!2scz!4v1652957563255!5m2!1scs!2scz" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa naší lokace"
          ></iframe>
        </div>
      </section>

      <section className="section">
        <h2>Časté dotazy</h2>
        
        <div className="cards">
          <div className="card gradient-card">
            <h3>Jak dlouho trvá vytvoření webových stránek?</h3>
            <p>Doba vytvoření webových stránek se liší podle složitosti projektu. Jednoduchý web můžeme mít hotový do týdne, komplexnější projekty mohou trvat 4-8 týdnů.</p>
          </div>
          
          <div className="card gradient-card">
            <h3>Kolik stojí webové stránky?</h3>
            <p>Cena webových stránek závisí na požadovaných funkcích, designu a rozsahu. Základní webové stránky začínají na 10 000 Kč. Pro přesnou cenovou nabídku nás kontaktujte.</p>
          </div>
          
          <div className="card gradient-card">
            <h3>Nabízíte i správu webu?</h3>
            <p>Ano, nabízíme komplexní správu webů včetně aktualizací obsahu, technické údržby, monitoringu výkonu a bezpečnostních aktualizací.</p>
          </div>
          
          <div className="card gradient-card">
            <h3>Pomůžete nám s optimalizací pro vyhledávače?</h3>
            <p>Ano, poskytujeme služby SEO optimalizace, které zahrnují analýzu klíčových slov, optimalizaci obsahu, technické SEO a budování zpětných odkazů.</p>
          </div>
        </div>
      </section>
    </>
  );
};
