import React, { useState } from 'react';
import { 
  Users, 
  BarChart2, 
  Lock, 
  Calendar, 
  FileText, 
  Globe,
  ChevronRight
} from 'lucide-react';

const ProductShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      title: "Project Dashboard",
      icon: <BarChart2 className="w-6 h-6" />,
      description: "Comprehensive overview of all research projects",
      benefits: [
        "Real-time project status tracking",
        "Resource allocation insights",
        "Budget monitoring",
        "Timeline visualization"
      ],
      image: "/images/dash.webp"
    },
    {
      id: 1,
      title: "Team Collaboration",
      icon: <Users className="w-6 h-6" />,
      description: "Seamless communication and file sharing",
      benefits: [
        "Real-time document collaboration",
        "Team chat and video meetings",
        "Task assignment and tracking",
        "Research group management"
      ],
     image: "/images/dash.webp"
    },
    {
      id: 2,
      title: "IP Management",
      icon: <Lock className="w-6 h-6" />,
      description: "Secure intellectual property protection",
      benefits: [
        "Patent tracking system",
        "Automated documentation",
        "Access control management",
        "Security compliance tools"
      ],
     image: "/images/dash.webp"
    },
    {
      id: 3,
      title: "Resource Planning",
      icon: <Calendar className="w-6 h-6" />,
      description: "Efficient resource allocation and scheduling",
      benefits: [
        "Equipment booking system",
        "Lab space management",
        "Budget allocation tools",
        "Capacity planning"
      ],
     image: "/images/dash.webp"
    }
  ];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Platform Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Discover the Power of InnovationLab
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore our comprehensive suite of research management tools
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Feature Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-blue-50 border-blue-500 border shadow-sm'
                      : 'border border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-start">
                    <div className={`p-2 rounded-lg ${
                      activeFeature === index ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'
                    }`}>
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className={`font-medium ${
                        activeFeature === index ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Feature Display */}
          <div className="lg:w-2/3">
            <div className="bg-gray-50 rounded-2xl p-8 h-full">
              <div className="aspect-w-16 aspect-h-9 mb-8">
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {features[activeFeature].title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features[activeFeature].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0">
                      <ChevronRight className="h-6 w-6 text-blue-500" />
                    </div>
                    <p className="ml-3 text-gray-500">{benefit}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Partners */}
        <div className="mt-24">
          <h3 className="text-center text-lg font-semibold text-gray-900 mb-8">
            Integrates with your favorite tools
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[...Array(4)].map((_, index) => (
              <img
                key={index}
                src={`/api/placeholder/120/40`}
                alt={`Integration Partner ${index + 1}`}
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;