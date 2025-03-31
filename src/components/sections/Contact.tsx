import React, { useState } from 'react';
import { 
  Mail, 
  MessageSquare, 
  Book, 
  Users,
  Clock,
  ArrowRight,
  Globe,
  HelpCircle,
  Send
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });

  const [activeCategory, setActiveCategory] = useState('general');

  const supportOptions = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat Support",
      description: "Get instant help from our support team",
      availability: "24/7 Support"
    },
    {
      icon: <Book className="w-6 h-6" />,
      title: "Knowledge Base",
      description: "Extensive documentation and tutorials",
      availability: "Self-service"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Forum",
      description: "Connect with other researchers",
      availability: "Always available"
    }
  ];

  const inquiryCategories = [
    { id: 'general', label: 'General Inquiry', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'support', label: 'Technical Support', icon: <MessageSquare className="w-5 h-5" /> },
    { id: 'feedback', label: 'Feedback', icon: <Send className="w-5 h-5" /> }
  ];

  const regions = [
    { id: 'americas', name: 'Americas', email: 'americas@innovationlab.com' },
    { id: 'emea', name: 'Europe, Middle East & Africa', email: 'emea@innovationlab.com' },
    { id: 'apac', name: 'Asia Pacific', email: 'apac@innovationlab.com' }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Reach Out
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let's Start a Conversation
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our team is ready to assist with your questions and needs
          </p>
        </div>

        {/* Support Options Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {supportOptions.map((option, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                {option.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">{option.title}</h3>
              <p className="text-gray-500 mb-4">{option.description}</p>
              <div className="flex items-center text-sm text-gray-400">
                <Clock className="w-4 h-4 mr-1" />
                {option.availability}
              </div>
            </div>
          ))}
        </div>

        {/* Global Regions Section */}
        <div className="mb-20 bg-indigo-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Contact Us Worldwide</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {regions.map((region) => (
              <div key={region.id} className="bg-white rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 mx-auto mb-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-medium text-gray-900 mb-2">{region.name}</h4>
                <a 
                  href={`mailto:${region.email}`} 
                  className="text-indigo-600 hover:text-indigo-800 transition-colors"
                >
                  {region.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Sidebar */}
            <div className="lg:col-span-2 bg-gradient-to-br from-indigo-600 to-indigo-800 p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">How Can We Help?</h3>
              <p className="mb-8 text-indigo-100">
                Select a category that best describes your inquiry and we'll make sure it reaches the right team.
              </p>
              
              <div className="space-y-4">
                {inquiryCategories.map((category) => (
                  <div 
                    key={category.id}
                    className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                      activeCategory === category.id 
                        ? 'bg-white bg-opacity-20' 
                        : 'hover:bg-white hover:bg-opacity-10'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="bg-indigo-500 bg-opacity-40 p-2 rounded-lg mr-3">
                      {category.icon}
                    </div>
                    <span className="font-medium">{category.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h4 className="text-xl font-medium mb-4">Primary Contact</h4>
                <div className="flex items-center mb-4">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>support@innovationlab.com</span>
                </div>
                <div className="p-4 bg-indigo-700 bg-opacity-40 rounded-lg mt-8">
                  <h5 className="font-medium mb-2">Support Hours</h5>
                  <p className="text-sm text-indigo-100">
                    Our team is available Monday through Friday, 24/7.<br />
                    Weekend support: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.organization}
                    onChange={(e) => setFormData({...formData, organization: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center"
                >
                  Submit Message
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;