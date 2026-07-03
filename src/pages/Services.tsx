import React, { useEffect, useRef, useState } from 'react';
import tubeBendingImg from './PHOTOS/tube-bending1.jpg';
import weldingImg from './PHOTOS/Welding-Technician.jpg';
import cncFormingImg from './PHOTOS/CNCFormingblog.jpg';
import whatsappImg from './PHOTOS/WhatsApp Image 2025-10-25 at 4.17.41 PM.jpeg';
import cmmImg from './PHOTOS/cmm.png';
import { Zap, Cog, Wrench, Shield, Settings, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Premium Cinematic Scroll Reveal ---
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string; direction?: 'up' | 'left' | 'right' }> = ({ children, delay = 0, className = '', direction = 'up' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const translateClass = 
    direction === 'up' ? 'translate-y-12' : 
    direction === 'left' ? '-translate-x-12' : 'translate-x-12';

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 cubic-bezier(0.16, 1, 0.3, 1) ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translateClass}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Press',
      description: 'Provide high-precision shaping, cutting, and forming of sheet metal to meet your exact manufacturing specifications.',
      capabilities: [
        'Stamping: Creating specific shapes or raised/recessed designs.',
        'Punching: Producing clean, accurate holes or cutouts.',
        'Bending & Forming: Precisely shaping flat metal into complex angles.',
        'Blanking: Cutting large sheet metal into specific shapes.',
        'Drawing: Transforming a flat blank into a hollow part.',
        'Trimming & Piercing: Removing excess material for finish.'
      ]
    },
    // {
    //   icon: <Cog className="w-8 h-8" />,
    //   title: 'CNC Bending & Forming',
    //   description: 'Precision bending and forming with state-of-the-art press brake technology.',
    //   capabilities: [
    //     'Press brake capacity up to 250 tons',
    //     'Complex multi-bend components',
    //     'Consistent repeatability',
    //     'Custom tooling available',
    //     'Angle accuracy: ±0.5 degrees'
    //   ]
    // },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Welding Services',
      description: 'Professional welding services executed by highly certified technicians.',
      capabilities: [
        'MIG, TIG, and Spot Welding',
        'Robotic welding for consistency (future scope)',
        'Materials: Steel, Stainless Steel, Aluminum',
        'AWS certified welders',
        'Structural and precision welding',
        'Post-weld finishing available'
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Tube Fabrication',
      description: 'Custom tubular components and complex frame assemblies built to spec.',
      capabilities: [
        'Tube bending: Up to 45mm diameter',
        'Tube cutting and notching',
        'End forming and flaring',
        'Complex 3D bending',
        'Frame and chassis assembly'
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'CMM (Coordinate Measuring Machine)',
      description: 'High-precision measurement and quality control using advanced coordinate measuring machines for dimensional inspection.',
      capabilities: [
        'Dimensional Inspection',
        'Quality Control & Validation',
        'Precision Measurement',
        '3D Scanning & Analysis',
        'First Article Inspection',
        'In-process Quality Monitoring'
      ]
    },
  ];

  const processSteps = [
    { step: '01', title: 'Design Consultation', description: 'Review your drawings and specs to optimize for manufacturing.' },
    { step: '02', title: 'Prototyping', description: 'Create physical prototypes to validate design and process.' },
    { step: '03', title: 'Mass Production', description: 'Execute manufacturing using our advanced machinery.' },
    { step: '04', title: 'Quality Control', description: 'Comprehensive inspection using CMM and precision tools.' },
    { step: '05', title: 'Finish & Delivery', description: 'Apply treatments and deliver securely on schedule.' },
  ];

  return (
    <div className="bg-white overflow-hidden text-slate-900 font-sans">
      
      {/* 1. HERO SECTION: Bright, Airy, with Subtle Mesh */}
      <section className="relative pt-24 pb-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-orange-200/30 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute -bottom-[20%] right-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-100/40 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Core Competencies
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6">
              Our <span className="text-orange-600">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive manufacturing solutions from design to delivery, powered by advanced technology and expert craftsmanship.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. SERVICES LIST: Alternating Editorial Layouts */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  
                  {/* Text Content */}
                  <FadeIn 
                    direction={isEven ? 'right' : 'left'} 
                    className={`flex flex-col justify-center ${!isEven ? 'lg:order-2' : ''}`}
                  >
                    <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-orange-100">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Core Capabilities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl hover:bg-slate-100 hover:shadow-sm hover:shadow-slate-200/50 transition-all duration-300 border border-slate-100">
                            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
                            <span className="text-slate-700 font-medium text-sm leading-snug">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                  
                  {/* Image Container with Parallax Hover */}
                  <FadeIn 
                    direction={isEven ? 'left' : 'right'} 
                    delay={150} 
                    className={`relative group ${!isEven ? 'lg:order-1' : ''}`}
                  >
                    <div className="absolute -inset-4 bg-slate-50 rounded-3xl transform rotate-2 group-hover:rotate-1 transition-transform duration-700 -z-10"></div>
                    
                    <div className="relative rounded-3xl h-[450px] md:h-[550px] overflow-hidden shadow-2xl shadow-slate-200/60 border border-white">
                      {service.title === 'Power Press' ? (
                        <img src={whatsappImg} alt="Power Press Equipment" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" style={{objectPosition: 'center 20%'}} loading="lazy" />
                      ) : service.title === 'CNC Bending & Forming' ? (
                        <img src={cncFormingImg} alt="CNC Bending" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                      ) : service.title === 'Tube Fabrication' ? (
                        <img src={tubeBendingImg} alt="Tube Fabrication" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" style={{objectPosition: 'center 40%', transform: 'scale(1.2)'}} loading="lazy" />
                      ) : service.title === 'Welding Services' ? (
                        <img src={weldingImg} alt="Welding Services" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                      ) : service.title === 'CMM (Coordinate Measuring Machine)' ? (
                        <img src={cmmImg} alt="CMM Equipment" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                      ) : (
                        <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-400 font-medium">Image Not Found</div>
                      )}
                      
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
                    </div>
                  </FadeIn>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. PROCESS STEPS: High-Contrast Dark Mode Section */}
      <section className="py-32 relative bg-slate-950 text-white overflow-hidden">
        {/* Dark mesh background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 left-0 w-[40vw] h-[40vw] bg-orange-600/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Our Manufacturing <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A systematic, zero-compromise approach to bringing your engineering concepts to reality.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <FadeIn key={index} delay={index * 150} direction="up" className="relative group">
                
                {/* Visual Connector Line (Hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-[60%] w-[100%] h-[1px] bg-gradient-to-r from-orange-500/50 to-transparent z-0"></div>
                )}
                
                <div className="relative z-10 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-6 rounded-2xl hover:bg-slate-800 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col pt-12 mt-6">
                  {/* Huge Watermark Number */}
                  <div className="absolute -top-6 left-4 text-7xl font-black text-slate-800/50 group-hover:text-orange-500/20 transition-colors duration-300">
                    {step.step}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 mt-4">{step.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA: Matches Home Page for Consistency */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <FadeIn>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 tracking-tighter">
              Ready to Build the Future?
            </h2>
            <p className="text-xl md:text-2xl text-orange-50 mb-12 max-w-2xl mx-auto font-medium">
              Let our engineering experts evaluate your project and deliver a comprehensive manufacturing solution.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
            >
              Get a Quote <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
};

export default Services;