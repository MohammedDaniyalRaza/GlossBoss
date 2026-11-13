import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Gem, MapPin, Phone, ShieldCheck, Sparkles, Wrench } from 'lucide-react';
import { reviews, faqs, phoneDisplay, phoneHref, gallery } from '@/data/site';
import { addOns, bookingOptions, packages } from '@/data/services';
import { CTA, AreaStrip, SectionHeading, Stars } from '@/components/sections/Shared';
import { AddOnsGrid, PackageCard, VehicleSizeSelector } from '@/components/packages/Pricing';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-headline .word', { y: 60, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power4.out', delay: 0.3 });
      gsap.from('.hero-sub', { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.9 });
      gsap.from('.hero-buttons', { y: 20, opacity: 0, duration: 0.6, ease: 'power3.out', delay: 1.1 });
      gsap.from('.hero-chip', { y: 10, opacity: 0, stagger: 0.1, duration: 0.5, delay: 1.3 });
      gsap.from('.drop', { y: -30, opacity: 0, stagger: 0.3, duration: 1.2, repeat: -1, ease: 'power2.in', yoyo: false });
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="hero">
      <img src="https://images.pexels.com/photos/6873191/pexels-photo-6873191.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600" alt="Luxury car getting a professional foam wash" className="hero-img" />
      <div className="hero-gradient" />
      <div className="hero-drops"><span className="drop" /><span className="drop" /><span className="drop" /></div>
      <div className="hero-stars"><span className="hstar" /><span className="hstar" /><span className="hstar" /></div>
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-kicker">Mobile detailing / Red Oak, Texas</span>
          <h1 className="hero-headline">
            <span className="word">SHINE</span>
            <span className="word">LIKE <strong>A BOSS.</strong></span>
          </h1>
          <p className="hero-sub">Premium mobile detailing that comes to your driveway in Red Oak and nearby — no drive, no wait, just results.</p>
          <div className="hero-buttons">
            <Link className="button button--gold" to="/contact">Book Your Detail <ArrowUpRight size={17} /></Link>
            <a className="button button--silver" href={phoneHref}><Phone size={17} /> Call {phoneDisplay}</a>
          </div>
          <div className="hero-chips">
            <span className="hero-chip">We Come To You</span>
            <span className="hero-chip">Premium Products</span>
            <span className="hero-chip">Showroom Finish</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const labels = [...bookingOptions.map((option) => option.label), ...addOns.map((addOn) => addOn.name)];
  const doubled = [...labels, ...labels];
  return (
    <div className="marquee-wrap"><div className="marquee-track">{doubled.map((label, i) => <span key={i}><Wrench size={14} className="gear" />{label}</span>)}</div></div>
  );
}

function PackagesSection() {
  return (
    <section className="section section--navy packages-section">
      <div className="container">
        <SectionHeading light eyebrow="Our packages" title={<>Three packages. <em>Real pricing.</em></>} copy="Choose your vehicle size and every price updates instantly." />
        <VehicleSizeSelector />
        <div className="price-grid">
          {packages.map((pkg, index) => <PackageCard key={pkg.id} pkg={pkg} index={index} />)}
        </div>
      </div>
    </section>
  );
}

