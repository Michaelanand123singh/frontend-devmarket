import { useState } from 'react';
import useForm from '../hooks/useForm';
import { FormData } from '../types';

const CTASection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initialValues: FormData = {
    name: '',
    email: '',
    message: '',
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
    try {
      setError(null);
      // Simulate API call to backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would make an API call here
      // const response = await fetch('/api/early-access', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values)
      // });
      // 
      // if (!response.ok) throw new Error('Failed to submit');
      
      setSubmitted(true);
      console.log('Early access form submitted:', values);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form submission error:', err);
    }
  };

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit: submitForm } = useForm({
    initialValues,
    onSubmit: handleSubmit,
    validate,
  });

  return (
    <section id="cta" className="section bg-indigo-700 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <svg 
                className="w-16 h-16 mx-auto text-green-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                />
              </svg>
              <h3 className="mt-4 text-2xl font-bold">Thanks for signing up!</h3>
              <p className="mt-2 text-indigo-200">
                We've received your request for early access. We'll be in touch soon with more information.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold sm:text-4xl">
                  Get Early Access
                </h2>
                <p className="mt-4 text-indigo-200">
                  Be among the first to experience the future of landing page creation. Sign up for early access and receive exclusive benefits:
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <svg 
                      className="flex-shrink-0 w-5 h-5 mt-1 text-green-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="ml-2">50% discount on your first landing page</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      className="flex-shrink-0 w-5 h-5 mt-1 text-green-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="ml-2">Early access to premium templates</span>
                  </li>
                  <li className="flex items-start">
                    <svg 
                      className="flex-shrink-0 w-5 h-5 mt-1 text-green-400" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span className="ml-2">Priority customer support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-xl text-gray-900">
                <h3 className="text-xl font-semibold mb-4">Sign up for early access</h3>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded">
                    {error}
                  </div>
                )}
                
                <form onSubmit={submitForm}>
                  <div className="mb-4">
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
                      className={`w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                        touched.name && errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your name"
                    />
                    {touched.name && errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
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
                      className={`w-full px-3 py-2 border rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                        touched.email && errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Enter your email"
                    />
                    {touched.email && errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={values.message || ''}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Tell us what you're looking for"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn btn-primary"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : 'Request Early Access'}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;