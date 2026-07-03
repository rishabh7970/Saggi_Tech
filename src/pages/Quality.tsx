import React, { useEffect, useRef, useState } from 'react';
import CountUp from '../components/CountUp'; // Ensure this path is correct
import { Award, CheckCircle, Shield, Target, FileText, Users, ArrowRight, Microscope } from 'lucide-react';
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

const Quality: React.FC = () => {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System certification ensuring consistent quality standards.',
      validUntil: '2026'
    },  
  ];

  const qualityProcess = [
    {
      title: 'Incoming Material Inspection',
      description: 'All raw materials are rigorously inspected for compliance with specifications before any processing begins.',
      tools: ['Material certificates review', 'Dimensional verification', 'Surface quality check']
    },
    {
      title: 'In-Process Quality Control',
      description: 'Continuous monitoring during manufacturing to prevent defects and ensure micron-level accuracy.',
      tools: ['Real-time measurement', 'Process parameter monitoring', 'First article inspection']
    },
    {
      title: 'Final Quality Assurance',
      description: 'Comprehensive, multi-point inspection of finished parts before authorization for shipment.',
      tools: ['CMM measurement (if required)', 'Visual inspection', 'Functional testing']
    },
    {
      title: 'Documentation & Traceability',
      description: 'Complete digital and physical documentation for full traceability of all components.',
      tools: ['Quality certificates', 'Measurement reports', 'Material traceability']
    }
  ];

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
      specs: 'High-accuracy manual and digital calipers',
      applications: ['Fast dimensional checks', 'Prototype verifications', 'Toolroom use']
    },
    {
      name: 'Screw Gauge',
      specs: 'Micrometer screw gauge for precision measurements',
      applications: ['Precision thickness measurement', 'Shaft and pin diameter checks', 'Toolroom verification']
    }
  ];

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
    <div className="bg-white overflow-hidden text-slate-900 font-sans">
      
      {/* 1. HERO SECTION: Bright & Authoritative */}
      <section className="relative pt-24 pb-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full bg-orange-200/30 blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Zero Compromise
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6">
              Quality & <span className="text-orange-600">Certifications</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Our commitment to excellence is backed by rigorous quality systems, advanced inspection equipment, and globally recognized industry certifications.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. QUALITY PHILOSOPHY & STATS */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn direction="right">
              <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-orange-100">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Our Quality <span className="text-orange-600">Philosophy</span>
              </h2>
              <div className="text-lg text-slate-600 leading-relaxed space-y-6">
                <p>
                  At SAGGI TECH, quality isn't just a goal—it's embedded in every aspect of our manufacturing process. From the moment raw materials enter our facility to the final inspection before shipment, we maintain the highest standards of precision and excellence.
                </p>
                <p>
                  Our quality management system is designed around continuous improvement, preventive measures, and complete customer satisfaction. We believe that quality is everyone's responsibility, from our engineers and machinists to our management team.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={200}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CountUp end={99.8} decimals={1} suffix="%" className="text-5xl font-black text-slate-900 mb-2 block" />
                  <div className="text-sm font-bold text-orange-600 uppercase tracking-widest mt-2">Quality Rate</div>
                </div>
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <CountUp end={0.1} prefix="±" suffix="mm" decimals={1} className="text-5xl font-black text-slate-900 mb-2 block" />
                  <div className="text-sm font-bold text-orange-600 uppercase tracking-widest mt-2">Standard Tolerance</div>
                </div>
                
                {/* Single Certification Badge */}
                {certifications.map((cert, index) => (
                  <div key={index} className="sm:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl text-white shadow-xl flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl group-hover:bg-orange-500/30 transition-colors duration-500"></div>
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-inner">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="inline-block bg-orange-500/20 text-orange-300 border border-orange-500/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
                        Certified until {cert.validUntil}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 tracking-tight">{cert.name}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 3. QUALITY ASSURANCE PROCESS (Dark Mode Contrast) */}
      <section className="py-32 relative bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-orange-600/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Quality Assurance <span className="text-orange-500">Process</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A systematic, four-step approach to ensuring every component meets or exceeds specifications.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {qualityProcess.map((process, index) => (
              <FadeIn key={index} delay={index * 150} direction="up" className="relative group">
                <div className="relative z-10 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-8 rounded-3xl hover:bg-slate-800 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col">
                  {/* Huge Watermark Number */}
                  <div className="absolute top-4 right-6 text-7xl font-black text-slate-800/50 group-hover:text-orange-500/10 transition-colors duration-300 pointer-events-none">
                    0{index + 1}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 mt-2 relative z-10">{process.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 relative z-10">{process.description}</p>
                  
                  <div className="space-y-3 relative z-10">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Methods & Tools</h4>
                    {process.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INSPECTION EQUIPMENT */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Inspection <span className="text-orange-600">Equipment</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              State-of-the-art measurement and inspection technology deployed by our team of experts (15+ Years Average Experience).
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {equipment.map((item, index) => (
              <FadeIn key={index} delay={index * 100} direction="up">
                <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-xl flex items-center justify-center border border-slate-100">
                      <FileText className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{item.name}</h3>
                  </div>
                  <p className="text-orange-600 font-bold text-sm tracking-wide mb-6">{item.specs}</p>
                  
                  <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Applications</div>
                    {item.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span className="text-slate-700 text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          
          {/* Planned Advanced Inspection Equipment */}
          <FadeIn>
            <div className="bg-white p-10 md:p-12 rounded-3xl border-2 border-dashed border-slate-200">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">Future Capabilities</h3>
                  <p className="text-slate-500">Advanced equipment planned for upcoming facility upgrades.</p>
                </div>
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center border border-slate-100 flex-shrink-0">
                  <Microscope className="w-8 h-8 text-slate-400" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {plannedEquipment.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.name}</h4>
                    <p className="text-orange-600 font-bold text-sm tracking-wide mb-6">{item.specs}</p>
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Applications</div>
                      {item.applications.map((app, appIndex) => (
                        <div key={appIndex} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                          <span className="text-slate-600 text-sm">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-500 to-amber-500"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 text-white">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tighter">
              Experience the Quality Difference
            </h2>
            <p className="text-xl md:text-2xl text-orange-50 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              Partner with SAGGI TECH for precision manufacturing that consistently exceeds industry standards.
            </p>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center bg-white text-orange-600 px-10 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all duration-300 hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1"
            >
              Request a Quote <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
};

export default Quality;