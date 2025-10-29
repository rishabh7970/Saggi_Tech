import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Upload, Send, Loader } from 'lucide-react';

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
      
      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      // Add files if any
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
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          inquiryType: 'quote',
          message: '',
        });
        setFiles(null);
        // Reset file input
        const fileInput = document.getElementById('fileUpload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        setSubmitStatus({ type: 'error', message: result.message });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Network error. Please check your connection and try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '01244389660',
      description: '10:00 AM - 6:00 PM IST'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'saggitechindia@gmail.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Address',
      value: '479, Street no. 7, Kadipur Ind. Area, Patadi Road, Gurugram-122001',
      description: '479, Street no. 7, Kadipur Ind. Area, Patadi Road, Gurugram-122001'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: 'Business Hours',
      value: 'Monday - Friday',
      description: '10:00 AM - 6:00 PM IST'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact SAGGI TECH</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your precision manufacturing needs? Get in touch with our expert team for a custom quote.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Request a Quote</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type *
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    required
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  >
                    <option value="quote">Request a Quote</option>
                    <option value="general">General Question</option>
                    <option value="capabilities">Capabilities Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your project requirements, materials, quantities, timeline, and any specific tolerances or specifications..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload CAD Files, Drawings, or Specifications</p>
                  <p className="text-xs text-gray-500">Accepted formats: PDF, DWG, STEP, IGES (Max 10MB)</p>
                  <input
                    type="file"
                    id="fileUpload"
                    multiple
                    accept=".pdf,.dwg,.step,.iges,.stp,.igs"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="fileUpload"
                    className="mt-2 inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-md cursor-pointer transition-colors"
                  >
                    Choose Files
                  </label>
                  {files && files.length > 0 && (
                    <div className="mt-3 text-sm text-gray-600">
                      <p>Selected files:</p>
                      <ul className="text-xs text-gray-500">
                        {Array.from(files).map((file, index) => (
                          <li key={index}>• {file.name}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-md font-semibold transition-colors flex items-center justify-center space-x-2 ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Inquiry</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-md ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-800' 
                      : 'bg-red-50 border border-red-200 text-red-800'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <p className="text-xs text-gray-500 text-center">
                  * Required fields. We typically respond within 2 days with a detailed quote.
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-orange-500 mt-1">{info.icon}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{info.label}</div>
                        <div className="text-gray-700">{info.value}</div>
                        <div className="text-sm text-gray-500">{info.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Our Facility</h3>
                <div className="mb-4">
                  <iframe
                    src="https://maps.google.com/maps?q=479%2C%20Street%20no.%207%2C%20Kadipur%20Ind.%20Area%2C%20Patadi%20Road%2C%20Gurugram-122001&output=embed"
                    title="SAGGI TECH Location Map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-64 md:h-80 rounded-lg border-0"
                  />
                  <div className="mt-2 text-right">
                    <a
                      href="https://maps.app.goo.gl/xv1zaLdWqHxGy17o9"
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-orange-600 hover:text-orange-700 underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Schedule a tour of our manufacturing facility to see our advanced equipment and quality processes in action.
                </p>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Our Response Promise</h3>
                <div className="space-y-2 text-sm text-orange-800">
                  <p>✓ Initial response within 4 hours</p>
                  <p>✓ Detailed quote within 2 days</p>
                  {/* <p>✓ Engineering review included</p> */}
                  <p>✓ No obligation consultation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Urgent Support?</h2>
          <p className="text-gray-300 mb-6">
            For existing orders, emergency repairs, or urgent manufacturing needs
          </p>
          <a
            href="tel:01244389660"
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Emergency Line: 01244389660</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;