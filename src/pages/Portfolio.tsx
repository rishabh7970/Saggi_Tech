import React, { useMemo, useState } from 'react';
import { Filter, Search, X, CheckCircle, Package, Wrench, Settings } from 'lucide-react';

// Import product images
import arsPipeClampImg from './product gallery/ARS-Pipe-Clamp-Volvo-Exhaust-Clamp.webp';
import ballZoneImg from './product gallery/Ball-zone-exhaust-GAS-CLAMP.webp';
import cTypeImg from './product gallery/C-TYPE-Exhaust-Clamps-Mercedes-.webp';
import citroenExhaustImg from './product gallery/citroen-exhaust-clamp-.webp';
import citroenPeugeotMiniImg from './product gallery/Citroen-Peugeot-Mini-.webp';
import din71555Img from './product gallery/DIN-71555-Clamp-.webp';
import doubleHardwareImg from './product gallery/DOUBLE-HARDWARE-T-BOLT.webp';
import flexibleFitImg from './product gallery/Flexible-Fit-Clamp-Standard-1-.webp';
import heavyDutyImg from './product gallery/Heavy-Duty-Clamp-VAG-Exhaust-Clamp-.webp';
import m10FordImg from './product gallery/M10-Ford-Exhaust-Clamp.webp';
import mercedesImg from './product gallery/Mercedes-exhaust-clamp.webp';
import openConsoleImg from './product gallery/Open-Console-Clamp.webp';
import psaImg from './product gallery/PSA-Exhaust-Clamps-Peugeot-Citroen-Renault-Applications.webp';
import pullRingsGalleryImg from './product gallery/PULL RINGS.webp';
import renaultImg from './product gallery/Renault-exhaust-clamp.webp';
import rolledFormedImg from './product gallery/ROLL-FORMED-T-BOLT-V-BAND-CLAMP-V-BAND-CLAMPS-.webp';
import series5Img from './product gallery/Series-5.webp';
import series7Img from './product gallery/Series-7.webp';
import series8Img from './product gallery/Series-8.webp';
import series9Img from './product gallery/Series-9.webp';
import silencerStrapsImg from './product gallery/Silencer-strapS.webp';
import toyotaImg from './product gallery/TOYOTA-EXHAUST-CLAMP.webp';
import universalUBoltImg from './product gallery/Universal-U-Bolt-Pipe-Clamps-Universal-Exhaust-Clamps-M8-M10.webp';
import vBandEuropeanImg from './product gallery/V-Band-clamp-European-style.webp';
import vClampFlangeImg from './product gallery/V-CLAMP-FLANGE.webp';

type Product = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  specifications: string[];
  applications: string[];
  features: string[];
  materials: string;
};  

