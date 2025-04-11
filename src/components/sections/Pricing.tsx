import React, { useState } from 'react';
import { Check, Info, HelpCircle } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small research teams",
      price: isAnnual ? "100,00" : "25,000",
      features: [
        "Up to 10 research projects",
        "Basic collaboration tools",
        "Standard analytics",
        "Email support",
        "5GB storage per project",
        "Basic IP protection"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      description: "Ideal for research departments",
      price: isAnnual ? "260,000" : "120,000",
      features: [
        "Up to 50 research projects",
        "Advanced collaboration suite",
        "Real-time analytics dashboard",
        "Priority support",
        "25GB storage per project",
        "Advanced IP protection",
        "Custom workflows",
        "API access"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      description: "For large institutions",
      price: "Custom",
      features: [
        "Unlimited research projects",
        "Enterprise collaboration suite",
        "Custom analytics & reporting",
        "24/7 dedicated support",
        "Unlimited storage",
        "Enterprise-grade security",
        "Custom integration",
        "On-premise deployment option",
        "SLA guarantee"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24" id='pricing'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Pricing Plans
          </h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Choose the Perfect Plan for Your Research
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Flexible pricing options designed to meet the needs of any research institution
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 flex justify-center items-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none"
              style={{ backgroundColor: isAnnual ? '#3B82F6' : '#D1D5DB' }}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual billing
              <span className="ml-1.5 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl ${
                plan.highlighted
                  ? 'bg-white shadow-xl border-2 border-indigo-500 scale-105'
                  : 'bg-white shadow-lg border border-gray-100'
              } p-8 transition-all duration-300 hover:shadow-xl`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-6 transform -translate-y-1/2">
                  <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-500">{plan.description}</p>
                <div className="mt-6">
                  {typeof plan.price === 'string' ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900">₦{plan.price}</span>
                      <span className="text-gray-500">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-gray-900">Contact Us</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0 mr-3" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  plan.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h3 className="text-center text-2xl font-bold text-gray-900 mb-12">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "Is there a free trial available?",
                a: "We offer a 14-day free trial for all plans. No credit card required."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, wire transfers, and purchase orders for enterprise customers."
              },
              {
                q: "Do you offer academic discounts?",
                a: "Yes, we offer special pricing for educational institutions. Contact our sales team for details."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                  <HelpCircle className="w-5 h-5 text-indigo-500 mr-2" />
                  {faq.q}
                </h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;