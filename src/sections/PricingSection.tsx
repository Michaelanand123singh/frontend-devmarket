import { PricingPlan } from '../types';

const PricingSection = () => {
  const pricingPlans: PricingPlan[] = [
    {
      id: 1,
      name: 'Basic',
      price: '₹1,000',
      description: 'Perfect for small businesses and personal projects',
      features: [
        'Single landing page',
        'Hosting included',
        'AI-powered design',
        'Mobile responsive',
        'DevMarket subdomain',
        'Basic analytics',
      ],
      cta: 'Get Started',
    },
    {
      id: 2,
      name: 'Pro',
      price: '₹1,000 + domain',
      description: 'For businesses that need a professional online presence',
      features: [
        'Single landing page',
        'Hosting included',
        'AI-powered design',
        'Mobile responsive',
        'Custom domain connection',
        'Advanced analytics',
        'Priority support',
      ],
      cta: 'Get Started',
      popular: true,
    },
    {
      id: 3,
      name: 'Enterprise',
      price: 'Contact Us',
      description: 'For larger organizations with specific requirements',
      features: [
        'Multiple landing pages',
        'Hosting included',
        'AI-powered design',
        'Mobile responsive',
        'Custom domain connection',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Dedicated account manager',
      ],
      cta: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-gray-600">
            Pay only for what you use. No monthly subscriptions or hidden fees.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id} 
              className={`card relative border-2 ${
                plan.popular 
                  ? 'border-indigo-500 shadow-xl' 
                  : 'border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 inset-x-0 -translate-y-1/2 bg-indigo-500 text-white text-sm font-medium px-3 py-1 rounded-full w-max mx-auto">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <div className="mt-4 mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.id !== 3 && <span className="text-gray-500 ml-2">one-time</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#cta" 
                className={`btn w-full ${
                  plan.popular 
                    ? 'btn-primary' 
                    : 'border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;