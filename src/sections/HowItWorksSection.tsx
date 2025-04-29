const HowItWorksSection = () => {
    const steps = [
      {
        id: 1,
        title: 'Describe Your Needs',
        description: 'Tell our AI what kind of landing page you need, including your target audience, key features, and design preferences.',
        image: '/assets/step1.svg',
      },
      {
        id: 2,
        title: 'AI Generates Your Page',
        description: 'Our AI technology creates a custom landing page based on your requirements, with professional design and compelling copy.',
        image: '/assets/step2.svg',
      },
      {
        id: 3,
        title: 'Customize If Needed',
        description: 'Review the generated page and make any necessary adjustments to match your brand perfectly.',
        image: '/assets/step3.svg',
      },
      {
        id: 4,
        title: 'Deploy with One Click',
        description: 'Publish your landing page with a single click. Connect your domain or use our free subdomain.',
        image: '/assets/step4.svg',
      },
    ];
  
    return (
      <section id="how-it-works" className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              DevMarket makes landing page creation simple and efficient with our AI-powered platform.
            </p>
          </div>
  
          <div className="mt-16">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`flex flex-col md:flex-row items-center gap-8 mb-16 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Step image (placeholder) */}
                <div className="w-full md:w-1/2">
                  <div className="bg-white p-6 rounded-lg shadow-md h-64 flex items-center justify-center">
                    <svg className="w-24 h-24 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
                      />
                    </svg>
  
                    {/* Step number */}
                    <div className="absolute -top-5 -left-5 bg-indigo-600 text-white h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg">
                      {step.id}
                    </div>
                  </div>
                </div>
  
                {/* Step content */}
                <div className="w-full md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default HowItWorksSection;