import React from 'react';
import CountUp from '../components/CountUp';
import { Award, CheckCircle, Shield, Target, FileText, Users } from 'lucide-react';

const Quality: React.FC = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System certification ensuring consistent quality standards',
      validUntil: '2026'
    },  
    // {
    //   name: 'AWS D1.1',
    //   description: 'Structural Welding Code certification for steel construction',
    //   validUntil: '2025'
    // },
    // {
    //   name: 'IATF 16949',
    //   description: 'Automotive Quality Management System for automotive suppliers',
    //   validUntil: '2025'
    // }
  ];

  const qualityProcess = [
    {
      title: 'Incoming Material Inspection',
      description: 'All raw materials are inspected for compliance with specifications before processing',
      tools: ['Material certificates review', 'Dimensional verification', 'Surface quality check']
    },
    {
      title: 'In-Process Quality Control',
      description: 'Continuous monitoring during manufacturing to prevent defects',
      tools: ['Real-time measurement', 'Process parameter monitoring', 'First article inspection']
    },
    {
      title: 'Final Quality Assurance',
      description: 'Comprehensive inspection of finished parts before shipment',
      tools: ['CMM measurement (if required)', 'Visual inspection', 'Functional testing']
    },
    {
      title: 'Documentation & Traceability',
      description: 'Complete documentation for full traceability of all components',
      tools: ['Quality certificates', 'Measurement reports', 'Material traceability']
    }
  ];

  // Current inspection equipment (in-use)
  const equipment = [
    {
      name: 'Chassis Height Gauges',
      specs: 'Precision height measurement for assembled chassis',
      applications: ['Assembly verification', 'Dimensional checks on assembled frames']
    },
    {
      name: 'Sheet Metal Gauges',
      specs: 'Thickness and profile gauges for sheet materials',
      applications: ['Material verification', 'Incoming inspection', 'Pre-form checks']
    },
    {
      name: 'Vernier Calliper',
      specs: 'High-accuracy manual and digital calipers for quick dimensional checks',
      applications: ['Fast dimensional checks', 'Prototype verifications', 'Toolroom use']
    }
    ,
    {
      name: 'Screw Gauge',
      specs: 'Micrometer screw gauge for precision thickness and diameter measurements',
      applications: ['Precision thickness measurement', 'Shaft and pin diameter checks', 'Toolroom verification']
    }
  ];

  // Planned / future advanced inspection equipment
  const plannedEquipment = [
    {
      name: 'Coordinate Measuring Machine (CMM)',
      specs: 'Accuracy: ±0.002mm, Travel: 1000x800x600mm',
      applications: ['Dimensional verification', 'Complex geometry inspection', 'Statistical process control']
    },
    {
      name: 'Laser Scanner',
      specs: '3D scanning with 0.01mm resolution',
      applications: ['Reverse engineering', 'Part comparison', 'Surface analysis']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Quality & Certifications</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our commitment to excellence is backed by rigorous quality systems, advanced inspection equipment, and industry certifications.
          </p>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-orange-500 mb-4 flex justify-center">
              <Target className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Quality Philosophy</h2>
            <div className="prose prose-lg text-gray-600 max-w-4xl mx-auto">
              <p className="mb-6 text-lg">
                At SAGGI TECH, quality isn't just a goal—it's embedded in every aspect of our manufacturing process. 
                From the moment raw materials enter our facility to the final inspection before shipment, we maintain 
                the highest standards of precision and excellence.
              </p>
              <p className="mb-6 text-lg">
                Our quality management system is designed around continuous improvement, preventive measures, 
                and customer satisfaction. We believe that quality is everyone's responsibility, from our 
                engineers and machinists to our quality inspectors and management team.
              </p>
            </div>
            
            <div className="flex justify-center gap-12 mt-12">
              <div className="text-center">
                <CountUp end={99.8} decimals={1} suffix="%" className="text-4xl font-bold text-orange-500 mb-2" />
                <div className="text-gray-600 text-lg">Quality Rate</div>
              </div>
              <div className="text-center">
                <CountUp end={0.1} prefix="±" suffix="mm" decimals={1} className="text-4xl font-bold text-orange-500 mb-2" />
                <div className="text-gray-600 text-lg">Standard Tolerance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-orange-500 mb-4 flex justify-center">
              <Award className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Our certifications demonstrate our commitment to quality and industry best practices
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="grid grid-cols-1 gap-8 max-w-md">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="text-orange-500 mb-4 flex justify-center">
                    <Shield className="w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                  <p className="text-gray-600 mb-4">{cert.description}</p>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Valid until {cert.validUntil}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Quality Assurance Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to ensuring every component meets or exceeds specifications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityProcess.map((process, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                    <p className="text-gray-600 mb-4">{process.description}</p>
                    <div className="space-y-2">
                      {process.tools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{tool}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspection Equipment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-orange-500 mb-4 flex justify-center">
              <FileText className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Inspection Equipment
            </h2>
            <p className="text-xl text-gray-600">
              State-of-the-art measurement and inspection technology for precise quality control
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {equipment.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-orange-600 font-medium mb-4">{item.specs}</p>
                <div className="space-y-2">
                  <div className="font-medium text-gray-700 mb-2">Applications:</div>
                  {item.applications.map((app, appIndex) => (
                    <div key={appIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Planned Advanced Inspection Equipment */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Planned Advanced Inspection Equipment</h3>
            <p className="text-gray-600 mb-6">Equipment we are planning to add to further enhance inspection capabilities.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plannedEquipment.map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h4>
                  <p className="text-orange-600 font-medium mb-4">{item.specs}</p>
                  <div className="space-y-2">
                    <div className="font-medium text-gray-700 mb-2">Applications:</div>
                    {item.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-gray-600">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-orange-500 mb-4 flex justify-center">
              <Users className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Team Expertise
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* <div className="text-center">
              <CountUp end={5} className="text-4xl font-bold text-orange-500 mb-2" />
              <div className="text-gray-600">Certified Quality Inspectors</div>
            </div> */}
            <div className="text-center md:col-start-2 md:col-span-1">
              <CountUp end={15} suffix="+" className="text-4xl font-bold text-orange-500 mb-2" />
              <div className="text-gray-600">Years Average Experience</div>
            </div>
            {/* <div className="text-center">
              <CountUp end={24} suffix="/7" className="text-4xl font-bold text-orange-500 mb-2" />
              <div className="text-gray-600">Quality Monitoring</div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Quality Difference
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Partner with SAGGI TECH for manufacturing that exceeds your quality expectations.
          </p>
          <a
            href="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Request Quality Information
          </a>
        </div>
      </section>
    </div>
  );
};

export default Quality;