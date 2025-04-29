import { useState } from 'react';
import useForm from '../hooks/useForm';
import { FormData } from '../types';

const HeroSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues: FormData = {
    name: '',
    email: '',
  };

  const validate = (values: FormData) => {
    const errors: Partial<Record<keyof FormData, string>> = {};
    
    if (!values.name) {
      errors.name = 'Name is required';
    }
    
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    
    return errors;
  };

  const handleSubmit = async (values: FormData) => {
    // In a real app, you would send this data to your API
    console.log('Form submitted:', values);
    setSubmitted(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit: submitForm } = useForm({
    initialValues,
    onSubmit: handleSubmit,
    validate,
  });

  return (
    <section id="hero" className="relative overflow-hidden py-12 md:py-16 lg:py-24 xl:py-32 bg-mesh-gradient">
      {/* Animated Blobs - Adjusted for better mobile display */}
      <div className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full bg-ai-300 blob opacity-20 md:opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full bg-glow-purple blob opacity-10 md:opacity-20"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-5 md:opacity-10 section-pattern"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 md:gap-10 lg:gap-12">
          {/* Hero content - Mobile-first approach */}
          <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in order-2 lg:order-1 mt-8 lg:mt-0">
            <h1 className="font-display tracking-tight text-dark-700">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2">Create & Deploy</span>
              <span className="block text-gradient-animated text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Landing Pages with us</span>
            </h1>
            
            <div className="ai-divider mx-auto lg:ml-0 mt-6 md:mt-8 mb-4 md:mb-6"></div>
            
            <p className="text-base md:text-lg text-dark-500 leading-relaxed max-w-md mx-auto lg:mx-0">
             Dev Market helps you build beautiful landing pages in minutes, not days. Design, deploy, and host your pages 
              on our platform with automatic deployment and domain connection.
            </p>
            
            {/* Typing animation */}
            <div className="mt-3 md:mt-4 h-6 font-mono text-xs md:text-sm text-ai-700 overflow-hidden">
              <div className="typing-animation">Built with advanced AI to match your brand identity</div>
            </div>
            
            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4">
              <a href="#features" className="btn btn-gradient bg-size-200 text-sm md:text-base py-2.5 px-4 md:px-5">
                <span className="mr-2">Explore Features</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a href="#how-it-works" className="btn btn-glass text-sm md:text-base py-2.5 px-4 md:px-5">
                <span className="mr-2">How It Works</span>
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Early access form - Adjusted for mobile */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="card-glass p-5 sm:p-6 md:p-8 rounded-xl max-w-md mx-auto w-full animate-slide-up relative">
              {/* Decorative elements - Scaled for mobile */}
              <div className="absolute -top-2 -left-2 md:-top-3 md:-left-3 w-4 h-4 md:w-6 md:h-6 rounded-full bg-ai-200"></div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-4 h-4 md:w-6 md:h-6 rounded-full bg-ai-300"></div>
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-ai-gradient opacity-10 rounded-br-lg rounded-tl-lg"></div>
              
              <h2 className="text-xl md:text-2xl font-bold text-center mb-4 md:mb-6 font-display">Get Early Access</h2>
              {submitted ? (
                <div className="text-center py-6 md:py-8 animate-fade-in">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-ai-100 text-ai-600 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-medium mb-2 text-dark-700">Thank you!</h3>
                  <p className="text-sm md:text-base text-dark-500">
                    We've received your request for early access. We'll be in touch soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={submitForm} className="space-y-4 md:space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-dark-600 mb-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-dark-400">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-10 pr-4 py-2 md:py-2.5 text-sm md:text-base bg-white/80 border rounded-lg focus:ring-2 focus:ring-ai-500 focus:outline-none transition-all duration-200 ${
                          touched.name && errors.name ? 'border-red-500' : 'border-slate-200 hover:border-ai-300'
                        }`}
                        placeholder="John Doe"
                      />
                    </div>
                    {touched.name && errors.name && (
                      <p className="mt-1 md:mt-1.5 text-xs md:text-sm text-red-600 flex items-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-dark-600 mb-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-dark-400">
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-10 pr-4 py-2 md:py-2.5 text-sm md:text-base bg-white/80 border rounded-lg focus:ring-2 focus:ring-ai-500 focus:outline-none transition-all duration-200 ${
                          touched.email && errors.email ? 'border-red-500' : 'border-slate-200 hover:border-ai-300'
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    {touched.email && errors.email && (
                      <p className="mt-1 md:mt-1.5 text-xs md:text-sm text-red-600 flex items-center">
                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary relative overflow-hidden group mt-2 py-2.5 text-sm md:text-base"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-3 w-3 md:h-4 md:w-4 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          Request Early Access
                          <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-ai-600 to-ai-700 group-hover:scale-105 transition-transform duration-500"></span>
                  </button>
                  <p className="text-xs text-center text-dark-400 mt-3 md:mt-4">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;