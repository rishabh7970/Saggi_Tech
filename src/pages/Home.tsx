import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Cog, Shield, Clock, ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Press',
      description: 'High-speed power press operations for precise stamping, punching, and forming.',
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: 'CNC Bending',
      description: 'Advanced press brake technology for consistent, repeatable bends.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Tube Fabrication',
      description: 'Custom tubular components with precision bending and cutting.',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Welding Services',
      description: 'MIG, TIG, and spot welding for strong, reliable joints.',
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Tool Room Facility',
      description: 'In-house tool design, maintenance, and die development to ensure uptime and quality.',
    },
  ];

  const industries = [
    'Automotive', 'Industrial Machinery'
  ];

  const whyChooseUs = [
    {
      title: 'Precision & Quality',
      description: 'High-accuracy components meeting stringent industry standards',
    },
    {
      title: 'Advanced Technology',
      description: 'State-of-the-art CNC machinery and complete tool room services',
    },
    {
      title: 'End-to-End Solutions',
      description: 'From design consultation to mass production and finishing',
    },
    {
      title: 'Reliable Delivery',
      description: 'Committed to your production schedules with on-time delivery',
    },
  ];

  // testimonials array removed — testimonials section is currently commented out in the JSX

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Precision in Metal.<br />
              <span className="text-orange-500">Excellence</span> in Manufacturing.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              SAGGI TECH delivers high-precision sheet metal and tubular components 
              with advanced technology, unmatched quality, and reliable on-time delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center"
              >
                Request a Quote <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From precision cutting to complex assembly, we provide comprehensive manufacturing solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow h-full">
                <div className="text-orange-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-orange-100">
              Trusted by leading companies across diverse manufacturing sectors
            </p>
          </div>
          
          <div className="flex justify-center flex-wrap gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-orange-100 px-6 py-4 rounded-lg text-center hover:bg-orange-50 transition-colors min-w-[200px]">
                <span className="font-medium text-gray-800">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose SAGGI TECH?
            </h2>
            <p className="text-xl text-gray-300">
              Four pillars that make us your ideal manufacturing partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
                <p className="text-gray-300">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Final CTA */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a custom quote for your precision manufacturing needs today.
          </p>
          <Link
            to="/contact"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center"
          >
            Get Your Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;