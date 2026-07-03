import React, { useEffect, useRef, useState } from 'react';
import { Car, Cog, CheckCircle2, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import automotiveImg from './PHOTOS/Automotive comp.jpg';
import industrialImg from './PHOTOS/industrial mc comp.jpg';

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

// --- Mini CountUp for Stats Section ---
const AnimatedCounter: React.FC<{ end: number; suffix?: string; prefix?: string; decimals?: number }> = ({ end, suffix = '', prefix = '', decimals = 0 }) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started) setStarted(true);
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTimestamp: number | null = null;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out quart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setValue(progress === 1 ? end : end * easeProgress);
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [started, end]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{value.toFixed(decimals)}{suffix}
    </span>
  );
};

const Industries: React.FC = () => {
  const industries = [
    {
      icon: <Car className="w-8 h-8" />,
      name: 'Automotive & EV',
      description: 'Engineering mission-critical structural and chassis components for traditional OEMs and next-generation Electric Vehicle brands.',
      applications: [
        'Full-fledged EV two-wheeler chassis & frames',
        'Structural body brackets & reinforcements',
        'Exhaust system precision components',
        'Suspension mounting brackets & assemblies',
        'Custom automotive manufacturing fixtures'
      ],
      materials: ['High-Strength Steel (HSLA)', 'Aluminum Alloys', 'Stainless Steel'],
      projects: '500+ Automotive Projects Delivered',
      image: automotiveImg
    },
    {
      icon: <Cog className="w-8 h-8" />,
      name: 'Industrial Machinery',
      description: 'Heavy-duty structural components and high-precision assemblies designed to withstand severe mechanical stress in industrial environments.',
      applications: [
        'Catalytic Converter Stuffing & Assemblies',
        'High-pressure hydraulic system components',
        'Custom tooling, dies, and assembly fixtures',
        'Heavy equipment mounting structures',
        'Precision internal frame architectures'
      ],
      materials: ['Carbon Steel', 'Stainless Steel (304/316)', 'Structural Aluminum'],
      projects: '300+ Machinery Systems Built',
      image: industrialImg
    }
  ];

  return (
    <div className="bg-white overflow-hidden text-slate-900 font-sans">
      
      {/* 1. HERO SECTION: Bright, Airy, with Subtle Glowing Mesh */}
      <section className="relative pt-24 pb-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] right-[15%] w-[45vw] h-[45vw] rounded-full bg-orange-200/30 blur-[120px] animate-pulse" style={{ animationDuration: '9s' }}></div>
          <div className="absolute top-[30%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-blue-100/40 blur-[100px] animate-pulse" style={{ animationDuration: '11s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Market Expertise
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6">
              Industries We <span className="text-orange-600">Serve</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Delivering high-tolerance sheet metal and tubular solutions to sectors where structural integrity and micron-level precision are non-negotiable.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. INDUSTRIES LIST: Editorial Split Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {industries.map((industry, index) => {
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  
                  {/* Content Column */}
                  <FadeIn 
                    direction={isEven ? 'right' : 'left'} 
                    className={`lg:col-span-7 flex flex-col justify-center ${!isEven ? 'lg:order-2' : ''}`}
                  >
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center shadow-inner border border-orange-100 flex-shrink-0">
                        {industry.icon}
                      </div>
                      <div>
                        <span className="text-xs font-bold text-orange-600 uppercase tracking-widest block">Sector Focus</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">{industry.name}</h2>
                      </div>
                    </div>

                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {industry.description}
                    </p>

                    {/* Applications Grid */}
                    <div className="mb-8">
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Key Applications</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {industry.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-start space-x-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100 hover:border-orange-200 transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-700 font-medium text-sm leading-snug">{app}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Materials & Track Record Banner */}
                    <div className="bg-slate-900 text-white p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl shadow-slate-900/10">
                      <div>
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-1.5">Common Materials</span>
                        <div className="flex flex-wrap gap-2">
                          {industry.materials.map((mat, matIndex) => (
                            <span key={matIndex} className="bg-slate-800 text-slate-200 text-xs font-semibold px-2.5 py-1 rounded-md border border-slate-700">
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-slate-800 pt-3 sm:pt-0 sm:pl-6 w-full sm:w-auto">
                        <span className="text-[11px] font-bold text-orange-400 uppercase tracking-widest block mb-1">Track Record</span>
                        <span className="text-sm font-bold text-white whitespace-nowrap">{industry.projects}</span>
                      </div>
                    </div>
                  </FadeIn>

                  {/* Image Column */}
                  <FadeIn 
                    direction={isEven ? 'left' : 'right'} 
                    delay={150} 
                    className={`lg:col-span-5 relative group ${!isEven ? 'lg:order-1' : ''}`}
                  >
                    <div className="absolute -inset-3 bg-gradient-to-tr from-orange-500/10 to-slate-200/50 rounded-3xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-700 -z-10"></div>
                    
                    <div className="relative rounded-3xl h-[420px] lg:h-[520px] overflow-hidden shadow-2xl shadow-slate-200/80 border border-white">
                      <img 
                        src={industry.image} 
                        alt={`${industry.name} Components`} 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                        loading="lazy" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60"></div>
                      
                      {/* Floating Quality Seal */}
                      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-white flex items-center space-x-2.5">
                        <ShieldCheck className="w-5 h-5 text-orange-600" />
                        <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">100% CMM Inspected</span>
                      </div>
                    </div>
                  </FadeIn>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC STATS SECTION: High-Contrast Dark Mode */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[30vw] bg-orange-600/20 blur-[140px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Proven Performance by the <span className="text-orange-500">Numbers</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Our metrics reflect decades of engineering rigor and uncompromising quality control.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={100}>
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-2xl text-center hover:border-orange-500/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                  <AnimatedCounter end={1300} suffix="+" />
                </div>
                <div className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-1">Total Output</div>
                <div className="text-slate-400 text-sm">Manufacturing Projects Completed</div>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-2xl text-center hover:border-orange-500/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                  <AnimatedCounter end={99.8} suffix="%" decimals={1} />
                </div>
                <div className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-1">Precision Rating</div>
                <div className="text-slate-400 text-sm">First-Time-Right Quality Rate</div>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800 p-8 rounded-2xl text-center hover:border-orange-500/40 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tight">
                  <AnimatedCounter end={23} suffix="+" />
                </div>
                <div className="text-xs font-bold text-orange-500 uppercase tracking-[0.2em] mb-1">Combined Legacy</div>
                <div className="text-slate-400 text-sm">Years of Engineering Experience</div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 4. FINAL CTA: Consistent Vibrant Brand Banner */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">
              Don't See Your Industry Listed?
            </h2>
            <p className="text-xl md:text-2xl text-orange-50 mb-10 max-w-2xl mx-auto font-medium">
              Our tool room and CNC capabilities adapt to almost any custom metal fabrication requirement.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
            >
              Discuss Your Project <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  );
};

export default Industries;