function AddOnsStrip() {
  return (
    <section className="section section--silver">
      <div className="container">
        <SectionHeading eyebrow="Specialty add-ons" title={<>Add a <em>finishing touch.</em></>} copy="Pair any package with these specialty services." />
        <AddOnsGrid />
        <div className="center-link">
          <Link className="button button--outline" to="/services">See full details <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: '01', title: 'Book Your Detail', copy: 'Tell us your vehicle, your preferred service, and where you are. We handle the scheduling.' },
    { n: '02', title: 'We Arrive at Your Location', copy: 'Rumaldo and the team show up with everything needed — equipment, supplies, and expertise.' },
    { n: '03', title: 'Drive Away Gleaming', copy: 'Hand off the keys and get back to your day. When we are done, your car is showroom-ready.' },
  ];
  return (
    <section className="section hiw">
      <div className="container hiw-grid">
        <div data-reveal>
          <span className="eyebrow">How it works</span>
          <h2>Three steps. <em>No hassle.</em></h2>
        </div>
        <div className="hiw-steps">
          <div className="hiw-line" />
          {steps.map((step) => (
            <div className="hiw-step" key={step.n} data-reveal>
              <span className="hiw-num">{step.n}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter() {
  const [drag, setDrag] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDrag(Math.min(100, Math.max(0, ((x - rect.left) / rect.width) * 100)));
  };
  return (
    <section className="section ba-section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">See the difference</span>
          <h2>Before & <em>After.</em></h2>
        </div>
        <div className="ba-slider" ref={ref} onMouseMove={onMove} onTouchMove={onMove}>
          <img className="ba-after" src="https://images.pexels.com/photos/6873079/pexels-photo-6873079.jpeg?auto=compress&cs=tinysrgb&h=600&w=940" alt="Car after professional detailing" />
          <div className="ba-before-wrap" style={{ width: `${drag}%` }}>
            <img className="ba-before" src="https://images.pexels.com/photos/4870739/pexels-photo-4870739.jpeg?auto=compress&cs=tinysrgb&h=600&w=940" alt="Car before detailing" />
          </div>
          <div className="ba-handle" style={{ left: `${drag}%` }}><span>◀ ▶</span></div>
          <span className="ba-label ba-label--before">Before</span>
          <span className="ba-label ba-label--after">After</span>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const cards = [
    { icon: <MapPin />, title: 'Mobile Convenience', copy: 'Your driveway, your schedule. No trip to a shop, no waiting room.' },
    { icon: <Gem />, title: 'Premium Products', copy: 'Professional-grade supplies that protect your investment and enhance the finish.' },
    { icon: <Sparkles />, title: 'Attention to Detail', copy: 'We work through every surface methodically, not just the parts that show.' },
    { icon: <ShieldCheck />, title: 'Satisfaction Focused', copy: 'We are not done until you are genuinely happy with what you see.' },
  ];
  return (
    <section className="section why-section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">Why choose Gloss Boss</span>
          <h2>Built on <em>the right reasons.</em></h2>
        </div>
        <div className="shield-grid">
          {cards.map((card) => (
            <div className="shield-card" key={card.title} data-reveal>
              <div className="shield-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryTeaser() {
  return (
    <section className="section gallery-teaser">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">The work speaks</span>
          <h2>Fresh out of <em>the detail.</em></h2>
        </div>
        <div className="gallery-teaser-grid">
          {gallery.slice(0, 6).map((item) => (
            <div className="gallery-teaser-card" key={item.title} data-reveal>
              <img src={item.image} alt={item.title} />
              <div className="gallery-teaser-info"><span>{item.category}</span><p>{item.title}</p></div>
            </div>
          ))}
        </div>
        <div className="center-link">
          <Link className="button button--gold" to="/gallery">View full gallery <ArrowUpRight size={17} /></Link>
        </div>
      </div>
    </section>
  );
}

function ReviewsCarousel() {
  const [index] = useState(0);
  const visible = reviews.slice(index, index + 3);
  while (visible.length < 3) visible.push(reviews[visible.length % reviews.length]);
  return (
    <section className="section reviews-carousel">
      <div className="container">
        <div className="section-heading" data-reveal><span className="eyebrow">What people say</span><h2>Earned, not <em>invented.</em></h2></div>
        <div className="carousel-grid">
          {reviews.slice(0, 3).map((review, i) => (
            <div className="review-card" key={i} data-reveal>
              <Stars /><p>"{review.text}"</p><div className="review-author"><strong>{review.name}</strong><span>{review.service}</span></div>
            </div>
          ))}
        </div>
        <div className="center-link"><Link className="button button--outline" to="/reviews">All reviews <ArrowUpRight size={17} /></Link></div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section section--navy faq-section">
      <div className="container split-section">
        <div data-reveal><span className="eyebrow">Good to know</span><h2>Questions, <em>answered.</em></h2></div>
        <div className="faq-list">
          {faqs.map(([question, answer], i) => (
            <div className={`faq-item ${open === i ? 'is-open' : ''}`} key={i}>
              <button onClick={() => setOpen(open === i ? null : i)}>
                <span>{question}</span><span className="faq-chevron">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq-answer"><p>{answer}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return <>
    <HeroSection />
    <Marquee />
    <PackagesSection />
    <AddOnsStrip />
    <HowItWorks />
    <BeforeAfter />
    <WhyUs />
    <GalleryTeaser />
    <AreaStrip />
    <ReviewsCarousel />
    <HomeFAQ />
    <CTA />
  </>;
}
