import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Upload, Send, Loader, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    inquiryType: 'quote',
    message: '',
  });
  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      if (files) {
        Array.from(files).forEach(file => {
          formDataToSend.append('files', file);
        });
      }

      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({ name: '', company: '', email: '', phone: '', inquiryType: 'quote', message: '' });
        setFiles(null);
        const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '01244389660', description: '10:00 AM - 6:00 PM IST', href: 'tel:01244389660' },
    { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'saggitechindia@gmail.com', description: 'We respond within 24 hours', href: 'mailto:saggitechindia@gmail.com' },
    { icon: <MapPin className="w-6 h-6" />, label: 'Address', value: '479, Street no. 7, Kadipur Ind. Area', description: 'Patadi Road, Gurugram-122001', href: '#' },
    { icon: <Clock className="w-6 h-6" />, label: 'Business Hours', value: 'Monday - Friday', description: '10:00 AM - 6:00 PM IST', href: null },
  ];

  return (
    <div className="bg-white overflow-hidden text-slate-900 font-sans">
      
      {/* 1. HERO SECTION: Vibrant & Welcoming */}
      <section className="relative pt-24 pb-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full bg-orange-300/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute -bottom-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-amber-200/30 blur-[100px] animate-pulse" style={{ animationDuration: '12s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
              Let's Build Together
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6">
              Contact <span className="text-orange-600">SAGGI TECH</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss your precision manufacturing needs? Get in touch with our engineering team for a comprehensive, custom quote.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. MAIN CONTENT: Form & Info Grid */}
      <section className="py-16 bg-white relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Glassmorphic Contact Form */}
            <div className="lg:col-span-7">
              <FadeIn direction="right">
                <div className="bg-white/80 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/50">
                  <h2 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Request a Quote</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-orange-600">Your Name *</label>
                        <input
                          type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all duration-300 outline-none font-medium"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="company" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-orange-600">Company Name *</label>
                        <input
                          type="text" id="company" name="company" required value={formData.company} onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all duration-300 outline-none font-medium"
                          placeholder="Tech Corp Ltd."
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="group">
                        <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-orange-600">Email Address *</label>
                        <input
                          type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all duration-300 outline-none font-medium"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="phone" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-orange-600">Phone Number</label>
                        <input
                          type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all duration-300 outline-none font-medium"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="inquiryType" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-orange-600">Inquiry Type *</label>
                      <select
                        id="inquiryType" name="inquiryType" required value={formData.inquiryType} onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all duration-300 outline-none font-medium appearance-none cursor-pointer"
                      >
                        <option value="quote">Request a Quote</option>
                        <option value="general">General Question</option>
                        <option value="capabilities">Capabilities Inquiry</option>
                        <option value="partnership">Partnership Opportunity</option>
                      </select>
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-widest mb-2 transition-colors group-focus-within:text-orange-600">Project Details *</label>
                      <textarea
                        id="message" name="message" required rows={5} value={formData.message} onChange={handleInputChange}
                        placeholder="Please describe your project requirements, materials, quantities, timeline, and any specific tolerances..."
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-orange-500/10 focus:border-orange-500 transition-all duration-300 outline-none font-medium resize-none"
                      />
                    </div>

                    {/* Interactive File Upload Area */}
                    <div className="relative group">
                      <input
                        type="file" id="fileUpload" multiple accept=".pdf,.dwg,.step,.iges,.stp,.igs" onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      />
                      <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center bg-slate-50 group-hover:bg-orange-50 group-hover:border-orange-400 transition-all duration-300">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-3 group-hover:text-orange-500 transition-colors duration-300" />
                        <p className="text-sm font-bold text-slate-700 mb-1">Drag & Drop or Click to Upload Files</p>
                        <p className="text-xs text-slate-500 mb-4">Accepted: PDF, DWG, STEP, IGES (Max 10MB)</p>
                        
                        {files && files.length > 0 ? (
                          <div className="inline-block bg-white border border-slate-200 px-4 py-2 rounded-lg text-left shadow-sm">
                            <p className="text-xs font-bold text-slate-700 mb-1 border-b border-slate-100 pb-1">Selected files:</p>
                            <ul className="text-xs text-slate-600 space-y-1">
                              {Array.from(files).map((file, index) => (
                                <li key={index} className="flex items-center"><CheckCircle className="w-3 h-3 text-green-500 mr-2" />{file.name}</li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <span className="inline-block bg-white border border-slate-200 text-slate-700 font-medium px-4 py-2 rounded-lg shadow-sm group-hover:border-orange-300 group-hover:text-orange-600 transition-colors">Browse Files</span>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`relative w-full overflow-hidden px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                        isSubmitting 
                          ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                          : 'bg-orange-600 text-white hover:bg-orange-500 hover:shadow-xl hover:shadow-orange-600/30 hover:-translate-y-1 group'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="w-5 h-5 animate-spin" />
                          <span>Sending Request...</span>
                        </>
                      ) : (
                        <>
                          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-full group-hover:h-56 opacity-10"></span>
                          <span className="relative flex items-center">
                            Submit Inquiry <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </>
                      )}
                    </button>

                    {/* Status Messages */}
                    {submitStatus.type && (
                      <div className={`p-4 rounded-xl flex items-start space-x-3 ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-50 border border-green-200 text-green-800' 
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}>
                        {submitStatus.type === 'success' ? <ShieldCheck className="w-5 h-5 mt-0.5 flex-shrink-0" /> : <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />}
                        <span className="font-medium">{submitStatus.message}</span>
                      </div>
                    )}
                    
                    <p className="text-xs text-slate-500 text-center font-medium">
                      * Required fields. All information is kept strictly confidential.
                    </p>
                  </form>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Info & Map */}
            <div className="lg:col-span-5 space-y-8">
              
              <FadeIn direction="left" delay={150}>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a 
                        key={index}
                        href={info.href || '#'}
                        className={`group flex items-start p-4 rounded-2xl border border-transparent transition-all duration-300 ${info.href ? 'hover:bg-slate-50 hover:border-slate-100 hover:shadow-sm cursor-pointer' : 'cursor-default'}`}
                      >
                        <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300 border border-orange-100">
                          {info.icon}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{info.label}</div>
                          <div className="text-slate-700 font-medium">{info.value}</div>
                          <div className="text-sm text-slate-500">{info.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Map Container */}
              <FadeIn direction="left" delay={300}>
                <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
                  <div className="relative rounded-2xl overflow-hidden h-64 border border-slate-100">
                    <iframe
                      src="https://maps.google.com/maps?q=479%2C%20Street%20no.%207%2C%20Kadipur%20Ind.%20Area%2C%20Patadi%20Road%2C%20Gurugram-122001&output=embed"
                      title="SAGGI TECH Location Map"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>
                  <div className="mt-4 px-4 pb-2 flex justify-between items-center">
                    <p className="text-slate-600 text-sm font-medium">Schedule a facility tour</p>
                    <a
                      href="https://maps.app.goo.gl/xv1zaLdWqHxGy17o9"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-orange-600 hover:text-orange-700 flex items-center group"
                    >
                      Open Maps <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </FadeIn>

              {/* Response Promise */}
              <FadeIn direction="left" delay={450}>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100/50 p-8 rounded-3xl border border-orange-200/50">
                  <h3 className="text-lg font-extrabold text-orange-900 mb-4 flex items-center">
                    <ShieldCheck className="w-6 h-6 mr-2 text-orange-600" />
                    Our Response Promise
                  </h3>
                  <div className="space-y-3">
                    {['Initial response within 4 hours', 'Detailed quote within 2 days', 'No obligation consultation'].map((promise, idx) => (
                      <div key={idx} className="flex items-center text-sm font-bold text-orange-800">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                        {promise}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

            </div>
          </div>
        </div>
      </section>

      {/* 3. EMERGENCY CONTACT: High Contrast Dark Mode */}
      <section className="py-24 relative bg-slate-950 text-white overflow-hidden">
        {/* Pulsing Emergency Glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-red-600/10 blur-[100px] rounded-full pointer-events-none animate-pulse"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-red-500/30">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-4xl font-extrabold mb-4 tracking-tight">Need Urgent Support?</h2>
            <p className="text-xl text-slate-400 mb-10">
              For existing orders, emergency repairs, or critical manufacturing needs requiring immediate attention.
            </p>
            <a
              href="tel:01244389660"
              className="group inline-flex items-center justify-center bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-600/40 hover:-translate-y-1"
            >
              <Phone className="w-6 h-6 mr-3 group-hover:rotate-12 transition-transform" />
              <span>Emergency Line: 01244389660</span>
            </a>
          </FadeIn>
        </div>
      </section>
      
    </div>
  );
};

export default Contact;