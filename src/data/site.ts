export const phoneHref = 'tel:+12146053417';
export const phoneDisplay = '(214) 605-3417';
export const email = 'rumaldom2121@gmail.com';
export const facebook = 'https://www.facebook.com/p/Gloss-Mobile-Detailing-Co-61583592973663/';

export type Service = { title: string; short: string; description: string; image: string; icon: string; included: string[] };

export const services: Service[] = [
  { title: 'Exterior Wash & Hand Dry', short: 'A careful reset for your paint.', description: 'A meticulous wash that lifts road film and leaves every panel clean, glossy, and carefully hand-dried.', image: 'https://images.pexels.com/photos/6873079/pexels-photo-6873079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Droplets', included: ['pH-balanced foam wash', 'Wheel faces and tires', 'Hand dry with plush towels'] },
  { title: 'Interior Deep Cleaning', short: 'A cabin that feels brand new.', description: 'We get into the places everyday cleaning misses, refreshing surfaces, seats, carpets, and the details you touch most.', image: 'https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Sparkles', included: ['Thorough vacuum and crevice work', 'Dash, console, and trim care', 'Glass cleaned streak-free'] },
  { title: 'Full Detail Package', short: 'The complete inside-out refresh.', description: 'Our most balanced service for drivers who want the whole vehicle reset with the same attention from roofline to floor mats.', image: 'https://images.pexels.com/photos/5233271/pexels-photo-5233271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'ShieldCheck', included: ['Exterior wash and hand dry', 'Interior deep clean', 'Wheels, tires, and finishing touches'] },
  { title: 'Paint Polishing & Shine', short: 'Bring back the reflection.', description: 'Paint-safe polishing refines the finish, softens the look of light imperfections, and helps your color pop again.', image: 'https://images.pexels.com/photos/6872158/pexels-photo-6872158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'SunMedium', included: ['Paint inspection', 'Machine polish where appropriate', 'Final gloss inspection'] },
  { title: 'Wax & Paint Protection', short: 'Gloss that stays with you.', description: 'A smooth protective finish that enhances shine and gives your freshly cleaned paint an extra layer of care.', image: 'https://images.pexels.com/photos/14231668/pexels-photo-14231668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Gem', included: ['Surface prep', 'Even wax application', 'Buffed to a clean finish'] },
  { title: 'Wheel & Tire Cleaning', short: 'Details that ground the look.', description: 'Brake dust, grime, and tire residue get a focused clean so your wheels finish the vehicle properly.', image: 'https://images.pexels.com/photos/7154623/pexels-photo-7154623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'CircleDot', included: ['Wheel face and barrel clean', 'Tire scrub and dressing', 'Final wheel detail'] },
  { title: 'Headlight Restoration', short: 'Clearer light. Cleaner look.', description: 'A focused restoration for hazy headlights, helping improve the front-end appearance and bring back clarity.', image: 'https://images.pexels.com/photos/6872158/pexels-photo-6872158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Lightbulb', included: ['Headlight assessment', 'Surface refinement', 'Clear protective finish'] },
  { title: 'Pet Hair & Odor Removal', short: 'A fresher cabin for every passenger.', description: 'Targeted, patient cleaning for stubborn fur, everyday odors, and the traces pets leave behind.', image: 'https://images.pexels.com/photos/6873015/pexels-photo-6873015.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', icon: 'Wind', included: ['Hair removal by surface', 'Odor-focused cleaning', 'Fresh interior finish'] },
];

export const gallery = [
  { title: 'Foam & finish', category: 'Exterior', image: 'https://images.pexels.com/photos/6873079/pexels-photo-6873079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Clean lines', category: 'Exterior', image: 'https://images.pexels.com/photos/6872158/pexels-photo-6872158.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Cabin reset', category: 'Interior', image: 'https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Precision clean', category: 'Interior', image: 'https://images.pexels.com/photos/5233285/pexels-photo-5233285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Gloss in motion', category: 'Paint Polishing', image: 'https://images.pexels.com/photos/14231668/pexels-photo-14231668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Mirror clarity', category: 'Paint Polishing', image: 'https://images.pexels.com/photos/4492044/pexels-photo-4492044.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Wheel finish', category: 'Wheels', image: 'https://images.pexels.com/photos/7154623/pexels-photo-7154623.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'The final pass', category: 'Wheels', image: 'https://images.pexels.com/photos/6872147/pexels-photo-6872147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Hand-finished', category: 'Exterior', image: 'https://images.pexels.com/photos/6872146/pexels-photo-6872146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Fresh perspective', category: 'Interior', image: 'https://images.pexels.com/photos/7192155/pexels-photo-7192155.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Deep shine', category: 'Paint Polishing', image: 'https://images.pexels.com/photos/5233271/pexels-photo-5233271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
  { title: 'Rubber to rim', category: 'Wheels', image: 'https://images.pexels.com/photos/7154618/pexels-photo-7154618.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' },
];

export const reviews = [
  { name: 'Marcus T.', service: 'Full Detail Package', text: 'Rumaldo brought the whole setup to my driveway and the car looked better than the day I bought it. The interior work was especially impressive.' },
  { name: 'Jasmine R.', service: 'Interior Deep Cleaning', text: 'Exactly the kind of careful service I was hoping for. Every little surface feels fresh, and booking was simple from start to finish.' },
  { name: 'Daniel W.', service: 'Exterior Wash & Hand Dry', text: 'The finish is incredible. You can tell Gloss Boss cares about the details instead of rushing through a wash.' },
  { name: 'Carlos M.', service: 'Paint Polishing & Shine', text: 'My black paint has its reflection back. Professional, friendly, and clear about what the vehicle needed.' },
  { name: 'Brittany S.', service: 'Pet Hair & Odor Removal', text: 'We had a serious pet hair situation. The cabin feels comfortable again and the lingering smell is gone.' },
  { name: 'Ethan P.', service: 'Wheel & Tire Cleaning', text: 'The wheels look sharp and the tires have that clean finish without being overdone. Great mobile experience.' },
  { name: 'Nina L.', service: 'Full Detail Package', text: 'Convenience without sacrificing quality. I got to keep working from home while my car got the boss treatment.' },
  { name: 'Andre K.', service: 'Wax & Paint Protection', text: 'The gloss is deep and the water beads beautifully. I will absolutely book again.' },
  { name: 'Tanya G.', service: 'Headlight Restoration', text: 'A small service that made a huge difference in how the front of my car looks. Fantastic attention to detail.' },
];

export const faqs = [
  ['Do you need water or power at my location?', 'We can work with the setup available at your location. Share a little about your driveway or workplace when you request a quote and we will guide you.'],
  ['How long does a detail take?', 'Timing depends on the vehicle and the service. We will give you a clear time window when we confirm your booking.'],
  ['What areas do you serve?', 'Gloss Boss is based in Red Oak and serves Red Oak and surrounding communities including Waxahachie, Ovilla, Midlothian, DeSoto, Lancaster, Cedar Hill, Duncanville, Glenn Heights, Ennis, and nearby areas.'],
  ['How do I book?', 'Use the booking form, call (214) 605-3417, or email rumaldom2121@gmail.com. We will follow up to confirm the details.'],
  ['What is the difference between interior and full detail?', 'Interior Deep Cleaning focuses on the cabin. Full Detail combines a thorough interior reset with a careful exterior wash and finishing work.'],
  ['Do you remove pet hair?', 'Yes. Pet hair and odor removal is available as a focused service or can be added to a larger detail.'],
  ['How can I pay?', 'Payment details are confirmed when your appointment is scheduled.'],
];
