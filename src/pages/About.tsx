import React, { useEffect, useRef, useState } from 'react';
import { Users, Target, Award, Factory, CheckCircle2, ChevronRight } from 'lucide-react';
import vmcImg from './PHOTOS/VMC.jpg';
import saggitechImg from './PHOTOS/saggitech.jpeg';

// --- Premium Scroll Reveal Wrapper ---
// This adds that "multi-million dollar" cinematic fade-up effect as you scroll
const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = '' }) => {
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

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const About: React.FC = () => {
  const teamMembers = [
    {
      name: 'Manoj Soni',
      title: 'Founder & CEO',
      description: 'With over 30 years in precision manufacturing, Manoj leads our vision for excellence.',
    },
    // {
    //   name: 'Maria Rodriguez',
    //   title: 'VP of Operations',
    //   description: 'Maria ensures our manufacturing processes meet the highest quality standards.',
    // },
  ];

  const capabilities = [
    'CNC & VNC Machining Services',
    'Power Press (up to 250 tons)',
    'Welding Systems',
    'Tube Bending Equipment',
    'Quality Control CMM',
  ];

  return (
    <div className="bg-white overflow-hidden text-slate-900">
      
      {/* Hero Section: Bright, Minimalist, Huge Typography */}
      <section className="relative pt-24 pb-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-orange-50/50 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Discover Our Story
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6">
              About <span className="text-orange-600">SAGGI TECH</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Built on precision, driven by innovation, and committed to excellence in every component we manufacture.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Journey: Editorial Layout with Parallax Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-8">
                A Legacy of <br/><span className="text-orange-600">Precision.</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                <p>
                  Founded in 2002 as <strong>ACE TECHNO ENGINEERS</strong>, our company began with a simple mission: to deliver uncompromising quality and customer commitment in every component we produce. Initially focused on manufacturing precision automobile parts, we built a strong reputation for reliability and excellence.
                </p>
                <p>
                  In 2018, we embraced a new identity as <strong>SAGGI TECH</strong>, marking a strategic evolution in our capabilities. Building on our foundational expertise, we expanded into the dynamic electric vehicle sector, specializing in the production of full-fledged chassis for two-wheelers.
                </p>
                <p>
                  Today, from our modern facility, we combine decades of manufacturing experience with state-of-the-art equipment to deliver superior solutions to industry leaders like Zelio and Okaya.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="relative group">
              {/* Decorative accent block behind image */}
              <div className="absolute -inset-4 bg-slate-100 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform duration-700 -z-10"></div>
              
              <div className="relative rounded-2xl h-[500px] overflow-hidden shadow-2xl shadow-slate-200/50">
                <img 
                  src={saggitechImg} 
                  alt="SAGGI TECH Manufacturing Facility" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  style={{objectPosition: '60% center'}} 
                  loading="lazy" 
                />
                {/* Sleek overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Mission & Vision: Interactive Floating Cards */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <FadeIn delay={100}>
              <div className="group bg-white p-10 md:p-12 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-orange-600/5 hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <Target strokeWidth={2} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To be the most trusted partner for precision manufacturing, delivering exceptional quality, innovative solutions, and reliable service that enables our clients' success in their respective markets.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="group bg-white p-10 md:p-12 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-orange-600/5 hover:-translate-y-2 transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <Award strokeWidth={2} className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Vision</h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To lead the manufacturing industry through continuous innovation, sustainable practices, and an unwavering commitment to quality that sets the standard for precision manufacturing excellence.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Facility & Technology */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Facility & <span className="text-orange-600">Technology</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              State-of-the-art equipment and modern facilities designed for precision manufacturing at scale.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeIn delay={100} className="relative group order-2 lg:order-1">
              <div className="rounded-2xl h-[450px] overflow-hidden shadow-2xl shadow-slate-200/50">
                <img 
                  src={vmcImg} 
                  alt="VMC Manufacturing Equipment" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                  loading="lazy" 
                />
              </div>
            </FadeIn>

            <FadeIn delay={300} className="order-1 lg:order-2">
              <div className="w-14 h-14 bg-slate-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 border border-slate-100">
                <Factory className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 mb-8">
                Advanced Capabilities
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-slate-700 font-medium">{capability}</span>
                  </div>
                ))}
              </div>

              {/* Premium Callout Box */}
              <div className="p-6 bg-slate-50 border-l-4 border-orange-600 rounded-r-xl">
                <p className="text-slate-700 leading-relaxed">
                  <strong className="text-slate-900 font-bold block mb-1">Quality Assurance Guarantee</strong> 
                  Every component is rigorously inspected using our coordinate measuring machines (CMM) to ensure absolute precision tolerance.
                </p>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
              Leadership <span className="text-orange-600">Team</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Meet the experienced professionals driving SAGGI TECH's vision forward.
            </p>
          </FadeIn>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={index} delay={index * 200}>
                <div className="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center w-full sm:w-auto max-w-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-24 h-24 bg-slate-50 rounded-full mx-auto mb-6 flex items-center justify-center border border-slate-100 group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors duration-300">
                    <Users className="w-10 h-10 text-slate-400 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-orange-600 font-bold text-sm tracking-wide uppercase mb-4">{member.title}</p>
                  <p className="text-slate-600 leading-relaxed">{member.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          
        </div>
      </section>

    </div>
  );
};

export default About;