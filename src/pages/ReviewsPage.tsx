import { Star } from 'lucide-react';
import { reviews } from '@/data/site';
import { CTA, Stars } from '@/components/sections/Shared';

export default function ReviewsPage() {
  return <>
    <div className="page-hero">
      <img src="https://images.pexels.com/photos/6872146/pexels-photo-6872146.jpeg?auto=compress&cs=tinysrgb&h=600&w=1600" alt="Professional car detailing work" />
      <div className="page-hero-overlay" />
      <div className="container page-hero-inner">
        <span className="breadcrumb">Home / Reviews</span>
        <h1>Reviews</h1>
        <p>Honest feedback from real customers in Red Oak and surrounding areas.</p>
      </div>
    </div>

    <section className="section reviews-page">
      <div className="container">
        <div className="rating-summary" data-reveal>
          <div className="rating-number">5.0</div>
          <div>
            <div className="stars"><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /><Star fill="currentColor" /></div>
            <span>Based on customer reviews</span>
          </div>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <div className="review-card" key={review.name} data-reveal>
              <Stars />
              <p>"{review.text}"</p>
              <div className="review-author"><strong>{review.name}</strong><span>{review.service}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <CTA />
  </>;
}
