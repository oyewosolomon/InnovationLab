import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Director",
      institution: "Stanford University",
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      quote: "InnovationLab Systems has transformed how we manage our research projects. The collaboration tools and IP protection features are invaluable."
    },
    {
      name: "Prof. James Miller",
      role: "Department Head",
      institution: "Oxford University",
      image: "https://randomuser.me/api/portraits/men/99.jpg",
      quote: "The platform's analytics and resource management capabilities have significantly improved our research efficiency."
    },
    {
      name: "Dr. Maria Garcia",
      role: "Lead Researcher",
      institution: "Max Planck Institute",
      image: "https://randomuser.me/api/portraits/women/99.jpg",
      quote: "Managing international collaborations has never been easier. The platform's global accessibility is a game-changer."
    }
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-white sm:text-4xl">
            Trusted by Leading Research Institutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-8 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-300 text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div className="ml-4">
                  <div className="text-white font-medium">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">
                    {testimonial.role}
                  </div>
                  <div className="text-blue-400 text-sm">
                    {testimonial.institution}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
  <div className="inline-flex items-center space-x-8 bg-gray-800 rounded-lg p-8">
    <img src={`https://logo.clearbit.com/harvard.edu`} alt="Harvard University Logo" className="h-10" />
    <img src={`https://logo.clearbit.com/mit.edu`} alt="MIT Logo" className="h-10" />
    <img src={`https://logo.clearbit.com/stanford.edu`} alt="Stanford University Logo" className="h-10" />
    <img src={`https://logo.clearbit.com/cam.ac.uk`} alt="Cambridge University Logo" className="h-10" />
  </div>
</div>


      </div>
    </div>
  );
};

export default Testimonials;