import React from 'react';
import { 
  Users, 
  FileText, 
  Shield, 
  BarChart2, 
  Globe, 
  Calendar 
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Real-time collaboration tools for research teams across institutions. Share data, findings, and resources seamlessly."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resource Management",
      description: "Track and allocate resources efficiently. Monitor budget utilization and equipment availability in real-time."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IP Protection",
      description: "Secure intellectual property management with advanced encryption and access controls. Patent tracking and documentation."
    },
    {
      icon: <BarChart2 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting tools. Track project progress, resource utilization, and research outcomes."
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Access",
      description: "Cloud-based platform accessible from anywhere. Multi-language support for international collaboration."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Project Timeline",
      description: "Interactive timeline views for project planning and milestone tracking. Automated deadline reminders."
    }
  ];

  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to manage research
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Comprehensive tools for research project management, collaboration, and IP protection
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"></div>
              <div className="relative bg-white p-6 rounded-xl">
                <div className="w-12 h-12 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;