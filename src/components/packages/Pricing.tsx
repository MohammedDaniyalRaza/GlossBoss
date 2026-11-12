import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Lightbulb, PawPrint, Wind } from 'lucide-react';
import { addOns, formatAddOnPrice, vehicleSizes, type PackageView, type ServicePackage } from '@/data/services';
import { useVehicleSize } from '@/context/vehicleSizeStore';
import { useAnimatedNumber } from '@/hooks/useAnimatedNumber';
import './packages.css';

const addOnIcons = {
  PawPrint: <PawPrint size={24} />,
  Lightbulb: <Lightbulb size={24} />,
  Wind: <Wind size={24} />,
};

function AnimatedPrice({ value }: { value: number }) {
  const displayed = useAnimatedNumber(value);
  return <span className="price-amount">${displayed}</span>;
}

function useActiveView(pkg: ServicePackage) {
  const [viewId, setViewId] = useState(pkg.views[0].id);
  const view: PackageView = pkg.views.find((item) => item.id === viewId) ?? pkg.views[0];
  return { view, setViewId };
}

function ViewTabs({ views, activeId, onChange }: { views: PackageView[]; activeId: string; onChange: (id: string) => void }) {
  return (
    <div className="view-tabs" role="group" aria-label="Choose package focus">
      {views.map((item) => (
        <button key={item.id} type="button" aria-pressed={activeId === item.id} onClick={() => onChange(item.id)}>
          {item.label}
        </button>
      ))}
    </div>
  );
}

export function VehicleSizeSelector() {
  const { size, setSize } = useVehicleSize();
  return (
    <div className="size-selector" role="group" aria-label="Vehicle size">
      {vehicleSizes.map((option) => (
        <button
          key={option.id}
          type="button"
          className={`size-pill ${size === option.id ? 'is-active' : ''}`}
          aria-pressed={size === option.id}
          onClick={() => setSize(option.id)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function PackageCard({ pkg, index }: { pkg: ServicePackage; index: number }) {
  const { size } = useVehicleSize();
  const { view, setViewId } = useActiveView(pkg);
  const sizeLabel = vehicleSizes.find((option) => option.id === size)?.label;
  return (
    <article className={`price-card ${pkg.featured ? 'price-card--featured' : ''}`} data-reveal>
      <span className="price-card__shine" aria-hidden="true" />
      <div className="price-card__top">
        <span className="price-card__number">0{index + 1}</span>
        {pkg.badge && <span className="price-badge">{pkg.badge}</span>}
      </div>
      <h3>{pkg.name}</h3>
      <p className="price-card__tagline">{pkg.tagline}</p>
      {pkg.views.length > 1 && <ViewTabs views={pkg.views} activeId={view.id} onChange={setViewId} />}
      <div className="price-card__price">
        <AnimatedPrice value={pkg.prices[size]} />
        <span>for {sizeLabel}</span>
      </div>
      <ul className="included-list">
        {view.included.map((item) => <li key={item}><Check size={16} />{item}</li>)}
      </ul>
      <Link className={`button ${pkg.featured ? 'button--gold' : 'button--silver'} button--full`} to={`/contact?service=${view.bookingId}`}>
        Book This Package <ArrowUpRight size={17} />
      </Link>
    </article>
  );
}

export function PackageRow({ pkg, index }: { pkg: ServicePackage; index: number }) {
  const { size, setSize } = useVehicleSize();
  const { view, setViewId } = useActiveView(pkg);
  return (
    <div className={`pkg-row ${index % 2 === 1 ? 'pkg-row--flip' : ''} ${pkg.featured ? 'pkg-row--featured' : ''}`} data-reveal>
      <div className="pkg-row__img">
        <img src={view.image} alt={pkg.name} />
      </div>
      <div className="pkg-row__content">
        <div className="price-card__top">
          <span className="price-card__number">0{index + 1}</span>
          {pkg.badge && <span className="price-badge">{pkg.badge}</span>}
        </div>
        <h2>{pkg.name}</h2>
        <p>{pkg.tagline}</p>
        {pkg.views.length > 1 && <ViewTabs views={pkg.views} activeId={view.id} onChange={setViewId} />}
        <ul className="included-list">
          {view.included.map((item) => <li key={item}><Check size={16} />{item}</li>)}
        </ul>
        <table className="price-table">
          <tbody>
            {vehicleSizes.map((option) => (
              <tr key={option.id} className={size === option.id ? 'is-active' : ''} onClick={() => setSize(option.id)}>
                <th scope="row">{option.label}</th>
                <td>${pkg.prices[option.id]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className={`button ${pkg.featured ? 'button--gold' : 'button--outline'}`} to={`/contact?service=${view.bookingId}`}>
          Book This Package <ArrowUpRight size={17} />
        </Link>
      </div>
    </div>
  );
}

export function AddOnsGrid() {
  return (
    <div className="addon-grid">
      {addOns.map((addOn) => (
        <div className="addon-card" key={addOn.id} data-reveal>
          <span className="addon-icon">{addOnIcons[addOn.icon]}</span>
          <h3>{addOn.name}</h3>
          <p>{addOn.note}</p>
          <strong>{formatAddOnPrice(addOn)}</strong>
        </div>
      ))}
    </div>
  );
}

export { AnimatedPrice };
