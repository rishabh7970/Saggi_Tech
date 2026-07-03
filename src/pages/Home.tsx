import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Cog, Shield, Clock, ArrowRight, Star, CheckCircle, ChevronRight } from 'lucide-react';

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

const Home: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Press',
      description: 'High-speed operations for precise stamping, punching, and forming.',
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
      description: 'In-house tool design, maintenance, and die development.',
    },
  ];

  const industries = ['Automotive', 'Electric Vehicles (EV)', 'Industrial Machinery', 'Aerospace', 'Consumer Electronics'];

  const whyChooseUs = [
    { title: 'Absolute Precision', description: 'Components engineered to micron-level accuracy, meeting the most stringent global standards.' },
    { title: 'Advanced Tech', description: 'Powered by state-of-the-art CNC machinery and automated quality control pipelines.' },
    { title: 'End-to-End', description: 'A seamless journey from initial design consultation to mass production and finishing.' },
    { title: 'Guaranteed Delivery', description: 'Optimized logistics ensuring your production schedules are met with zero delays.' },
  ];

  return (
    <div className="overflow-hidden bg-slate-50 font-sans">
      
      {/* 1. HERO SECTION: Dynamic Mesh Gradient & Glassmorphism */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-orange-400/20 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-blue-500/10 blur-[120px] animate-pulse" style={{ animationDuration: '12s' }}></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-amber-300/20 blur-[100px] animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md border border-white/80 px-4 py-2 rounded-full mb-8 shadow-sm">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-600"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">ISO 9001:2015 Certified Manufacturing</span>
              </div>
            </FadeIn>

            <FadeIn delay={150}>
              <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter text-slate-900 leading-[1.1]">
                Precision in Metal.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 drop-shadow-sm">
                  Excellence Scaled.
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={300}>
              <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed font-medium">
                SAGGI TECH delivers high-precision sheet metal and tubular components with state-of-the-art technology and uncompromising quality.
              </p>
            </FadeIn>

            <FadeIn delay={450}>
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 bg-orange-600 rounded-xl hover:bg-orange-500 hover:shadow-2xl hover:shadow-orange-500/40 hover:-translate-y-1 overflow-hidden"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <span className="relative flex items-center">
                    Request a Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-800 transition-all duration-300 bg-white/80 backdrop-blur-md border-2 border-slate-200 rounded-xl hover:border-orange-500 hover:text-orange-600 hover:shadow-xl hover:-translate-y-1"
                >
                  Explore Services
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. SERVICES: Premium Glassmorphic Grid */}
      <section className="py-24 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Architects of <span className="text-orange-600">Innovation</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From microscopic precision to heavy-duty forming, our comprehensive suite of services handles it all.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 100}>
                <div className="group relative h-full bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-default">
                  {/* Hover Accent Glow */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl group-hover:bg-orange-500/20 transition-colors duration-500"></div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-inner">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HIGH CONTRAST SECTION: Why Choose Us (Dark Mode) */}
      <section className="py-32 relative bg-slate-950 text-white overflow-hidden">
        {/* Dark theme mesh background */}
        <div className="absolute inset-0 pointer-events-none opacity-50">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-orange-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-900/40 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            <FadeIn direction="left">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter leading-tight">
                Engineering <br/>Without <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Compromise.</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                We don't just manufacture parts; we engineer reliability. Our four pillars ensure that every component leaving our facility is a masterpiece of precision.
              </p>
              <Link to="/about" className="inline-flex items-center text-orange-400 font-bold hover:text-orange-300 transition-colors text-lg group">
                Learn more about our standards <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseUs.map((reason, index) => (
                <FadeIn key={index} delay={index * 150} direction="up">
                  <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-2xl hover:bg-slate-800 transition-colors duration-300 h-full group">
                    <div className="text-orange-500 mb-4 font-black text-3xl opacity-50 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
                    <h3 className="text-xl font-bold mb-3 text-white">{reason.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{reason.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES: Animated Marquee / Pill tags */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.3em] mb-12">
              Empowering Global Industries
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {industries.map((industry, index) => (
                <div key={index} className="group flex items-center space-x-2 bg-slate-50 border border-slate-200 px-6 py-3 md:px-8 md:py-4 rounded-full hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 cursor-default">
                  <CheckCircle className="w-5 h-5 text-slate-300 group-hover:text-orange-500 transition-colors" />
                  <span className="font-bold text-slate-700 group-hover:text-slate-900">{industry}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. FINAL CTA: Vibrant Gradient Block */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tighter">
              Ready to Accelerate?
            </h2>
            <p className="text-xl md:text-2xl text-orange-50 mb-12 max-w-2xl mx-auto font-medium">
              Join industry leaders who trust SAGGI TECH for their most critical manufacturing needs.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
            >
              Start Your Project <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
};

export default Home;   