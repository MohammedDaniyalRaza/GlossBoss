export const vehicleSizes = [
  { id: 'sedan', label: 'Sedan / Coupe' },
  { id: 'midsize', label: 'Mid-Size SUV / Crossover' },
  { id: 'fullsize', label: 'Full-Size Truck / SUV / Van' },
] as const;

export type VehicleSize = (typeof vehicleSizes)[number]['id'];

export const bookingOptions = [
  { id: 'elite-maintenance', label: 'Elite Maintenance Detail' },
  { id: 'comprehensive-interior', label: 'Comprehensive Interior Detail' },
  { id: 'comprehensive-exterior', label: 'Comprehensive Exterior Detail' },
  { id: 'elite-signature-reset', label: 'Elite Signature Reset' },
] as const;

export type BookingId = (typeof bookingOptions)[number]['id'];

export type PackageView = {
  id: string;
  label: string;
  bookingId: BookingId;
  image: string;
  included: string[];
};

export type ServicePackage = {
  id: string;
  name: string;
  tagline: string;
  prices: Record<VehicleSize, number>;
  views: PackageView[];
  badge?: string;
  featured?: boolean;
};

export const packages: ServicePackage[] = [
  {
    id: 'elite-maintenance',
    name: 'Elite Maintenance Detail',
    tagline: 'Perfect for routine upkeep to keep your vehicle looking fresh.',
    prices: { sedan: 95, midsize: 130, fullsize: 165 },
    views: [
      {
        id: 'maintenance',
        label: 'What is included',
        bookingId: 'elite-maintenance',
        image: 'https://images.pexels.com/photos/6873079/pexels-photo-6873079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        included: [
          'Complete exterior hand wash & gentle dry',
          'Wheels, tires, and wheel wells cleaned & tire dressing applied',
          'Thorough interior vacuuming (seats, carpets, trunk)',
          'Complete wipe-down of all hard interior surfaces',
          'Crystal-clear interior & exterior glass cleaning',
          'Door jambs cleaned & dried',
        ],
      },
    ],
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive Interior OR Exterior Detail',
    tagline: 'Deep restoration targeting either full interior revival or exterior paint shine & protection.',
    prices: { sedan: 185, midsize: 230, fullsize: 280 },
    views: [
      {
        id: 'interior',
        label: 'Comprehensive Interior',
        bookingId: 'comprehensive-interior',
        image: 'https://images.pexels.com/photos/5233264/pexels-photo-5233264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        included: [
          'Deep seat & carpet steam cleaning and extraction',
          'Full leather cleaning & conditioning',
          'Detailed crack & crevice purge',
          'UV protection on all dash and door trim',
        ],
      },
      {
        id: 'exterior',
        label: 'Comprehensive Exterior',
        bookingId: 'comprehensive-exterior',
        image: 'https://images.pexels.com/photos/14231668/pexels-photo-14231668.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        included: [
          'Chemical & clay bar paint decontamination to remove embedded grime',
          'Light gloss enhancement polish',
          'Durable paint sealant',
          'Deep rim & tire detailing',
        ],
      },
    ],
  },
  {
    id: 'elite-signature-reset',
    name: 'Elite Signature Reset',
    tagline: 'Our flagship, top-to-bottom bumper-to-bumper vehicle transformation.',
    prices: { sedan: 315, midsize: 395, fullsize: 475 },
    badge: 'Flagship · Most Complete',
    featured: true,
    views: [
      {
        id: 'signature',
        label: 'What is included',
        bookingId: 'elite-signature-reset',
        image: 'https://images.pexels.com/photos/5233271/pexels-photo-5233271.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        included: [
          'Full Comprehensive Interior package',
          'Full Comprehensive Exterior package',
          'Complete protection, shine, and interior deep-cleaning',
        ],
      },
    ],
  },
];

export type AddOn = {
  id: string;
  name: string;
  from: number;
  to?: number;
  unit?: string;
  note: string;
  icon: 'PawPrint' | 'Lightbulb' | 'Wind';
};

export const addOns: AddOn[] = [
  { id: 'pet-hair', name: 'Pet Hair Removal', from: 35, to: 65, note: 'Priced by severity', icon: 'PawPrint' },
  { id: 'headlight', name: 'Headlight Restoration', from: 75, unit: 'per pair', note: 'Clearer, brighter headlights', icon: 'Lightbulb' },
  { id: 'ozone', name: 'Ozone Odor Elimination', from: 60, note: 'Treatment to eliminate lingering odors', icon: 'Wind' },
];

export function formatAddOnPrice(addOn: AddOn) {
  const range = addOn.to ? `$${addOn.from} – $${addOn.to}` : `$${addOn.from}`;
  return addOn.unit ? `${range} ${addOn.unit}` : range;
}

export const comparisonRows: { label: string; values: [boolean | string, boolean | string, boolean | string] }[] = [
  { label: 'Exterior hand wash & gentle dry', values: [true, false, false] },
  { label: 'Wheels, tires & wheel wells', values: [true, 'Exterior focus', true] },
  { label: 'Thorough interior vacuuming', values: [true, false, false] },
  { label: 'Deep seat & carpet steam extraction', values: [false, 'Interior focus', true] },
  { label: 'Full leather cleaning & conditioning', values: [false, 'Interior focus', true] },
  { label: 'UV protection on dash & door trim', values: [false, 'Interior focus', true] },
  { label: 'Clay bar paint decontamination', values: [false, 'Exterior focus', true] },
  { label: 'Light gloss enhancement polish', values: [false, 'Exterior focus', true] },
  { label: 'Durable paint sealant', values: [false, 'Exterior focus', true] },
  { label: 'Glass cleaning & door jambs', values: [true, false, false] },
];
