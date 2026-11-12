import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

export function usePremiumMotion() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lenis = reduced ? null : new Lenis({ lerp: 0.08, smoothWheel: true });
    let frame = 0;
    const tick = (time: number) => { lenis?.raf(time); frame = requestAnimationFrame(tick); };
    if (lenis) frame = requestAnimationFrame(tick);
    const context = gsap.context(() => {
      if (!reduced) {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.fromTo(element, { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
        });
        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => gsap.to(element, { yPercent: -10, ease: 'none', scrollTrigger: { trigger: element, scrub: true } }));
        gsap.utils.toArray<HTMLElement>('.gear').forEach((element) => gsap.to(element, { rotation: 360, ease: 'none', scrollTrigger: { trigger: element, scrub: 1.2 } }));
        gsap.utils.toArray<HTMLElement>('.section-heading h2, .page-hero h1').forEach((element) => gsap.fromTo(element, { letterSpacing: '0.025em' }, { letterSpacing: '-0.025em', duration: 1, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 90%', once: true } }));
      }
    });
    return () => { cancelAnimationFrame(frame); context.revert(); lenis?.destroy(); ScrollTrigger.refresh(); };
  }, []);
}
