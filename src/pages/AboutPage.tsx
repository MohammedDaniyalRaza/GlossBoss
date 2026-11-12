import { ArrowUpRight, Heart, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA } from '@/components/sections/Shared';

const values = [
  { icon: <Star size={28} />, title: 'Quality', copy: 'We do not rush. Every vehicle gets the same level of care and attention, regardless of size or condition.' },
  { icon: <Shield size={28} />, title: 'Convenience', copy: 'The whole idea behind Gloss Boss is that professional care should come to you, not the other way around.' },
  { icon: <Heart size={28} />, title: 'Trust', copy: 'We work at your home or workplace. That is a responsibility we take seriously.' },
];

const tools = ['pH-balanced foam soap', 'Microfiber wash mitts', 'Plush drying towels', 'Machine polisher', 'Detail brushes', 'Upholstery extractors', 'Plastic & trim dressings', 'Tire & wheel cleaner'];

export default function AboutPage() {
  return <>
    <div className="page-hero">
      <img src="https://images.pexels.com/photos/6873119/pexels-photo-6873119.jpeg?auto=compress&cs=tinysrgb&h=600&w=1600" alt="Professional detailing work on a white car" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-inner">
        <span className="breadcrumb">Home / About</span>
        <h1>About Gloss Boss</h1>
        <p>Mobile detailing rooted in Red Oak, Texas.</p>
      </div>
    </div>

    <section className="section about-story">
      <div className="container story-grid">
        <div data-reveal>
          <span className="eyebrow">The story</span>
          <h2>Mobile detailing <em>the right way.</em></h2>
          <p>Gloss Boss was started by Rumaldo Miranda with a clear goal: bring professional car care directly to the people who need it, without making them drive across town and wait in a lobby. As a mobile operation based in Red Oak, Texas, we show up equipped and ready wherever your vehicle is parked.</p>
          <p>The name Gloss Boss reflects the standard we hold ourselves to. This is not a quick rinse operation. We work through every surface with premium products, real techniques, and a mindset that says a job is finished when the vehicle actually looks its best, not just cleaner than it was.</p>
          <p>Every customer is treated as a long-term relationship. We want you to call back when it is time for the next detail, and we want that to happen because the last one was done right.</p>
          <Link className="button button--gold" to="/contact">Work with us <ArrowUpRight size={17} /></Link>
        </div>
        <div className="about-img-block" data-parallax>
          <img src="https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&h=800&w=700" alt="Detailer cleaning car interior" />
          <div className="about-img-badge"><span className="about-badge-icon">✦</span><strong>Red Oak, TX</strong><span>and surrounding areas</span></div>
        </div>
      </div>
    </section>

    <section className="section section--navy values-section">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="eyebrow">What we stand on</span>
          <h2>Three values. <em>Non-negotiable.</em></h2>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div className="value-card" key={v.title} data-reveal>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section tools-section">
      <div className="container tools-grid">
        <div data-reveal>
          <span className="eyebrow">What we bring</span>
          <h2>Tools and <em>products that deliver.</em></h2>
          <p>We show up with everything needed to complete the job properly. No borrowed garden hoses, no diluted products. Just professional-grade equipment and supplies that work.</p>
        </div>
        <ul className="tools-list">
          {tools.map((tool) => <li key={tool}><span className="tool-dot">✦</span>{tool}</li>)}
        </ul>
      </div>
    </section>

    <div className="parallax-banner">
      <img src="https://images.pexels.com/photos/4870739/pexels-photo-4870739.jpeg?auto=compress&cs=tinysrgb&h=600&w=1600" alt="Car covered in foam during wash" data-parallax />
      <div className="parallax-banner-overlay">
        <blockquote>"We don't stop until your car is something you are genuinely proud to drive away in."</blockquote>
        <cite>— Rumaldo Miranda, Owner</cite>
      </div>
    </div>

    <CTA />
  </>;
}
