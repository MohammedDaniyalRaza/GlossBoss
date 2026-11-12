import { ArrowUpRight, Check, Droplets, Gem, Lightbulb, ShieldCheck, Sparkles, SunMedium, Wind, CircleDot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '@/data/site';
import { CTA, SectionHeading } from '@/components/sections/Shared';

const iconMap: Record<string, React.ReactNode> = {
  Droplets: <Droplets size={24} />, Sparkles: <Sparkles size={24} />, ShieldCheck: <ShieldCheck size={24} />, SunMedium: <SunMedium size={24} />,
  Gem: <Gem size={24} />, CircleDot: <CircleDot size={24} />, Lightbulb: <Lightbulb size={24} />, Wind: <Wind size={24} />,
};

const packages = [
  { name: 'Express Shine', items: { 'Exterior wash': true, 'Hand dry': true, 'Wheels & tires': true, 'Interior vacuum': false, 'Dashboard wipe': false, 'Paint polish': false, 'Wax & protection': false } },
  { name: 'Full Detail', items: { 'Exterior wash': true, 'Hand dry': true, 'Wheels & tires': true, 'Interior vacuum': true, 'Dashboard wipe': true, 'Paint polish': false, 'Wax & protection': false }, featured: true },
  { name: 'Showroom Package', items: { 'Exterior wash': true, 'Hand dry': true, 'Wheels & tires': true, 'Interior vacuum': true, 'Dashboard wipe': true, 'Paint polish': true, 'Wax & protection': true } },
];
const compRows = Object.keys(packages[0].items);

export default function ServicesPage() {
  return <>
    <div className="page-hero">
      <img src="https://images.pexels.com/photos/6873010/pexels-photo-6873010.jpeg?auto=compress&cs=tinysrgb&h=600&w=1600" alt="Professional car wash service" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-inner">
        <span className="breadcrumb">Home / Services</span>
        <h1>Our Services</h1>
        <p>Professional mobile detailing — every option listed, nothing hidden.</p>
      </div>
    </div>

    <section className="section services-list">
      <div className="container">
        {services.map((service, index) => (
          <div className={`service-row ${index % 2 === 1 ? 'service-row--flip' : ''}`} key={service.title} data-reveal>
            <div className="service-row__img"><img src={service.image} alt={service.title} /></div>
            <div className="service-row__content">
              <span className="service-num">0{index + 1}</span>
              <span className="eyebrow">Service</span>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <ul className="service-includes">
                {service.included.map((item) => <li key={item}><Check size={16} />{item}</li>)}
              </ul>
              <Link className="button button--gold" to="/contact">Get a Quote <ArrowUpRight size={17} /></Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="section section--navy comparison">
      <div className="container">
        <SectionHeading light eyebrow="Compare packages" title={<>Find your <em>right fit.</em></>} copy="Every vehicle is different. Here is a simple guide to what each package includes." />
        <div className="comp-table-wrap">
          <table className="comp-table">
            <thead>
              <tr><th></th>{packages.map((p) => <th key={p.name} className={p.featured ? 'featured' : ''}>{p.featured && <span className="featured-badge">Most Popular</span>}{p.name}</th>)}</tr>
            </thead>
            <tbody>
              {compRows.map((row) => (
                <tr key={row}>
                  <td>{row}</td>
                  {packages.map((p) => <td key={p.name + row} className={p.featured ? 'featured' : ''}>{p.items[row as keyof typeof p.items] ? <Check size={18} className="check-yes" /> : <span className="check-no">—</span>}</td>)}
                </tr>
              ))}
              <tr className="cta-row">
                <td></td>
                {packages.map((p) => <td key={p.name + 'cta'} className={p.featured ? 'featured' : ''}><Link to="/contact" className={`button ${p.featured ? 'button--gold' : 'button--outline'} button--small`}>Request quote <ArrowUpRight size={14} /></Link></td>)}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <CTA />
  </>;
}
