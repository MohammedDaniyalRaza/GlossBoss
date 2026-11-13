import { useState, useEffect, useCallback } from 'react';
import { ArrowUpRight, Facebook, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery, facebook } from '@/data/site';

const categories = ['All', 'Exterior', 'Interior', 'Paint Protection', 'Wheels'];

export default function GalleryPage() {
  const [cat, setCat] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);
  const filtered = cat === 'All' ? gallery : gallery.filter((item) => item.category === cat);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox((i) => i === null ? null : (i - 1 + filtered.length) % filtered.length), [filtered.length]);
  const next = useCallback(() => setLightbox((i) => i === null ? null : (i + 1) % filtered.length), [filtered.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close, prev, next]);

  return <>
    <div className="page-hero">
      <img src="https://images.pexels.com/photos/6873191/pexels-photo-6873191.jpeg?auto=compress&cs=tinysrgb&h=600&w=1600" alt="Black luxury car being detailed" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-inner">
        <span className="breadcrumb">Home / Gallery</span>
        <h1>Gallery</h1>
        <p>Real vehicles. Real results. See the standard we hold ourselves to.</p>
      </div>
    </div>

    <section className="section gallery-page">
      <div className="container">
        <div className="filter-bar" role="tablist">
          {categories.map((c) => (
            <button key={c} role="tab" aria-selected={cat === c} className={cat === c ? 'active' : ''} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>
        <div className="gallery-grid">
          {filtered.map((item, i) => (
            <div key={item.title + item.category} className="gallery-item" onClick={() => setLightbox(i)} data-reveal>
              <img src={item.image} alt={item.title} />
              <div className="gallery-item-overlay"><span>{item.category}</span><p>{item.title}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <div className="social-strip">
      <a href={facebook} target="_blank" rel="noreferrer"><Facebook size={20} /> Follow us on Facebook for more <ArrowUpRight size={16} /></a>
    </div>

    {lightbox !== null && (
      <div className="lightbox" role="dialog" aria-modal="true" onClick={close}>
        <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
          <button className="lb-close" onClick={close} aria-label="Close"><X size={24} /></button>
          <button className="lb-prev" onClick={prev} aria-label="Previous"><ChevronLeft size={28} /></button>
          <img src={filtered[lightbox].image} alt={filtered[lightbox].title} />
          <button className="lb-next" onClick={next} aria-label="Next"><ChevronRight size={28} /></button>
          <div className="lb-caption"><span>{filtered[lightbox].category}</span><p>{filtered[lightbox].title}</p></div>
        </div>
      </div>
    )}
  </>;
}