const products: Product[] = [
  // Universal Clamps
    {
      id: 1,
    title: 'Pull Rings', 
    category: 'V Band Clamps', 
    image: pullRingsGalleryImg,
    description: 'High-quality pull rings designed for secure fastening and easy installation in automotive and industrial applications.',
    specifications: ['Material: Stainless Steel 304', 'Diameter: 6mm - 20mm', 'Temperature Range: -40°C to +200°C', 'Corrosion Resistance: Excellent'],
    applications: ['Automotive exhaust systems', 'Industrial piping', 'HVAC installations', 'Marine applications'],
    features: ['Easy installation', 'Corrosion resistant', 'High tensile strength', 'Consistent quality'],
    materials: 'Stainless Steel 304'
    },
    {
      id: 2,
    title: 'Citroen / Peugeot / Mini Clamps', 
    category: 'Universal Clamps', 
    image: citroenPeugeotMiniImg,
    description: 'Specialized exhaust clamps designed specifically for Citroen, Peugeot, and Mini vehicles, ensuring perfect fit and optimal performance.',
    specifications: ['OEM Compatible', 'Material: Galvanized Steel', 'Size Range: 40mm - 80mm', 'Installation: Quick-fit design'],
    applications: ['Citroen exhaust systems', 'Peugeot vehicles', 'Mini Cooper exhaust', 'Aftermarket replacements'],
    features: ['OEM specifications', 'Easy installation', 'Durable construction', 'Perfect fit guarantee'],
    materials: 'Galvanized Steel'
    },
    {
      id: 3,
    title: 'Toyota Exhaust Clamp', 
    category: 'Universal Clamps', 
    image: toyotaImg,
    description: 'Precision-engineered exhaust clamps for Toyota vehicles, providing secure connections and long-lasting performance.',
    specifications: ['Toyota OEM Compatible', 'Material: Stainless Steel', 'Size: 50mm - 100mm', 'Pressure Rating: High'],
    applications: ['Toyota Camry', 'Toyota Corolla', 'Toyota RAV4', 'Toyota Prius'],
    features: ['OEM quality', 'Rust resistant', 'Easy installation', 'Long service life'],
    materials: 'Stainless Steel 316'
    },
    {
      id: 4,
    title: 'M10 Ford', 
    category: 'Universal Clamps', 
    image: m10FordImg,
    description: 'Heavy-duty M10 Ford exhaust clamps designed for Ford vehicles, offering superior clamping force and reliability.',
    specifications: ['M10 Thread Size', 'Material: Carbon Steel', 'Ford Compatible', 'High Torque Rating'],
    applications: ['Ford F-150', 'Ford Focus', 'Ford Mustang', 'Ford Explorer'],
    features: ['High clamping force', 'Durable construction', 'Easy maintenance', 'Ford approved'],
    materials: 'Carbon Steel with Zinc Coating'
    },
    {
      id: 5,
    title: 'Renault Exhaust Clamp', 
    category: 'Universal Clamps', 
    image: renaultImg,
    description: 'Specialized exhaust clamps for Renault vehicles, engineered to meet European automotive standards.',
    specifications: ['Renault OEM Specs', 'Material: Stainless Steel', 'Size: 45mm - 85mm', 'EU Standards Compliant'],
    applications: ['Renault Clio', 'Renault Megane', 'Renault Scenic', 'Renault Kadjar'],
    features: ['European standards', 'Corrosion resistant', 'Precision fit', 'Long warranty'],
    materials: 'Stainless Steel 304'
    },
    {
      id: 6,
    title: 'Citreon Exhaust Clamp', 
    category: 'Universal Clamps', 
    image: citroenExhaustImg,
    description: 'High-quality exhaust clamps specifically designed for Citroen vehicles, ensuring optimal exhaust system performance.',
    specifications: ['Citroen Compatible', 'Material: Galvanized Steel', 'Size: 50mm - 90mm', 'Installation: Tool-free'],
    applications: ['Citroen C3', 'Citroen C4', 'Citroen C5', 'Citroen Berlingo'],
    features: ['Tool-free installation', 'Perfect fit', 'Durable design', 'Cost effective'],
    materials: 'Galvanized Steel'
  },
  { 
    id: 7, 
    title: 'C-Type Exhaust Clamp', 
    category: 'Universal Clamps', 
    image: cTypeImg,
    description: 'C-Type exhaust clamps featuring a unique design for Mercedes vehicles, providing superior clamping performance.',
    specifications: ['Mercedes Compatible', 'Material: Stainless Steel', 'C-Type Design', 'High Performance'],
    applications: ['Mercedes C-Class', 'Mercedes E-Class', 'Mercedes S-Class', 'Mercedes GLC'],
    features: ['Unique C-design', 'Mercedes approved', 'Superior clamping', 'Premium quality'],
    materials: 'Stainless Steel 316L'
  },
  { 
    id: 8, 
    title: 'Silencer Straps', 
    category: 'Universal Clamps', 
    image: silencerStrapsImg,
    description: 'Heavy-duty silencer straps designed for secure mounting of exhaust silencers in automotive applications.',
    specifications: ['Material: Steel', 'Width: 25mm - 50mm', 'Length: 200mm - 500mm', 'Load Capacity: High'],
    applications: ['Exhaust silencers', 'Muffler mounting', 'Automotive exhaust', 'Industrial applications'],
    features: ['High load capacity', 'Easy installation', 'Durable construction', 'Versatile design'],
    materials: 'Carbon Steel with Coating'
  },
  { 
    id: 9, 
    title: 'Mercedes Exhaust Clamp', 
    category: 'Universal Clamps', 
    image: mercedesImg,
    description: 'Premium exhaust clamps engineered specifically for Mercedes-Benz vehicles, meeting the highest quality standards.',
    specifications: ['Mercedes OEM', 'Material: Stainless Steel', 'Size: 60mm - 120mm', 'Premium Grade'],
    applications: ['Mercedes A-Class', 'Mercedes B-Class', 'Mercedes CLA', 'Mercedes GLA'],
    features: ['Premium quality', 'Mercedes certified', 'Corrosion resistant', 'Long-lasting'],
    materials: 'Stainless Steel 316L'
  },
  { 
    id: 10, 
    title: 'PSA Exhaust Clamp', 
    category: 'Universal Clamps', 
    image: psaImg,
    description: 'PSA Group exhaust clamps designed for Peugeot, Citroen, and Renault vehicles, offering universal compatibility.',
    specifications: ['PSA Group Compatible', 'Material: Galvanized Steel', 'Size: 40mm - 100mm', 'Multi-brand Support'],
    applications: ['Peugeot vehicles', 'Citroen vehicles', 'Renault vehicles', 'PSA Group models'],
    features: ['Multi-brand compatibility', 'Cost effective', 'Easy installation', 'Reliable performance'],
    materials: 'Galvanized Steel'
  },
  { 
    id: 11, 
    title: 'Ball Zone Exhaust Clamp', 
    category: 'Universal Clamps', 
    image: ballZoneImg,
    description: 'Innovative ball zone exhaust clamps featuring advanced sealing technology for superior exhaust system performance.',
    specifications: ['Ball Zone Technology', 'Material: Stainless Steel', 'Size: 50mm - 80mm', 'Advanced Sealing'],
    applications: ['High-performance vehicles', 'Racing applications', 'Custom exhaust', 'Performance tuning'],
    features: ['Advanced sealing', 'High performance', 'Racing grade', 'Superior fit'],
    materials: 'Stainless Steel 316'
  },
  { 
    id: 12, 
    title: 'Heavy Duty Clamps', 
    category: 'Universal Clamps', 
    image: heavyDutyImg,
    description: 'Heavy-duty exhaust clamps designed for commercial vehicles and industrial applications requiring maximum durability.',
    specifications: ['Heavy Duty Grade', 'Material: Carbon Steel', 'Size: 80mm - 200mm', 'High Torque'],
    applications: ['Commercial vehicles', 'Industrial exhaust', 'Heavy machinery', 'Construction equipment'],
    features: ['Maximum durability', 'High torque rating', 'Industrial grade', 'Long service life'],
    materials: 'Carbon Steel with Heavy Coating'
  },
  { 
    id: 13, 
    title: 'Flexible Fit Clamp Standard', 
    category: 'Universal Clamps', 
    image: flexibleFitImg,
    description: 'Flexible fit exhaust clamps with adjustable design for various pipe sizes and applications.',
    specifications: ['Flexible Design', 'Material: Stainless Steel', 'Size: 30mm - 150mm', 'Adjustable'],
    applications: ['Variable pipe sizes', 'Custom applications', 'Retrofit projects', 'Multi-size compatibility'],
    features: ['Flexible sizing', 'Easy adjustment', 'Universal fit', 'Versatile application'],
    materials: 'Stainless Steel 304'
  },
  { 
    id: 14, 
    title: 'DIN71555 Clamp', 
    category: 'Universal Clamps', 
    image: din71555Img,
    description: 'DIN71555 compliant exhaust clamps meeting German industrial standards for automotive applications.',
    specifications: ['DIN71555 Compliant', 'Material: Stainless Steel', 'German Standards', 'High Precision'],
    applications: ['German vehicles', 'European standards', 'Industrial applications', 'Precision requirements'],
    features: ['German standards', 'High precision', 'Quality certified', 'Reliable performance'],
    materials: 'Stainless Steel 316'
  },
  { 
    id: 15, 
    title: 'ARS Pipe Clamp', 
    category: 'Universal Clamps', 
    image: arsPipeClampImg,
    description: 'ARS pipe clamps designed for Volvo exhaust systems, offering superior clamping performance and durability.',
    specifications: ['Volvo Compatible', 'Material: Stainless Steel', 'Size: 50mm - 100mm', 'ARS Technology'],
    applications: ['Volvo vehicles', 'Scandinavian cars', 'Premium applications', 'OEM replacements'],
    features: ['Volvo approved', 'ARS technology', 'Premium quality', 'Superior performance'],
    materials: 'Stainless Steel 316L'
  },
  { 
    id: 16, 
    title: 'Universal U Bolt Pipe Clamp', 
    category: 'Universal Clamps', 
    image: universalUBoltImg,
    description: 'Universal U-bolt pipe clamps with M8 and M10 options, providing versatile clamping solutions for various applications.',
    specifications: ['M8/M10 Options', 'Material: Carbon Steel', 'Size: 40mm - 120mm', 'Universal Design'],
    applications: ['General piping', 'Exhaust systems', 'HVAC applications', 'Industrial use'],
    features: ['Universal compatibility', 'Multiple sizes', 'Easy installation', 'Cost effective'],
    materials: 'Carbon Steel with Zinc Coating'
  },
  { 
    id: 17, 
    title: 'Open Console Clamps', 
    category: 'Console & Accumulator Clamps', 
    image: openConsoleImg,
    description: 'Open console clamps designed for easy installation and maintenance in automotive console applications.',
    specifications: ['Open Design', 'Material: Stainless Steel', 'Size: 30mm - 80mm', 'Easy Access'],
    applications: ['Console mounting', 'Dashboard applications', 'Interior components', 'Maintenance access'],
    features: ['Easy access', 'Quick installation', 'Maintenance friendly', 'Durable design'],
    materials: 'Stainless Steel 304'
  },
  { 
    id: 18, 
    title: 'Rolled Formed T-Bolt V-Band Clamp', 
    category: 'V Band Clamps', 
    image: rolledFormedImg,
    description: 'Rolled formed T-bolt V-band clamps offering superior sealing performance for high-pressure applications.',
    specifications: ['Rolled Formed', 'Material: Stainless Steel', 'Size: 50mm - 150mm', 'High Pressure'],
    applications: ['Turbo applications', 'High pressure systems', 'Performance exhaust', 'Industrial piping'],
    features: ['Superior sealing', 'High pressure rating', 'Rolled formed', 'Performance grade'],
    materials: 'Stainless Steel 316'
  },
  { 
    id: 19, 
    title: 'Series-9', 
    category: 'V Band Clamps', 
    image: series9Img,
    description: 'Series-9 exhaust clamps featuring advanced design and superior materials for premium applications.',
    specifications: ['Series-9 Grade', 'Material: Stainless Steel', 'Size: 40mm - 100mm', 'Premium Quality'],
    applications: ['Premium vehicles', 'High-end applications', 'OEM specifications', 'Quality critical'],
    features: ['Premium grade', 'Advanced design', 'Superior materials', 'Quality guaranteed'],
    materials: 'Stainless Steel 316L'
  },
  { 
    id: 20, 
    title: 'Series-8', 
    category: 'V Band Clamps', 
    image: series8Img,
    description: 'Series-8 exhaust clamps offering excellent balance of quality and performance for standard applications.',
    specifications: ['Series-8 Grade', 'Material: Stainless Steel', 'Size: 35mm - 90mm', 'Standard Quality'],
    applications: ['Standard vehicles', 'Regular applications', 'OEM replacements', 'General use'],
    features: ['Standard quality', 'Good performance', 'Reliable design', 'Cost effective'],
    materials: 'Stainless Steel 304'
  },
  { 
    id: 21, 
    title: 'Series-7', 
    category: 'V Band Clamps', 
    image: series7Img,
    description: 'Series-7 exhaust clamps designed for reliable performance in standard automotive applications.',
    specifications: ['Series-7 Grade', 'Material: Galvanized Steel', 'Size: 30mm - 80mm', 'Standard Grade'],
    applications: ['Standard applications', 'Budget solutions', 'General automotive', 'Basic requirements'],
    features: ['Reliable performance', 'Standard grade', 'Budget friendly', 'Good quality'],
    materials: 'Galvanized Steel'
  },
  { 
    id: 22, 
    title: 'Series-5', 
    category: 'V Band Clamps', 
    image: series5Img,
    description: 'Series-5 exhaust clamps offering basic functionality for simple applications and budget-conscious projects.',
    specifications: ['Series-5 Grade', 'Material: Carbon Steel', 'Size: 25mm - 70mm', 'Basic Grade'],
    applications: ['Basic applications', 'Budget projects', 'Simple requirements', 'Entry level'],
    features: ['Basic functionality', 'Budget friendly', 'Simple design', 'Essential features'],
    materials: 'Carbon Steel with Coating'
  },
  { 
    id: 23, 
    title: 'V-Clamp Flange', 
    category: 'V Band Clamps', 
    image: vClampFlangeImg,
    description: 'V-clamp flanges designed for secure connections in exhaust systems, offering superior sealing performance.',
    specifications: ['V-Clamp Design', 'Material: Stainless Steel', 'Size: 60mm - 120mm', 'Superior Sealing'],
    applications: ['Exhaust connections', 'Pipe joints', 'System connections', 'High pressure'],
    features: ['Superior sealing', 'V-clamp design', 'High pressure', 'Secure connection'],
    materials: 'Stainless Steel 316'
  },
  { 
    id: 24, 
    title: 'Double Hardware T-Bolt', 
    category: 'V Band Clamps', 
    image: doubleHardwareImg,
    description: 'Double hardware T-bolt clamps featuring reinforced design for maximum clamping force and reliability.',
    specifications: ['Double Hardware', 'Material: Stainless Steel', 'Size: 50mm - 100mm', 'High Torque'],
    applications: ['High torque applications', 'Heavy duty use', 'Industrial applications', 'Maximum security'],
    features: ['Double hardware', 'Maximum torque', 'Reinforced design', 'Heavy duty'],
    materials: 'Stainless Steel 316L'
  },
  { 
    id: 25, 
    title: 'V-Band Clamp', 
    category: 'V Band Clamps', 
    image: vBandEuropeanImg,
    description: 'European style V-band clamps offering superior sealing and easy installation for exhaust systems.',
    specifications: ['European Style', 'Material: Stainless Steel', 'Size: 50mm - 150mm', 'Easy Installation'],
    applications: ['European vehicles', 'Exhaust systems', 'Turbo applications', 'Performance systems'],
    features: ['European style', 'Easy installation', 'Superior sealing', 'Performance grade'],
    materials: 'Stainless Steel 316'
  },
];

