import { useState } from 'react';
import { ArrowUpRight, CheckCircle, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { email, facebook, phoneDisplay, phoneHref, services } from '@/data/site';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', emailVal: '', vehicle: '', service: '', date: '', city: '', message: '' });
  const [focused, setFocused] = useState<Record<string, boolean>>({});

  const handle = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const infoCards = [
    { icon: <Phone size={22} />, title: 'Call us', value: phoneDisplay, href: phoneHref, label: 'Tap to call' },
    { icon: <Mail size={22} />, title: 'Email us', value: email, href: `mailto:${email}`, label: 'Send an email' },
    { icon: <MapPin size={22} />, title: 'Service area', value: 'Red Oak, TX and surrounding areas', href: undefined, label: undefined },
    { icon: <Facebook size={22} />, title: 'Facebook', value: 'Gloss Mobile Detailing Co.', href: facebook, label: 'Visit our page' },
  ];

  const steps = ['Request your detail using the form or by phone', 'We confirm your appointment and details', 'We show up ready at your location', 'You drive away with a fresh finish'];

  return <>
    <div className="page-hero page-hero--short">
      <img src="https://images.pexels.com/photos/6873010/pexels-photo-6873010.jpeg?auto=compress&cs=tinysrgb&h=400&w=1600" alt="Car being washed" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-inner">
        <span className="breadcrumb">Home / Contact</span>
        <h1>Book Your Detail</h1>
        <p>Tell us about your vehicle and we will take care of the rest.</p>
      </div>
    </div>

    <section className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-info">
          <span className="eyebrow">Get in touch</span>
          <h2>Let's get your <em>car shining.</em></h2>
          <div className="info-cards">
            {infoCards.map((card) => (
              <div className="info-card" key={card.title}>
                <div className="info-card-icon">{card.icon}</div>
                <div>
                  <span className="info-card-title">{card.title}</span>
                  {card.href ? <a href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{card.value} <ArrowUpRight size={14} /></a> : <span>{card.value}</span>}
                </div>
              </div>
            ))}
          </div>
          <div className="booking-steps">
            <span className="eyebrow">How booking works</span>
            {steps.map((step, i) => (
              <div className="booking-step" key={step}>
                <span className="booking-step-num">0{i + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="success-state">
              <CheckCircle size={56} className="success-icon" />
              <h3>Request Received!</h3>
              <p>Thank you for reaching out. We will be in touch shortly to confirm your appointment details.</p>
              <button className="button button--gold" onClick={() => setSubmitted(false)}>Submit another <ArrowUpRight size={16} /></button>
            </div>
          ) : (
            <form className="booking-form" onSubmit={submit} noValidate>
              <div className="booking-form__top"><div><span className="eyebrow">Start your shine</span><h3>Request a Quote</h3></div><span className="form-note">We reply personally</span></div>
              <div className="form-fields-grid">
                {[
                  { key: 'name', label: 'Full Name', type: 'text', required: true },
                  { key: 'phone', label: 'Phone Number', type: 'tel', required: true },
                  { key: 'emailVal', label: 'Email Address', type: 'email', required: true },
                  { key: 'vehicle', label: 'Vehicle Year, Make & Model', type: 'text', required: true },
                ].map(({ key, label, type, required }) => (
                  <div className={`form-field ${(focused[key] || form[key as keyof typeof form]) ? 'has-value' : ''}`} key={key}>
                    <input type={type} required={required} value={form[key as keyof typeof form]} onChange={handle(key)} onFocus={() => setFocused({ ...focused, [key]: true })} onBlur={() => setFocused({ ...focused, [key]: false })} id={key} />
                    <label htmlFor={key}>{label}</label>
                  </div>
                ))}
              </div>
              <div className="form-fields-grid form-fields-grid--selects">
                <div className={`form-field ${(focused['service'] || form.service) ? 'has-value' : ''}`}>
                  <select required value={form.service} onChange={handle('service')} onFocus={() => setFocused({ ...focused, service: true })} onBlur={() => setFocused({ ...focused, service: false })} id="service">
                    <option value="" disabled> </option>
                    {services.map((s) => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                  <label htmlFor="service">Service Requested</label>
                </div>
                <div className={`form-field ${(focused['date'] || form.date) ? 'has-value' : ''}`}>
                  <input type="date" value={form.date} onChange={handle('date')} onFocus={() => setFocused({ ...focused, date: true })} onBlur={() => setFocused({ ...focused, date: false })} id="date" />
                  <label htmlFor="date">Preferred Date</label>
                </div>
              </div>
              <div className={`form-field ${(focused['city'] || form.city) ? 'has-value' : ''}`}>
                <input type="text" value={form.city} onChange={handle('city')} onFocus={() => setFocused({ ...focused, city: true })} onBlur={() => setFocused({ ...focused, city: false })} id="city" placeholder=" " />
                <label htmlFor="city">City / Location in Service Area</label>
              </div>
              <div className={`form-field ${(focused['message'] || form.message) ? 'has-value' : ''}`}>
                <textarea rows={4} value={form.message} onChange={handle('message')} onFocus={() => setFocused({ ...focused, message: true })} onBlur={() => setFocused({ ...focused, message: false })} id="message" />
                <label htmlFor="message">Anything else we should know?</label>
              </div>
              <button type="submit" className="button button--gold button--full">Send Request <ArrowUpRight size={17} /></button>
            </form>
          )}
        </div>
      </div>
    </section>
  </>;
}
