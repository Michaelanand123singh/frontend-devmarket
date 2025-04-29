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
    <section id="hero" className="relative overflow-hidden bg-gray-50 py-20 sm:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="absolute inset-0 h-full w-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Hero content */}
          <div className="max-w-xl text-center lg:text-left lg:max-w-lg">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="block">Create & Deploy</span>
              <span className="block text-indigo-600">Landing Pages with AI</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              DevMarket helps you build beautiful landing pages in minutes, not days. Design, deploy, and host your pages 
              on our platform with automatic deployment and domain connection.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href="#features" className="btn btn-primary">
                Explore Features
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                How It Works
              </a>
            </div>
          </div>

          {/* Early access form */}
          <div className="card bg-white p-8 shadow-xl rounded-2xl max-w-md mx-auto w-full">
            <h2 className="text-2xl font-bold text-center mb-6">Get Early Access</h2>
            {submitted ? (
              <div className="text-center py-8">
                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-medium mb-2">Thank you!</h3>
                <p className="text-gray-600">
                  We've received your request for early access. We'll be in touch soon!
                </p>
              </div>
            ) : (
              <form onSubmit={submitForm} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                      touched.name && errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {touched.name && errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none ${
                      touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {touched.email && errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary"
                >
                  {isSubmitting ? 'Processing...' : 'Request Early Access'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;