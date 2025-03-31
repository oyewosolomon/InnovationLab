import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    {
      title: 'Products',
      dropdown: [
        { label: 'Research Management', href: '#' },
        { label: 'Collaboration Tools', href: '#' },
        { label: 'IP Protection', href: '#' },
        { label: 'Analytics Dashboard', href: '#' }
      ]
    },
    {
      title: 'Solutions',
      dropdown: [
        { label: 'For Universities', href: '#' },
        { label: 'For Research Labs', href: '#' },
        { label: 'For Enterprises', href: '#' }
      ]
    },
    { title: 'Pricing', href: '/#pricing' },
    { title: 'Resources', href: '#resources' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
          <svg fill={` ${ isScrolled?'#4f46e5':'#ffffff' } `} height="40px" width="40px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M495.26,89.044h-267.13c-9.22,0-16.696,7.475-16.696,16.696v50.087h-69.009v267.13h219.27c0.001,0,0.001,0,0.002,0 c9.297-0.002,16.693-7.599,16.693-16.696v-50.087h116.87c9.22,0,16.696-7.475,16.696-16.696V105.739 C511.955,96.519,504.48,89.044,495.26,89.044z M344.999,379.246l-46.146-23.072h46.146V379.246z M311.608,256l-33.391-33.391 l33.391-33.391l33.391,33.391L311.608,256z M411.782,256l-33.391-33.391l33.391-33.391l33.391,33.391L411.782,256z"></path> </g> </g> <g> <g> <path d="M66.827,166.957c-14.706,0-28.68-3.186-41.272-8.902v337.25c0,9.22,7.475,16.696,16.696,16.696h50.087 c9.22,0,16.696-7.475,16.696-16.696c0-12.03,0-325.561,0-337.544v-0.144C96.199,163.604,81.899,166.957,66.827,166.957z"></path> </g> </g> <g> <g> <path d="M66.827,0C30.001,0,0.045,29.956,0.045,66.783c0,36.826,29.956,66.783,66.783,66.783s66.783-29.956,66.783-66.783 C133.61,29.956,103.653,0,66.827,0z"></path> </g> </g> </g></svg>
            <span className={`text-2xl font-bold ${isScrolled?'text-indigo-600':'text-white' }`}>InnovationLab</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className={`flex items-center space-x-1 ${isScrolled?'text-gray-600':'text-gray-200' }  hover:text-indigo-300`}>
                  <span>{item.title}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-indigo-600">
              Sign In
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              Start Free Trial
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">
                {item.title}
              </button>
              {item.dropdown && (
                <div className="pl-4 space-y-1">
                  {item.dropdown.map((dropdownItem, idx) => (
                    <a
                      key={idx}
                      href={dropdownItem.href}
                      className="block px-3 py-2 text-base font-medium text-gray-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-md"
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 space-y-2">
            <button className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-md">
              Sign In
            </button>
            <button className="block w-full px-3 py-2 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;