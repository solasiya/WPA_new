import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Server, Code, Smartphone, Cpu, Shield, Zap, ChevronRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Counter = ({ end, label }: { end: number, label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center p-6 glass rounded-2xl">
      <h3 className="text-4xl md:text-5xl font-heading font-bold text-gradient mb-2">{count}+</h3>
      <p className="text-gray-600 dark:text-gray-300 font-medium">{label}</p>
    </div>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-wpa-blue/20 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-wpa-purple/20 blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Enterprise-Grade <br className="hidden md:block" />
            <span className="text-gradient">Digital Solutions</span> <br className="hidden md:block" />
            for African Businesses
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10"
          >
            We specialize in full-stack development, cloud infrastructure, custom mobile apps, and high-performance workstation PC building.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="px-8 py-4 rounded-lg bg-gradient-to-r from-wpa-blue to-wpa-purple text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-2 group">
              Get a Quote <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/pc-builder" className="px-8 py-4 rounded-lg glass text-gray-900 dark:text-white font-bold text-lg hover:bg-white/20 dark:hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Cpu /> Build Your PC
            </Link>
            <Link to="/portfolio" className="px-8 py-4 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white font-bold text-lg hover:border-wpa-blue hover:text-wpa-blue transition-all flex items-center justify-center">
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50 dark:bg-[#060b14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-4">Our Premium Services</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Cutting-edge technology solutions tailored for your business needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Code size={32} />, title: "Full-Stack Dev", desc: "React, Node.js, and Django enterprise applications." },
              { icon: <Server size={32} />, title: "Cloud Infrastructure", desc: "OCI deployments, DevOps, and secure networks." },
              { icon: <Smartphone size={32} />, title: "Mobile Apps", desc: "Native and cross-platform Flutter/Dart solutions." },
              { icon: <Cpu size={32} />, title: "Custom PCs", desc: "High-end gaming rigs and creator workstations." },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-wpa-blue/10 flex items-center justify-center text-wpa-blue mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{service.desc}</p>
                <Link to="/services" className="text-wpa-blue font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6">Why Partner With <span className="text-wpa-blue">Web Pros</span>?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                We don't just build websites; we engineer digital ecosystems that drive growth, efficiency, and market dominance.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: <Shield className="text-green-500" />, title: "Enterprise-Grade Security", desc: "Military-grade encryption and secure architecture." },
                  { icon: <Zap className="text-yellow-500" />, title: "Lightning Fast Performance", desc: "Optimized infrastructure for sub-second load times." },
                  { icon: <Server className="text-purple-500" />, title: "Scalable Systems", desc: "Cloud-native designs that grow with your business." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1 glass p-3 rounded-lg h-min">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
               {/* Decorative tech graphic placeholder */}
               <div className="aspect-square w-full rounded-full bg-gradient-to-tr from-wpa-blue/20 to-wpa-purple/20 blur-3xl absolute inset-0" />
               <div className="relative glass border border-white/20 p-2 rounded-2xl">
                 <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Cyber Security Tech" className="rounded-xl w-full h-[500px] object-cover" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#060b14] border-y border-gray-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Counter end={150} label="Projects Completed" />
            <Counter end={95} label="Happy Clients" />
            <Counter end={50} label="Systems Deployed" />
            <Counter end={200} label="Custom PCs Built" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-16">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-2xl text-left relative"
              >
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, idx) => <Star key={idx} size={18} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic mb-6">
                  "Web Pros Africa completely transformed our digital presence. The cloud infrastructure they deployed is blazing fast and the new web app has doubled our leads."
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-wpa-blue to-wpa-purple" />
                  <div>
                    <h5 className="font-bold text-gray-900 dark:text-white">Business Owner {i}</h5>
                    <p className="text-sm text-wpa-blue">Tech Startup</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-wpa-blue to-wpa-purple opacity-90 dark:opacity-100 mix-blend-multiply" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">Ready to Digitally Transform Your Business?</h2>
          <p className="text-xl mb-10 text-white/90">Join top enterprises leveraging our world-class development and infrastructure solutions.</p>
          <Link to="/contact" className="px-10 py-5 rounded-lg bg-white text-wpa-navy font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all inline-block">
            Start Your Project Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
