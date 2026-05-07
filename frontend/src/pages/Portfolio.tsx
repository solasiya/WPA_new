import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2 } from 'lucide-react';

const categories = ['All', 'Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Infrastructure', 'Gaming PCs'];

const portfolioData = [
  {
    id: 1,
    title: 'Fintech Africa',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    description: 'A comprehensive financial dashboard and payment gateway integration for a leading African fintech startup.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    clientGoals: 'Create a secure, real-time dashboard for users to track transactions and manage digital wallets.',
    results: 'Increased user retention by 40% and processed over R10M in transactions in the first quarter.',
  },
  {
    id: 2,
    title: 'Local Connect',
    category: 'Mobile Apps',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80',
    description: 'A cross-platform mobile application connecting local artisans with buyers across South Africa.',
    technologies: ['Flutter', 'Dart', 'Firebase'],
    clientGoals: 'Build an intuitive mobile marketplace with real-time chat and location-based search.',
    results: 'Achieved 50,000+ downloads within 3 months with a 4.8-star rating on App Stores.',
  },
  {
    id: 3,
    title: 'OCI Infrastructure Deployment',
    category: 'Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    description: 'Enterprise-grade cloud migration and deployment on Oracle Cloud Infrastructure for a logistics firm.',
    technologies: ['Oracle Cloud', 'Kubernetes', 'Docker', 'Terraform'],
    clientGoals: 'Migrate legacy on-premise systems to a highly available, scalable cloud environment.',
    results: 'Reduced IT operational costs by 35% and achieved 99.99% uptime.',
  },
  {
    id: 4,
    title: 'Project Nova Rig',
    category: 'Gaming PCs',
    image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80',
    description: 'A custom-built, water-cooled high-performance gaming PC and workstation for a professional streamer.',
    technologies: ['Intel i9-14900K', 'RTX 4090', 'Custom Loop Cooling'],
    clientGoals: 'Build a visually stunning, silent PC capable of 4K gaming and streaming simultaneously without thermal throttling.',
    results: 'Maintained core temperatures below 65°C under full synthetic load while achieving max FPS.',
  },
  {
    id: 5,
    title: 'Business Marketing Portal',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    description: 'Complete brand redesign and interactive marketing portal for a corporate client.',
    technologies: ['Figma', 'Framer Motion', 'Tailwind CSS'],
    clientGoals: 'Modernize the brand identity and create a high-converting landing page ecosystem.',
    results: 'Improved lead generation conversion rates by 150%.',
  },
  {
    id: 6,
    title: 'E-Commerce Platform Redux',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80',
    description: 'A headless e-commerce solution with sub-second page loads and dynamic inventory management.',
    technologies: ['Next.js', 'Shopify GraphQL', 'Tailwind CSS'],
    clientGoals: 'Replace a slow legacy WooCommerce site with a modern, headless architecture.',
    results: 'Decreased page load time from 4.5s to 0.8s, resulting in a 25% boost in sales.',
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof portfolioData[0] | null>(null);

  const filteredProjects = filter === 'All' 
    ? portfolioData 
    : portfolioData.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-20 relative">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-wpa-blue/10 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold text-gray-900 dark:text-white mb-6"
          >
            Our <span className="text-gradient">Featured Work</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore our diverse portfolio of enterprise web applications, mobile solutions, cloud deployments, and custom PC builds.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category 
                  ? 'bg-wpa-blue text-white shadow-lg shadow-wpa-blue/30' 
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer glass rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-wpa-blue/10 transition-all"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 z-20">
                    <span className="px-3 py-1 text-xs font-semibold bg-wpa-blue text-white rounded-full backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-wpa-blue transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                className="bg-white dark:bg-wpa-navy w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={24} />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="h-64 md:h-full relative">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-8 max-h-[80vh] overflow-y-auto">
                    <div className="mb-6">
                      <span className="px-3 py-1 text-xs font-semibold bg-wpa-blue/20 text-wpa-blue rounded-full mb-4 inline-block">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        {selectedProject.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <Code2 size={20} className="text-wpa-purple" /> Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.technologies.map(tech => (
                            <span key={tech} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Client Goals</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                          {selectedProject.clientGoals}
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Results Achieved</h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm p-4 bg-green-500/10 text-green-700 dark:text-green-400 rounded-lg border border-green-500/20">
                          {selectedProject.results}
                        </p>
                      </div>
                      
                      <button className="w-full mt-4 py-3 bg-gradient-to-r from-wpa-blue to-wpa-purple text-white font-bold rounded-lg hover:shadow-lg hover:shadow-wpa-blue/30 transition-all flex justify-center items-center gap-2">
                        View Live Project <ExternalLink size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Portfolio;
