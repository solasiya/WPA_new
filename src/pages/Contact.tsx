import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceNeeded: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      const { prefilledMessage, prefilledService } = location.state;
      if (prefilledMessage || prefilledService) {
        setFormData(prev => ({
          ...prev,
          message: prefilledMessage || prev.message,
          serviceNeeded: prefilledService || prev.serviceNeeded
        }));
      }
    }
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Replace with your actual EmailJS Service ID, Template ID, and Public Key
      await emailjs.send(
        'service_mwru1q8',
        'template_931njkh',
        {
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          business_name: formData.businessName,
          service_needed: formData.serviceNeeded,
          budget: formData.budget,
          message: formData.message,
        },
        {
          publicKey: '9_I4ibu8KEUtCgjDg',
        }
      );

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '', email: '', phone: '', businessName: '', serviceNeeded: '', budget: '', message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('FAILED...', error);
      alert(`EmailJS Error: ${error?.text || error?.message || JSON.stringify(error) || 'Unknown error'}`);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="text-wpa-blue" size={24} />,
      title: "Our Headquarters",
      details: "52 Disa Rd, Gordons Bay, Cape Town, 7155, South Africa"
    },
    {
      icon: <Phone className="text-wpa-blue" size={24} />,
      title: "Call Us",
      details: "+27 78 178 1007",
      link: "tel:+27781781007"
    },
    {
      icon: <Mail className="text-wpa-blue" size={24} />,
      title: "Email Us",
      details: "info@webprosafrica.co.za",
      link: "mailto:info@webprosafrica.co.za"
    },
    {
      icon: <Clock className="text-wpa-blue" size={24} />,
      title: "Business Hours",
      details: "Mon - Fri: 08:00 AM - 05:00 PM"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-wpa-blue/10 blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
          >
            Let's Build Something <span className="text-wpa-blue">Extraordinary</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Whether you need enterprise software, a cloud migration, or a custom gaming PC, our team is ready to deliver.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h3>

              <div className="space-y-6">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 bg-wpa-blue/10 p-3 rounded-xl h-min">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className="text-gray-600 dark:text-gray-400 hover:text-wpa-blue transition-colors">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/27781781007"
                target="_blank"
                rel="noreferrer"
                className="mt-8 w-full py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 transition-all flex justify-center items-center gap-2"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>

            {/* Google Map */}
            <div className="glass p-2 rounded-2xl overflow-hidden h-64 border border-gray-200 dark:border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.111956557876!2d18.8687!3d-34.1565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA5JzIzLjQiUyAxOMKwNTInMDcuMyJF!5e0!3m2!1sen!2sza!4v1620000000000!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                allowFullScreen={true}
                loading="lazy"
                title="Web Pros Africa Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 glass p-8 rounded-2xl border border-gray-200 dark:border-white/10"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-700 dark:text-green-400 rounded-lg">
                Thank you! Your message has been sent successfully. We will get back to you shortly.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-700 dark:text-red-400 rounded-lg">
                Oops! Something went wrong. Please try again later or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#060b14] border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-wpa-blue"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#060b14] border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-wpa-blue"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#060b14] border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-wpa-blue"
                    placeholder="+27 12 345 6789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#060b14] border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-wpa-blue"
                    placeholder="Your Company Ltd"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service Needed *</label>
                  <select
                    name="serviceNeeded"
                    required
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#060b14] border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-wpa-blue"
                  >
                    <option value="">Select a service...</option>
                    <option value="Web Development">Full-Stack Web Development</option>
                    <option value="Cloud Infrastructure">Cloud Infrastructure & DevOps</option>
                    <option value="Mobile App">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX & Web Design</option>
                    <option value="E-Commerce">E-Commerce Solution</option>
                    <option value="PC Build">Custom Gaming PC / Workstation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Estimated Budget (ZAR)</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-[#060b14] border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-wpa-blue"
                  >
                    <option value="">Select a range...</option>
                    <option value="< R10k">Less than R10,000</option>
                    <option value="R10k - R30k">R10,000 - R30,000</option>
                    <option value="R30k - R100k">R30,000 - R100,000</option>
                    <option value="R100k+">R100,000+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Message *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-[#060b14] border border-gray-300 dark:border-gray-700 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-wpa-blue resize-none"
                  placeholder="Tell us about your project goals, timelines, and specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-wpa-blue to-wpa-purple text-white font-bold rounded-xl hover:shadow-lg hover:shadow-wpa-blue/30 transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
