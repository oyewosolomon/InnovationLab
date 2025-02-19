import React from 'react';
import { ArrowRight, BarChart2, Globe, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('/api/placeholder/20/20')] bg-repeat"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
                Transform Your Research
              </span>
              <br />
              Management
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              Coordinate 1000+ research projects seamlessly. The most comprehensive R&D management platform trusted by leading institutions across 15 countries.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 transition-all transform hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button className="px-8 py-4 border border-gray-500 hover:border-blue-400 text-white rounded-lg flex items-center justify-center gap-2 transition-all">
                Book Demo
              </button>
            </div>
          </div>

          {/* Stats Section */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Globe className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-3xl font-bold text-white mb-2">15+</h3>
                <p className="text-gray-400">Countries Worldwide</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <BarChart2 className="w-8 h-8 text-teal-400 mb-3" />
                <h3 className="text-3xl font-bold text-white mb-2">1000+</h3>
                <p className="text-gray-400">Research Projects</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <Shield className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
                <p className="text-gray-400">IP Protection</p>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
                <div className="flex -space-x-2 mb-3">
                  {[...Array(4)].map((_, i) => (
                    <img
                      key={i}
                      src={`/api/placeholder/32/32`}
                      alt="User"
                      className="w-8 h-8 rounded-full border-2 border-gray-800"
                    />
                  ))}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">50K+</h3>
                <p className="text-gray-400">Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;