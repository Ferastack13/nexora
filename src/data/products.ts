export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: number;
  accent: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
  highlights: { title: string; body: string }[];
  badge?: string;
};

export const products: Product[] = [
  {
    slug: "nexora-one",
    name: "NEXORA ONE",
    tagline: "Engineered Beyond Expectations",
    description:
      "Our flagship intelligence platform. Aerospace-grade titanium, adaptive neural processing, and a display calibrated for absolute clarity.",
    category: "smartphones",
    price: 1299,
    accent: "#3B82F6",
    image: "/products/nexora-one.png",
    badge: "Flagship",
    features: [
      "NX Neural Engine X1",
      "ProMotion Infinity Display",
      "Titanium UniBody Frame",
      "48MP Adaptive Optics",
    ],
    specs: [
      { label: "Display", value: '6.8" LTPO OLED · 1–120Hz' },
      { label: "Processor", value: "NX Neural Engine X1" },
      { label: "Battery", value: "5000mAh · 65W HyperCharge" },
      { label: "Camera", value: "48MP Triple Adaptive Optics" },
      { label: "Materials", value: "Grade-5 Titanium · Ceramic Glass" },
      { label: "Storage", value: "256GB / 512GB / 1TB" },
    ],
    highlights: [
      {
        title: "Neural Processing",
        body: "On-device intelligence that learns your patterns without compromising privacy.",
      },
      {
        title: "Optical System",
        body: "Computational photography engineered for low light, motion, and cinematic color.",
      },
      {
        title: "All-Day Power",
        body: "Adaptive power management that extends endurance without throttling performance.",
      },
    ],
  },
  {
    slug: "nexora-pulse",
    name: "NEXORA PULSE",
    tagline: "Silence, Perfected",
    description:
      "Spatial audio earbuds with adaptive ANC and a precision-machined aluminum shell.",
    category: "audio",
    price: 279,
    accent: "#94A3B8",
    image: "/products/nexora-pulse.png",
    badge: "New",
    features: [
      "Adaptive ANC 3.0",
      "Spatial Audio Engine",
      "36-Hour Total Play",
      "Precision Aluminum Shell",
    ],
    specs: [
      { label: "Drivers", value: "11mm Dual Balanced Armature" },
      { label: "ANC", value: "Adaptive Hybrid · −45dB" },
      { label: "Battery", value: "8h + 28h Case" },
      { label: "Codecs", value: "LDAC · AAC · SBC" },
      { label: "IP Rating", value: "IP54" },
      { label: "Charging", value: "USB-C · Wireless" },
    ],
    highlights: [
      {
        title: "Adaptive Silence",
        body: "Real-time environmental mapping adjusts noise cancellation to every space.",
      },
      {
        title: "Spatial Stage",
        body: "Head-tracked spatial audio that places instruments with room-scale precision.",
      },
    ],
  },
  {
    slug: "nexora-apex",
    name: "NEXORA APEX",
    tagline: "Intelligence on Your Wrist",
    description:
      "A precision smartwatch with medical-grade sensors and a sapphire crystal face.",
    category: "wearables",
    price: 599,
    accent: "#60A5FA",
    image: "/products/nexora-apex.png",
    features: [
      "Sapphire Crystal Display",
      "Health Suite Pro",
      "Titanium Link Band",
      "7-Day Endurance Mode",
    ],
    specs: [
      { label: "Display", value: '1.9" Always-On Sapphire' },
      { label: "Sensors", value: "ECG · SpO2 · Temp · HRV" },
      { label: "Battery", value: "Up to 7 days" },
      { label: "Materials", value: "Titanium · Ceramic Back" },
      { label: "Water", value: "5ATM · IP68" },
      { label: "Connectivity", value: "LTE · GPS · Bluetooth 5.4" },
    ],
    highlights: [
      {
        title: "Health Intelligence",
        body: "Continuous biometric insight with clinical-grade accuracy and privacy-first processing.",
      },
      {
        title: "Crafted Endurance",
        body: "Low-power architecture that lasts through training cycles and travel weeks.",
      },
    ],
  },
  {
    slug: "nexora-resonance",
    name: "NEXORA RESONANCE",
    tagline: "Architecture of Sound",
    description:
      "A wireless speaker system designed as an object of industrial art — and engineered as a studio instrument.",
    category: "audio",
    price: 899,
    accent: "#E5E7EB",
    image: "/products/nexora-resonance.png",
    features: [
      "360° Acoustic Array",
      "Room Calibration AI",
      "Machined Aluminum Body",
      "Multi-Room Mesh",
    ],
    specs: [
      { label: "Output", value: "120W Peak · Dual Sub" },
      { label: "Freq. Range", value: "35Hz – 22kHz" },
      { label: "Connectivity", value: "Wi-Fi 6E · BT 5.3 · AirPlay" },
      { label: "Materials", value: "CNC Aluminum · Acoustic Fabric" },
      { label: "Battery", value: "18 Hours Portable" },
      { label: "Calibration", value: "Auto Room Scan" },
    ],
    highlights: [
      {
        title: "Room Intelligence",
        body: "Microphones map your space and reshape frequency response for architectural accuracy.",
      },
    ],
  },
  {
    slug: "nexora-habitat",
    name: "NEXORA HABITAT",
    tagline: "The Intelligent Home Core",
    description:
      "A central hub that unifies lighting, climate, security, and energy into one silent system.",
    category: "smart-home",
    price: 449,
    accent: "#3B82F6",
    image: "/products/nexora-habitat.png",
    features: [
      "Matter & Thread Native",
      "On-Device Privacy Hub",
      "Energy Intelligence",
      "Voice + Gesture Control",
    ],
    specs: [
      { label: "Protocols", value: "Matter · Thread · Zigbee · Wi-Fi 6" },
      { label: "Compute", value: "NX Edge NPU" },
      { label: "Privacy", value: "Local-first processing" },
      { label: "Power", value: "PoE · USB-C" },
      { label: "Storage", value: "Encrypted local vault" },
      { label: "Form", value: "Minimal wall / desk mount" },
    ],
    highlights: [
      {
        title: "Unified Control",
        body: "One interface for every connected surface — without cloud dependency for core routines.",
      },
    ],
  },
  {
    slug: "nexora-folio",
    name: "NEXORA FOLIO",
    tagline: "Productivity, Reinvented",
    description:
      "An ultra-thin productivity tablet with haptic keyboard and dual-canvas display architecture.",
    category: "productivity",
    price: 1499,
    accent: "#CBD5E1",
    image: "/products/nexora-folio.png",
    badge: "Pro",
    features: [
      "Dual-Canvas Display",
      "Magnetic Haptic Keyboard",
      "NX Create Studio",
      "All-Day Battery",
    ],
    specs: [
      { label: "Display", value: '13.2" Mini-LED · 120Hz' },
      { label: "Processor", value: "NX Neural Engine X1 Pro" },
      { label: "RAM / Storage", value: "16GB · Up to 2TB" },
      { label: "Battery", value: "Up to 16 hours" },
      { label: "Ports", value: "2× Thunderbolt 4 · MagSafe" },
      { label: "Weight", value: "580g" },
    ],
    highlights: [
      {
        title: "Create Without Friction",
        body: "A canvas that adapts between writing, design, and computation with zero lag.",
      },
    ],
  },
  {
    slug: "nexora-shift",
    name: "NEXORA SHIFT",
    tagline: "Portable Power Architecture",
    description:
      "A modular power bank and charging system with adaptive wattage and aerospace aluminum housing.",
    category: "accessories",
    price: 149,
    accent: "#6B7280",
    image: "/products/nexora-one.png",
    features: [
      "100W Adaptive Output",
      "Modular Cell Pack",
      "Travel Compact Form",
      "Multi-Device Sync",
    ],
    specs: [
      { label: "Capacity", value: "20,000mAh" },
      { label: "Output", value: "100W USB-C PD" },
      { label: "Inputs", value: "USB-C · MagLink" },
      { label: "Materials", value: "Aerospace Aluminum" },
      { label: "Weight", value: "312g" },
      { label: "Safety", value: "NX Thermal Guard" },
    ],
    highlights: [
      {
        title: "Adaptive Power",
        body: "Detects connected devices and allocates wattage with thermal precision.",
      },
    ],
  },
  {
    slug: "nexora-arc",
    name: "NEXORA ARC",
    tagline: "Light as Interface",
    description:
      "A sculptural smart lamp that responds to circadian rhythms and ambient presence.",
    category: "smart-home",
    price: 329,
    accent: "#F8FAFC",
    image: "/products/nexora-habitat.png",
    features: [
      "Circadian Spectrum",
      "Presence Sensing",
      "Sculptural Aluminum",
      "App + Gesture Control",
    ],
    specs: [
      { label: "Light", value: "Full-spectrum tunable white" },
      { label: "Brightness", value: "1200 lumens" },
      { label: "CRI", value: "98+" },
      { label: "Sensors", value: "Presence · Ambient · Gesture" },
      { label: "Power", value: "USB-C · 24W" },
      { label: "Finish", value: "Brushed Graphite / Silver" },
    ],
    highlights: [
      {
        title: "Biological Light",
        body: "Spectrums that support focus by day and recovery by night — automatically.",
      },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

const categoryImageMap: Record<string, string> = {
  smartphones: "/products/nexora-one.png",
  audio: "/products/nexora-pulse.png",
  wearables: "/products/nexora-apex.png",
  "smart-home": "/products/nexora-habitat.png",
  productivity: "/products/nexora-folio.png",
  accessories: "/products/nexora-one.png",
};

export function getProductImage(typeOrSlug: string) {
  const product = products.find((p) => p.slug === typeOrSlug);
  if (product) return product.image;
  return categoryImageMap[typeOrSlug] ?? "/products/nexora-one.png";
}

export const categories = [
  {
    slug: "smartphones",
    name: "Smartphones",
    tagline: "Intelligence in hand",
    description:
      "Flagship devices engineered for neural performance, optical excellence, and all-day endurance.",
  },
  {
    slug: "audio",
    name: "Audio",
    tagline: "Precision acoustics",
    description:
      "Spatial earbuds and architectural speakers designed as instruments of sound.",
  },
  {
    slug: "wearables",
    name: "Wearables",
    tagline: "Sensors that disappear",
    description:
      "Health and performance wearables with clinical precision and titanium craft.",
  },
  {
    slug: "smart-home",
    name: "Smart Home",
    tagline: "Spaces that think",
    description:
      "Privacy-first hubs and ambient devices that unify the intelligent home.",
  },
  {
    slug: "productivity",
    name: "Productivity",
    tagline: "Create without limits",
    description:
      "Canvas devices for professionals who demand speed, clarity, and craft.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    tagline: "Essential systems",
    description:
      "Modular power, protection, and companions that complete the ecosystem.",
  },
];
