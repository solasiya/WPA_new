import React from 'react';
import { motion } from 'framer-motion';
import { Server, Code, Smartphone, Cpu, Shield, Globe, Database, PenTool, Layout, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Full-Stack Development",
      icon: <Code size={40} />,
      desc: "Enterprise-grade web applications built for scale and performance.",
      techs: ["React", "Node.js", "Django", "TypeScript", "Next.js"],
      benefits: ["Custom tailored logic", "High performance UI", "Secure REST APIs", "Scalable architecture"]
    },
    {
      title: "Cloud Infrastructure",
      icon: <Server size={40} />,
      desc: "Robust cloud environments optimized for uptime and security.",
      techs: ["Oracle Cloud (OCI)", "AWS", "Docker", "Kubernetes", "Linux"],
      benefits: ["99.9% Uptime", "Automated CI/CD", "DDoS Protection", "Cost-optimized routing"]
    },
    {
      title: "Mobile App Development",
      icon: <Smartphone size={40} />,
      desc: "Native and cross-platform mobile experiences that engage users.",
      techs: ["Flutter", "Dart", "React Native", "Android", "iOS"],
      benefits: ["Single codebase", "Native performance", "Offline support", "Push notifications"]
    },
    {
      title: "Custom Web Design",
      icon: <PenTool size={40} />,
      desc: "Beautiful, conversion-focused UI/UX design tailored to your brand.",
      techs: ["Figma", "Tailwind CSS", "Framer Motion", "WebGL"],
      benefits: ["Brand consistency", "Responsive layouts", "Accessibility (a11y)", "Micro-animations"]
    },
    {
      title: "eCommerce Solutions",
      icon: <Globe size={40} />,
      desc: "Secure, high-converting online stores with custom payment integrations.",
      techs: ["Shopify Plus", "WooCommerce", "Stripe", "PayFast"],
      benefits: ["Inventory management", "Secure checkouts", "Abandoned cart recovery", "Multi-currency"]
    },
    {
      title: "Custom Gaming PCs & Workstations",
      icon: <Cpu size={40} />,
      desc: "Meticulously built and overclocked systems for raw performance.",
      techs: ["AMD Ryzen", "Intel Core", "NVIDIA RTX", "Custom Water Cooling"],
      benefits: ["Max FPS in 4K", "Thermal optimization", "Cable management", "Stress tested"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
          >
            Digital <span className="text-wpa-blue">Excellence</span> Delivered
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400"
          >
            We combine strategic thinking, engineering excellence, and stunning design to solve complex business challenges.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-wpa-blue dark:hover:border-wpa-blue transition-colors group"
            >
              <div className="text-wpa-blue mb-6 group-hover:scale-110 transition-transform origin-left">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 min-h-[60px]">{service.desc}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                      <CheckCircle size={16} className="text-green-500 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {service.techs.map((tech, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
