import React from 'react';
import tubeBendingImg from './PHOTOS/tube-bending1.jpg';
import weldingImg from './PHOTOS/Welding-Technician.jpg';
import cncFormingImg from './PHOTOS/CNCFormingblog.jpg';
import whatsappImg from './PHOTOS/WhatsApp Image 2025-10-25 at 4.17.41 PM.jpeg';
import cmmImg from './PHOTOS/cmm.png';
import { Zap, Cog, Wrench, Shield, Settings, CheckCircle } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Power Press',
      description: 'Provide high-precision shaping, cutting, and forming of sheet metal to meet your exact manufacturing specifications.',
      capabilities: [
        'Stamping: Creating specific shapes or raised/recessed designs on sheet metal.',
        'Punching: Producing clean, accurate holes or cutouts of various shapes and sizes.',
        'Bending & Forming: Precisely bending and shaping flat metal into complex angles and components.',
        'Blanking: Cutting large sheet metal into smaller, specific shapes (blanks) for further processing.',
        'Drawing: Transforming a flat metal blank into a hollow or cup-shaped part',
        'Trimming & Piercing: Removing excess material or adding secondary holes to a formed part.'
      ],
      specs: {
        'Max Sheet Size': '4000mm x 2000mm',
        'Laser Power': '6kW Fiber Laser',
        'Cutting Speed': 'Up to 50m/min',
      }
    },
    // {
    //   icon: <Cog className="w-12 h-12" />,
    //   title: 'CNC Bending & Forming',
    //   description: 'Precision bending and forming with state-of-the-art press brake technology',
    //   capabilities: [
    //     'Press brake capacity up to 250 tons',
    //     'Complex multi-bend components',
    //     'Consistent repeatability',
    //     'Custom tooling available',
    //     'Angle accuracy: ±0.5 degrees'
    //   ],
    //   specs: {
    //     'Max Bending Length': '6000mm',
    //     'Max Tonnage': '3000 tons',
    //     'Min Flange': '8mm',
    //   }
    // },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Welding Services',
      description: 'Professional welding services with certified technicians',
      capabilities: [
        'MIG, TIG, and Spot Welding',
        'Robotic welding for consistency (future scope)',
        'Materials: Steel, Stainless Steel, Aluminum',
        'AWS certified welders',
        'Structural and precision welding',
        'Post-weld finishing available'
      ],
      specs: {
        'Weld Types': 'MIG, TIG, Spot',
        'Certifications': 'AWS D1.1, D1.3',
        'Automation': 'Robotic Systems',
      }
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: 'Tube Fabrication',
      description: 'Custom tubular components and complex frame assemblies',
      capabilities: [
        'Tube bending: Upto 45mm diameter',
        'Tube cutting and notching',
        'End forming and flaring',
        'Complex 3D bending',
        'Frame and chassis assembly'
      ],
      specs: {
        'Diameter Range': '6mm - 150mm',
        'Wall Thickness': 'Up to 8mm',
        'Bending Radius': '1.5D minimum',
      }
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'CMM (Coordinate Measuring Machine)',
      description: 'High-precision measurement and quality control using advanced coordinate measuring machines for dimensional inspection and quality assurance.',
      capabilities: [
        'Dimensional Inspection',
        'Quality Control & Validation',
        'Precision Measurement ',
        '3D Scanning & Analysis',
        'First Article Inspection',
        'In-process Quality Monitoring'
      ],
      specs: {
        'Measurement Accuracy': '±0.1mm',
        'Measurement Range': 'Up to 1000mm',
        'Technology': 'Touch Probe & Laser Scanning',
      }
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Design Consultation',
      description: 'Review your drawings and specifications to optimize for manufacturing'
    },
    {
      step: '02',
      title: 'Prototyping',
      description: 'Create prototypes to validate design and manufacturing processes'
    },
    {
      step: '03',
      title: 'Production',
      description: 'Execute manufacturing using our advanced equipment and skilled technicians'
    },
    {
      step: '04',
      title: 'Quality Control',
      description: 'Comprehensive inspection using CMM and other precision measurement tools'
    },
    {
      step: '05',
      title: 'Finishing & Delivery',
      description: 'Apply finishing treatments and deliver on schedule'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services & Capabilities</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive manufacturing solutions from design to delivery, powered by advanced technology and expert craftsmanship.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-cols-2' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="text-orange-500 mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Capabilities:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical specifications removed as per request */}
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-200 rounded-lg h-80 flex items-center justify-center overflow-hidden">
                    {service.title === 'Power Press' ? (
                      <img src={whatsappImg} alt="Power Press Equipment" className="w-full h-full object-cover" style={{objectPosition: 'center 20%'}} loading="lazy" />
                    ) : service.title === 'CNC Bending & Forming' ? (
                      <img src={cncFormingImg} alt="CNC Bending & Forming Equipment" className="w-full h-full object-cover" loading="lazy" />
                    ) : service.title === 'Tube Fabrication' ? (
                      <div className="w-full h-full overflow-hidden">
                        <img src={tubeBendingImg} alt="Tube Bending Equipment" className="w-full h-full object-cover" style={{objectPosition: 'center 40%', transform: 'scale(1.4)'}} loading="lazy" />
                      </div>
                    ) : service.title === 'Welding Services' ? (
                      <img src={weldingImg} alt="Welding Technician" className="w-full h-full object-cover" loading="lazy" />
                    ) : service.title === 'CMM (Coordinate Measuring Machine)' ? (
                      <img src={cmmImg} alt="CMM Equipment" className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <span className="text-gray-500 font-medium">{service.title} Equipment Image</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-xl text-gray-600">
              From concept to completion, we follow a proven process to ensure quality and efficiency
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 transform translate-x-8"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you choose the right manufacturing solution for your needs.
          </p>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;