const categories = ['All', 'Universal Clamps', 'V Band Clamps', 'Console & Accumulator Clamps'];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    const byCategory = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);
    const q = query.trim().toLowerCase();
    return q ? byCategory.filter(p => p.title.toLowerCase().includes(q)) : byCategory;
  }, [activeCategory, query]);

  return (
    <div>
      {/* Hero Section */}
      {/* <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Product catalogue adapted from Invicta Clamps. See reference: <a className="underline text-orange-300" href="https://invictaclamps.com/products/" target="_blank" rel="noreferrer">invictaclamps.com/products</a>.
          </p>
        </div>
      </section> */}

      {/* Search and Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-lg py-2 pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter className="w-5 h-5" />
                <span className="font-medium">Category:</span>
            </div>
              {categories.map((c) => (
              <button
                  key={c}
                  onClick={() => setActiveCategory(c)}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                    activeCategory === c
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                  {c}
              </button>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div 
                key={item.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setSelectedProduct(item)}
              >
                <div className="bg-gray-200 h-48">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src.indexOf('/ST%20(2).png') === -1) {
                        target.src = '/ST%20(2).png';
                      }
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center text-gray-600">No products found.</div>
          )}
          {/* <div className="text-sm text-gray-500 mt-8 text-center">
            Source: <a className="underline" href="https://invictaclamps.com/products/" target="_blank" rel="noreferrer"></a>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a product not listed?</h2>
          <p className="text-xl text-gray-300 mb-8">Contact us with specifications for custom clamps and fittings.</p>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Request Product Info
          </a>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.title}</h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Image */}
                <div>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="w-full h-80 object-contain rounded-lg border"
                  />
                </div>
                
                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {selectedProduct.category}
                    </span>
                    <p className="text-gray-700 mt-4">{selectedProduct.description}</p>
                  </div>
                  
                  {/* Materials */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Package className="w-5 h-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-gray-900">Materials</h3>
                    </div>
                    <p className="text-gray-700">{selectedProduct.materials}</p>
                  </div>
                  
                  {/* Specifications */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Settings className="w-5 h-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-gray-900">Specifications</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedProduct.specifications.map((spec, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Applications */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Wrench className="w-5 h-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-gray-900">Applications</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedProduct.applications.map((app, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Features */}
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <CheckCircle className="w-5 h-5 text-orange-500" />
                      <h3 className="text-lg font-semibold text-gray-900">Key Features</h3>
                    </div>
                    <div className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;