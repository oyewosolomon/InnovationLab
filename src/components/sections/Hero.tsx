import React from 'react';
import { ArrowRight, BarChart2, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const statCardVariants = {
    hover: {
      y: -5,
      scale: 1.03,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="relative min-h-screen pt-16 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated Background Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      >
        <div className="h-full w-full bg-[url('/api/placeholder/20/20')] bg-repeat"></div>
      </motion.div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div 
          className="text-center lg:text-left lg:flex lg:items-center lg:justify-between"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="lg:w-1/2">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              variants={itemVariants}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-teal-400">
                Transform Your Research
              </span>
              <br />
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Management
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 mb-8"
              variants={itemVariants}
            >
              Coordinate 1000+ research projects seamlessly. The most comprehensive R&D management platform trusted by leading institutions across 15 countries.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <motion.button 
                className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
              
              <motion.button 
                className="px-8 py-4 border border-gray-500 hover:border-indigo-400 text-white rounded-lg flex items-center justify-center gap-2 transition-all"
                whileHover={{ 
                  borderColor: "#818cf8",
                  backgroundColor: "rgba(30, 41, 59, 0.5)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Book Demo
              </motion.button>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            className="lg:w-1/2 mt-12 lg:mt-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Globe className="w-8 h-8 text-indigo-400 mb-3" />, value: "15+", label: "Countries Worldwide" },
                { icon: <BarChart2 className="w-8 h-8 text-teal-400 mb-3" />, value: "1000+", label: "Research Projects" },
                { icon: <Shield className="w-8 h-8 text-purple-400 mb-3" />, value: "100%", label: "IP Protection" },
                { 
                  icon: (
                    <div className="flex -space-x-2 mb-3">
                      {[...Array(4)].map((_, i) => (
                        <motion.img
                          key={i}
                          src={`https://randomuser.me/api/portraits/men/${50+i}.jpg`}
                          alt="User"
                          className="w-8 h-8 rounded-full border-2 border-gray-800"
                          whileHover={{ scale: 1.1, zIndex: 1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        />
                      ))}
                    </div>
                  ), 
                  value: "50K+", 
                  label: "Active Users" 
                }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700"
                  variants={statCardVariants}
                  whileHover="hover"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {stat.icon}
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
                  <p className="text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating animated elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-indigo-500"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 0.9, 0.6]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-1/3 w-6 h-6 rounded-full bg-teal-500"
        animate={{
          y: [0, 20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default Hero;