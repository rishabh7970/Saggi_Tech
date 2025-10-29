import React from 'react';
import { Users, Target, Award, Factory } from 'lucide-react';
import vmcImg from './PHOTOS/VMC.jpg';
import saggitechImg from './PHOTOS/saggitech.jpeg';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Manoj Soni',
      title: 'Founder & CEO',
      description: 'With over 30 years in precision manufacturing and leads, Manoj leads our vision for excellence.',
    },
    // {
    //   name: 'Maria Rodriguez',
    //   title: 'VP of Operations',
    //   description: 'Maria ensures our manufacturing processes meet the highest quality standards.',
    // },
    // {
    //   name: 'David Chen',
    //   title: 'Chief Engineer',
    //   description: 'David oversees our technical capabilities and continuous process improvement.',
    // },
  ];

  const capabilities = [
    'CNC & VNC Machining Services ',
    'Power Press (up to 250 tons)',
    'Welding Systems',
    'Tube Bending Equipment',
    'Quality Control CMM',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About SAGGI TECH</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Built on precision, driven by innovation, and committed to excellence in every component we manufacture.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                Founded in 2002 as ACE TECHNO ENGINEERS, our company began with a simple mission: to deliver uncompromising quality and customer commitment in every component we produce. Initially focused on manufacturing precision automobile parts, we built a strong reputation for reliability and excellence.
                </p>
                <p className="mb-6">
                In 2018, we embraced a new identity as SAGGI TECH , marking a strategic evolution in our capabilities. Building on our foundational expertise, we expanded into the dynamic electric vehicle sector, specializing in the production of full-fledged chassis for two-wheelers. This transition allowed us to become a key manufacturing partner for leading EV brands like Zelio and Okaya.
                </p>
                <p>
                Today, from our modern facility, SAGGI TECH continues the legacy of our founding company. We combine decades of manufacturing experience with state-of-the-art equipment to deliver superior solutions. While our name has changed, our core philosophy remains the same: an utmost commitment to our customers and a relentless drive to deliver the very best from our end.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center overflow-hidden">
              <img src={saggitechImg} alt="SAGGI TECH Manufacturing Facility" className="w-full h-full object-cover" style={{objectPosition: '60% center', transform: 'scale(1.1)'}} loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-orange-500 mb-4">
                <Target className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To be the most trusted partner for precision manufacturing, delivering exceptional quality, 
                innovative solutions, and reliable service that enables our clients' success in their respective markets.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-orange-500 mb-4">
                <Award className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To lead the manufacturing industry through continuous innovation, sustainable practices, 
                and an unwavering commitment to quality that sets the standard for precision manufacturing excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facility & Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Facility & Technology
            </h2>
            <p className="text-xl text-gray-600">
              State-of-the-art equipment and modern facilities designed for precision manufacturing
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center overflow-hidden">
              <img src={vmcImg} alt="VMC Manufacturing Equipment" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <div className="text-orange-500 mb-4">
                <Factory className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Advanced Manufacturing Capabilities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Quality Assurance:</strong> Components are inspected using our coordinate measuring machines (CMM) 
                   to ensure precision tolerance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-orange-500 mb-4 flex justify-center">
              <Users className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Meet the experienced professionals leading SAGGI TECH's mission
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center w-full sm:w-auto max-w-sm">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-gray-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-medium mb-3">{member.title}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;