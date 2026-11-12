import { ArrowUpRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { comparisonRows, packages } from '@/data/services';
import { CTA, SectionHeading } from '@/components/sections/Shared';
import { AddOnsGrid, AnimatedPrice, PackageRow, VehicleSizeSelector } from '@/components/packages/Pricing';
import { useVehicleSize } from '@/context/vehicleSizeStore';

function CompCell({ value }: { value: boolean | string }) {
  if (value === true) return <Check size={18} className="check-yes" />;
  if (value === false) return <span className="check-no">—</span>;
  return <span className="comp-text">{value}</span>;
}

export default function ServicesPage() {
  const { size } = useVehicleSize();
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

    <section className="section section--navy services-list">
      <div className="container">
        <SectionHeading light eyebrow="Choose your vehicle" title={<>Pick your size, <em>see your price.</em></>} copy="Prices update instantly for the vehicle size you select." />
        <VehicleSizeSelector />
        <div className="pkg-list">
          {packages.map((pkg, index) => <PackageRow key={pkg.id} pkg={pkg} index={index} />)}
        </div>
      </div>
    </section>

    <section className="section section--silver">
      <div className="container">
        <SectionHeading eyebrow="Specialty add-ons" title={<>Make it <em>yours.</em></>} copy="Add these to any package when you book." />
        <AddOnsGrid />
      </div>
    </section>

    <section className="section section--navy comparison">
      <div className="container">
        <SectionHeading light eyebrow="Compare packages" title={<>Find your <em>right fit.</em></>} copy="Every vehicle is different. Here is a simple guide to what each package includes." />
        <div className="comp-table-wrap">
          <table className="comp-table">
            <thead>
              <tr>
                <th></th>
                {packages.map((pkg) => (
                  <th key={pkg.id} className={pkg.featured ? 'featured' : ''}>
                    {pkg.badge && <span className="featured-badge">{pkg.badge}</span>}
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Price for selected size</td>
                {packages.map((pkg) => (
                  <td key={pkg.id} className={pkg.featured ? 'featured' : ''}><AnimatedPrice value={pkg.prices[size]} /></td>
                ))}
              </tr>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <td>{row.label}</td>
                  {row.values.map((value, i) => (
                    <td key={`${row.label}-${i}`} className={packages[i].featured ? 'featured' : ''}><CompCell value={value} /></td>
                  ))}
                </tr>
              ))}
              <tr className="cta-row">
                <td></td>
                {packages.map((pkg) => (
                  <td key={`${pkg.id}-cta`} className={pkg.featured ? 'featured' : ''}>
                    <Link to={`/contact?service=${pkg.views[0].bookingId}`} className={`button ${pkg.featured ? 'button--gold' : 'button--outline'} button--small`}>
                      Book This Package <ArrowUpRight size={14} />
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <CTA />
  </>;
}
