import { useState } from 'react';
import { Testimonial } from '../types';

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "DevMarket helped me create a beautiful landing page for my product in just minutes. The AI-powered design suggestions were spot-on and saved me thousands in design costs.",
      author: "Rahul Sharma",
      role: "Founder",
      company: "TechStart",
      avatar: "RS",
    },
    {
      id: 2,
      text: "As a non-technical founder, I struggled with creating a professional online presence. DevMarket made it incredibly simple - I described what I wanted, and the AI did the rest!",
      author: "Priya Patel",
      role: "CEO",
      company: "Wellness Hub",
      avatar: "PP",
    },
    {
      id: 3,
      text: "The pay-as-you-go model works perfectly for our startup. We created multiple landing pages for different campaigns without breaking the bank. Highly recommend!",
      author: "Vikram Singh",
      role: "Marketing Director",
      company: "GrowFast",
      avatar: "VS",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it. Here's what early adopters have to say about DevMarket.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          {/* Testimonial carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-xl shadow-md p-8">
                      <div className="flex items-center mb-6">
                        <div className="h-12 w-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <h4 className="font-medium text-lg">{testimonial.author}</h4>
                          <p className="text-gray-600">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                      <blockquote>
                        <p className="text-lg text-gray-800">"{testimonial.text}"</p>
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={handlePrev}
                className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Previous testimonial"
              >
                <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots indicator */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 w-3 rounded-full focus:outline-none ${
                      index === activeIndex ? 'bg-indigo-600' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Next testimonial"
              >
                <svg className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;