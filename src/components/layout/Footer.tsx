import React from 'react';
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { label: 'Features', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Resources', href: '#' }
    ],
    company: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'News', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Stay updated with InnovationLab
              </h3>
              <p className="text-gray-400">
                Get the latest updates on research management and innovation
              </p>
            </div>
            <div>
              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500"
                />
                <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg flex items-center transition-colors">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="text-2xl font-bold text-white mb-4">InnovationLab</div>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering research institutions with comprehensive project management 
              and collaboration tools. Present in 15+ countries worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-lg font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 InnovationLab Systems. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;