import { useState } from 'react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: 'Describe Your Needs',
      description: 'Tell our AI what kind of landing page you need, including your target audience, key features, and design preferences.',
      image: '/assets/step1.svg',
      icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
    },
    {
      id: 2,
      title: 'AI Generates Your Page',
      description: 'Our AI technology creates a custom landing page based on your requirements, with professional design and compelling copy.',
      image: '/assets/step2.svg',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    },
    {
      id: 3,
      title: 'Customize If Needed',
      description: 'Review the generated page and make any necessary adjustments to match your brand perfectly.',
      image: '/assets/step3.svg',
      icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
    },
    {
      id: 4,
      title: 'Deploy with One Click',
      description: 'Publish your landing page with a single click. Connect your domain or use our free subdomain.',
      image: '/assets/step4.svg',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">Easy Process</span>
          <h2 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">How It Works</h2>
          <div className="h-1 w-24 bg-indigo-600 mx-auto my-4"></div>
          <p className="mt-6 text-xl text-gray-600">
            DevMarket makes landing page creation simple and efficient with our AI-powered platform.
          </p>
        </div>

        {/* Desktop timeline navigation */}
        <div className="hidden lg:flex justify-between items-center mt-20 mb-16 px-16 relative">
          {/* Connecting line */}
          <div className="absolute h-1 bg-gray-200 left-0 right-0 top-1/2 transform -translate-y-1/2 z-0"></div>
          
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="z-10 flex flex-col items-center cursor-pointer"
              onClick={() => setActiveStep(step.id)}
            >
              <div 
                className={`h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                  activeStep >= step.id ? 'bg-indigo-600 text-white' : 'bg-white border-2 border-gray-300 text-gray-500'
                }`}
              >
                <span className="text-lg font-bold">{step.id}</span>
              </div>
              <span 
                className={`mt-3 font-medium transition-colors duration-300 ${
                  activeStep >= step.id ? 'text-indigo-600' : 'text-gray-500'
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile step indicators */}
        <div className="flex lg:hidden justify-center mt-16 mb-10 space-x-2">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`h-3 rounded-full transition-all duration-300 ${
                activeStep === step.id ? 'w-8 bg-indigo-600' : 'w-3 bg-gray-300'
              }`}
            />
          ))}
        </div>

        {/* Steps content */}
        <div className="mt-10">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`transform transition-all duration-500 ${
                activeStep === step.id ? 'opacity-100 translate-y-0' : 'opacity-0 absolute -translate-y-10 pointer-events-none'
              }`}
              style={{ position: activeStep === step.id ? 'relative' : 'absolute' }}
            >
              <div className="flex flex-col lg:flex-row items-center gap-12">
                {/* Content Section */}
                <div className="w-full lg:w-1/2 order-2 lg:order-1">
                  <div className="lg:pr-12">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 text-indigo-600 mb-5">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-6 text-gray-900">
                      <span className="text-indigo-600">Step {step.id}:</span> {step.title}
                    </h3>
                    
                    <p className="text-xl leading-relaxed text-gray-600 mb-8">{step.description}</p>
                    
                    <div className="hidden lg:flex items-center space-x-4">
                      {steps.map((s) => (
                        <button
                          key={s.id}
                          onClick={() => setActiveStep(s.id)}
                          className={`h-2 rounded-full transition-all duration-300 ${
                            activeStep === s.id ? 'w-10 bg-indigo-600' : 'w-2 bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Image/Illustration Section */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                  <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg overflow-hidden relative">
                    {/* Step number watermark */}
                    <div className="absolute -right-6 -bottom-6 text-9xl font-bold text-indigo-100 opacity-80">
                      {step.id}
                    </div>
                    
                    <div className="relative z-10 h-64 sm:h-80 flex items-center justify-center">
                      {/* Replace with actual image when available */}
                      <svg className="w-32 h-32 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={step.icon} />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile navigation buttons */}
        <div className="flex justify-between mt-8 lg:hidden">
          <button 
            onClick={() => setActiveStep(prev => Math.max(prev - 1, 1))}
            className={`flex items-center px-4 py-2 rounded-lg border border-gray-300 ${
              activeStep === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
            }`}
            disabled={activeStep === 1}
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </button>
          
          <button 
            onClick={() => setActiveStep(prev => Math.min(prev + 1, steps.length))}
            className={`flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white ${
              activeStep === steps.length ? 'opacity-50 cursor-not-allowed' : 'hover:bg-indigo-700'
            }`}
            disabled={activeStep === steps.length}
          >
            Next
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <a 
            href="#get-started" 
            className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-1"
          >
            Get Started Now
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;