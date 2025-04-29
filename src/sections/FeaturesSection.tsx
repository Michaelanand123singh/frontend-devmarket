import { Feature } from '../types';

const FeaturesSection = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: 'AI-Powered Design',
      description: 'Let our AI help you create beautiful landing pages based on your requirements and preferences.',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    },
    {
      id: 2,
      title: 'One-Click Deployment',
      description: 'Deploy your landing page with a single click. No technical knowledge required.',
      icon: 'M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z M11 4a1 1 0 10-2 0v7.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V4z',
    },
    {
      id: 3,
      title: 'Custom Domains',
      description: 'Connect your own domain or use our free subdomain for your landing page.',
      icon: 'M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z',
    },
    {
      id: 4,
      title: 'Pay-As-You-Go',
      description: 'No monthly subscription. Only pay for what you use - ₹1000 per landing page plus domain charges.',
      icon: 'M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      description: 'Track visitor engagement and conversion rates with our built-in analytics dashboard.',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    },
    {
      id: 6,
      title: 'Mobile Responsive',
      description: 'All landing pages are fully responsive and look great on all devices.',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    },
  ];

  return (
    <section id="features" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Powerful Features</h2>
          <p className="mt-4 text-lg text-gray-600">
            DevMarket provides everything you need to create and host stunning landing pages without any technical expertise.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.id} className="card transition-transform hover:-translate-y-1">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;