import React from 'react';
import { Search, Calendar, CheckCircle, Star } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Find Your Service",
      description: "Browse through our verified service providers or search for specific services in your area.",
      color: "blue"
    },
    {
      icon: Calendar,
      title: "Book Instantly",
      description: "Select your preferred time slot and book your service with our real-time scheduling system.",
      color: "green"
    },
    {
      icon: CheckCircle,
      title: "Get It Done",
      description: "Our professional will arrive on time and complete your service to the highest standards.",
      color: "purple"
    },
    {
      icon: Star,
      title: "Share Your Experience",
      description: "Rate and review your service provider to help maintain our high-quality standards.",
      color: "yellow"
    }
  ];

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How HomeServices Hub Works
          </h2>
          <p className="text-xl text-gray-600">
            Get your home services taken care of in four simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection lines */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <div key={index} className="relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full bg-${step.color}-50 flex items-center justify-center mb-6`}>
                  <step.icon className={`w-8 h-8 text-${step.color}-500`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;