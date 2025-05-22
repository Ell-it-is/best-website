import { Link } from 'react-router-dom';
import { ServiceCard } from './ServiceCard';
import { TestimonialCard } from './TestimonialCard';

export const HomePage = () => {
    return (
        <>
            <section className="page-hero">
                <div className="parallax-bg"></div>
                <h1 className="animate-fade">Vytváříme digitální zážitky</h1>
                <p className="animate-fade animate-delay-1">
                    Moderní weby, grafika a marketing – rychle, kvalitně a cenově dostupně
                    pro restaurace, hotely i farmy.
                </p>
                <Link to="/kontakt" className="cta animate-fade animate-delay-2">
                    Kontaktujte nás
                </Link>
            </section>

            <section className="services">
                <div className="grid">
                    <ServiceCard
                        title="Webový Design"
                        description="Vytváříme webové stránky plně přizpůsobené vašim konkrétním
            potřebám, se zaměřením na moderní a atraktivní design, který zaujme
            vaše zákazníky."
                    />
                    <ServiceCard
                        title="Tvorba AI Chat Asistentů"
                        description="Vytváříme chytré a přívětivé AI asistenty, kteří automatizují
            zákaznickou podporu a zlepšují interakci se zákazníky."
                    />
                    <ServiceCard
                        title="Správa Webů"
                        description="Nabízíme správu webů, které jsme vytvořili, aby vaše online
            přítomnost byla vždy aktuální a fungovala bez problémů."
                    />
                </div>
            </section>

            <section className="benefits-section">
                <div className="grid">
                    <ServiceCard
                        title="Rychlý start projektu"
                        description="První verzi webu máte během týdne – čas jsou peníze."
                        additionalClass="animate-fade animate-delay-1"
                    />
                    <ServiceCard
                        title="Kreativní grafický design"
                        description="Čistá typografie a moderní vizuál, který zaujme."
                        additionalClass="animate-fade animate-delay-2"
                    />
                    <ServiceCard
                        title="Kompletní správa webu"
                        description="Obsah, aktualizace i bezpečnost necháte na nás."
                        additionalClass="animate-fade animate-delay-2"
                    />
                </div>
            </section>

            <section className="section" id="about">
                <h2>O nás</h2>
                <p>
                    Jsme tým kreativních profesionálů, kteří milují minimalismus a rychlá
                    řešení. Díky automatizaci a moderním nástrojům dokážeme nabídnout
                    špičkovou kvalitu za zlomek ceny.
                </p>
            </section>

            <section className="testimonials-section">
                <h2>Naši klienti</h2>
                <div className="testimonial-grid">
                    <TestimonialCard
                        content="Spolupráce s týmem weeby předčila naše očekávání. Nový web přinesl zvýšení návštěvnosti o 43% a výrazně zlepšil konverze. Vřele doporučuji jejich služby každému, kdo hledá profesionální a moderní webové řešení."
                        author="Jan Novák"
                        position="Ředitel, Restaurace U Novotných"
                        image="https://randomuser.me/api/portraits/men/32.jpg"
                    />
                    <TestimonialCard
                        content="Tým weeby dokázal přenést naši vizi do reality. Web je rychlý, responzivní a přesně odpovídá našim potřebám. Oceňuji jejich profesionální přístup a kreativní řešení."
                        author="Marie Dvořáková"
                        position="Marketingová ředitelka, Hotel Vyšehrad"
                        image="https://randomuser.me/api/portraits/women/44.jpg"
                    />
                    <TestimonialCard
                        content="Díky AI chatbotu od weeby jsme automatizovali 70% běžných dotazů zákazníků a výrazně zlepšili zákaznickou zkušenost. Asistent funguje 24/7 a ušetří nám spoustu času."
                        author="Petr Svoboda"
                        position="Majitel, Farma Krasolesí"
                        image="https://randomuser.me/api/portraits/men/67.jpg"
                    />
                </div>
            </section>
        </>
    );
};