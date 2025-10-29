import React from 'react';
import { Car, Cog } from 'lucide-react';
import automotiveImg from './PHOTOS/Automotive comp.jpg';
import industrialImg from './PHOTOS/industrial mc comp.jpg';

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Car className="w-12 h-12" />,
      name: 'Automotive',
      description: 'Precision components for vehicle manufacturing and aftermarket applications.',
      applications: [
        'Chassis and frame components',
        'Exhaust system parts',
        'Suspension brackets',
        'Custom automotive fixtures',
        
      ],
      materials: ['High-strength steel', 'Aluminum alloy', 'Stainless steel'],
      projects: '500+ completed projects'
    },
    {
      icon: <Cog className="w-12 h-12" />,
      name: 'Industrial Machinery',
      description: 'Heavy-duty components for manufacturing equipment and industrial systems.',
      applications: [
        'Catalytic Converter Stuffing',
        'Hydraulic system parts',
        'Custom tooling and fixtures',
        'Equipment mounting brackets'
      ],
      materials: ['Carbon steel', 'Stainless steel', 'Aluminum'],
      projects: '300+ machinery components'
    },
    
    
    
    
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Industries We Serve</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering precision manufacturing solutions across diverse industries with specialized expertise and proven results.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-orange-500 mr-4">{industry.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{industry.name}</h2>
                      <p className="text-gray-600">{industry.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Applications:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {industry.applications.map((application, appIndex) => (
                        <div key={appIndex} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{application}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Common Materials:</h4>
                      <div className="space-y-1">
                        {industry.materials.map((material, matIndex) => (
                          <div key={matIndex} className="text-sm text-gray-600">{material}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Experience:</h4>
                      <div className="text-sm text-orange-600 font-medium">{industry.projects}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 h-48 flex items-center justify-center overflow-hidden">
                  {industry.name === 'Automotive' ? (
                    <img src={automotiveImg} alt="Automotive Components" className="w-full h-full object-cover" loading="lazy" />
                  ) : industry.name === 'Industrial Machinery' ? (
                    <img src={industrialImg} alt="Industrial Machinery Components" className="w-full h-full object-cover" loading="lazy" />
                  ) : (
                    <span className="text-gray-500 font-medium">{industry.name} Components Gallery</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Experience by the Numbers
            </h2>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1 text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">1,300+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            {/* Uncomment when needed
            <div className="flex-1 text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
              <div className="text-gray-600">Active Clients</div>
            </div>
            */}
            <div className="flex-1 text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">99.8%</div>
              <div className="text-gray-600">Quality Rate</div>
            </div>
            <div className="flex-1 text-center">
              <div className="text-4xl font-bold text-orange-500 mb-2">16+7</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't See Your Industry Listed?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We work with businesses across many sectors. Contact us to discuss your specific manufacturing needs.
          </p>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Industries;