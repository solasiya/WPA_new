import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-[#060b14] border-t border-gray-200 dark:border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/assets/logo-new.png" 
                alt="Web Pros Africa Logo" 
                className="h-16 w-auto drop-shadow-md dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all" 
              />
              <span className="font-heading font-bold text-2xl">
                Web Pros <span className="text-wpa-blue">Africa</span>
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Enterprise-grade digital solutions, custom web development, and high-performance PC building for African businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-wpa-blue transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-wpa-blue transition-colors"><XIcon size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-wpa-blue transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-wpa-blue transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-wpa-blue transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-wpa-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-600 dark:text-gray-400 hover:text-wpa-blue transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-600 dark:text-gray-400 hover:text-wpa-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/pc-builder" className="text-gray-600 dark:text-gray-400 hover:text-wpa-blue transition-colors">PC Builder</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li className="text-gray-600 dark:text-gray-400">Full-Stack Development</li>
              <li className="text-gray-600 dark:text-gray-400">Cloud Infrastructure (OCI)</li>
              <li className="text-gray-600 dark:text-gray-400">Mobile App Development</li>
              <li className="text-gray-600 dark:text-gray-400">eCommerce Solutions</li>
              <li className="text-gray-600 dark:text-gray-400">Custom Gaming PCs</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPin size={20} className="text-wpa-blue shrink-0 mt-1" />
                <span>52 Disa Rd, Gordons Bay, Cape Town, 7155, South Africa</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone size={20} className="text-wpa-blue shrink-0" />
                <span>+27 78 178 1007</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail size={20} className="text-wpa-blue shrink-0" />
                <span>info@webprosafrica.co.za</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Web Pros Africa. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-400">
            <Link to="/privacy" className="hover:text-wpa-blue transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-wpa-blue transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
