import { ArrowUpRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { phoneDisplay, phoneHref } from '@/data/site';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="eyebrow">Off the map</span>
        <p className="not-found__code" aria-hidden="true">404</p>
        <h1>This page <em>isn't shining.</em></h1>
        <p className="not-found__copy">We could not find the page you were looking for. Head back home, or give us a call and we will help you book your detail.</p>
        <div className="not-found__actions">
          <Link className="button button--gold" to="/">Back to Home <ArrowUpRight size={17} /></Link>
          <a className="button button--outline" href={phoneHref}><Phone size={17} /> Call {phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
