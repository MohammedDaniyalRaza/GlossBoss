import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Facebook, Menu, Phone, X } from 'lucide-react';
import { facebook, email, phoneDisplay, phoneHref } from '@/data/site';
import { bookingOptions } from '@/data/services';
import { usePremiumMotion } from '@/hooks/usePremiumMotion';

const nav = [['Home', '/'], ['Services', '/services'], ['About', '/about'], ['Gallery', '/gallery'], ['Reviews', '/reviews'], ['Contact', '/contact']];

function Brand({ compact = false }: { compact?: boolean }) {
  return <Link to="/" className={`brand ${compact ? 'brand--compact' : ''}`} aria-label="Gloss Boss home"><img src="/assets/images/gloss-boss-logo.webp" alt="Gloss Boss Mobile Detailing logo" /></Link>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  usePremiumMotion();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); setMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => { const timer = window.setTimeout(() => setLoaded(true), 900); return () => window.clearTimeout(timer); }, []);
  return <div className="site-shell">
    {!loaded && <div className="preloader"><div className="preloader__shine" /><Brand compact /><span className="preloader__drop">◆</span></div>}
    <div className="scroll-progress" />
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}><Brand compact /><nav className="desktop-nav">{nav.map(([label, path]) => <NavLink key={path} to={path} className={({ isActive }) => isActive ? 'active' : ''}>{label}</NavLink>)}</nav><div className="header-actions"><a className="header-phone" href={phoneHref}><Phone size={15} /> {phoneDisplay}</a><Link className="button button--gold button--small" to="/contact">Book Now <ArrowUpRight size={15} /></Link></div><button className="menu-button" onClick={() => setMenuOpen(true)} aria-label="Open menu"><Menu /></button></header>
    <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}><div className="mobile-menu__top"><Brand compact /><button onClick={() => setMenuOpen(false)} aria-label="Close menu"><X /></button></div><nav>{nav.map(([label, path], index) => <Link style={{ transitionDelay: `${index * 50}ms` }} key={path} to={path} onClick={() => setMenuOpen(false)}>{label}<ArrowUpRight size={20} /></Link>)}</nav><a className="button button--gold mobile-menu__call" href={phoneHref}><Phone size={17} /> Call {phoneDisplay}</a></div>
    <main>{children}</main>
    <footer className="footer"><div className="wing-divider" /><div className="footer__ghost">GLOSS BOSS</div><div className="container footer__grid"><div><Brand /><p className="footer__intro">Premium mobile detailing, brought to your driveway in Red Oak, Texas and surrounding areas.</p><a className="social" href={facebook} target="_blank" rel="noreferrer"><Facebook size={18} /> Follow on Facebook</a></div><div><span className="eyebrow">Explore</span>{nav.slice(1, 5).map(([label, path]) => <Link key={path} to={path}>{label}</Link>)}</div><div><span className="eyebrow">Services</span>{bookingOptions.map((option) => <Link key={option.id} to="/services">{option.label}</Link>)}</div><div><span className="eyebrow">Get in touch</span><a href={phoneHref}>{phoneDisplay}</a><a href={`mailto:${email}`}>{email}</a><span>Red Oak, Texas</span></div></div><div className="container footer__bottom"><span>© {new Date().getFullYear()} Gloss Mobile Detailing</span><span>Made to make your car feel new.</span></div></footer>
    <div className="mobile-bar"><a href={phoneHref}><Phone size={16} /> Call Now</a><Link to="/contact"><ArrowUpRight size={16} /> Book Detail</Link></div>
  </div>;
}
