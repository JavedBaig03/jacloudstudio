import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '₹2,500',
      period: 'month',
      description: 'Best for personal sites, portfolios, landing pages',
      features: [
        'Website deployment',
        'Uptime monitoring',
        'SSL + domain setup',
        'Basic support'
      ],
      highlight: false
    },
    {
      name: 'Pro',
      price: '₹5,000',
      period: 'month',
      description: 'Best for small businesses',
      features: [
        'Everything in Starter',
        'Small content updates',
        'Backup management',
        'Faster support response'
      ],
      highlight: true
    },
    {
      name: 'Premium',
      price: '₹10,000',
      period: 'month',
      description: 'Best for startups & serious business websites',
      features: [
        'Everything in Pro',
        'Bug fixing',
        'Performance optimization',
        'Priority emergency support'
      ],
      highlight: false
    }
  ];

  const whyChoose = [
    {
      title: 'Choose Starter (₹2,500) if:',
      points: [
        'Your site is simple',
        'You just need it online and stable',
        'You want the lowest cost option'
      ]
    },
    {
      title: 'Choose Pro (₹5,000) if:',
      points: [
        'Your business updates content',
        'You need backups',
        'You want faster support'
      ]
    },
    {
      title: 'Choose Premium (₹10,000) if:',
      points: [
        'Your website makes you money',
        'Downtime is expensive',
        'You want full technical support'
      ]
    }
  ];

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h2 className="pricing-title">What we do</h2>
          <p className="pricing-subtitle">
            We manage, host, and maintain your website so you never worry about downtime, errors, or technical issues.
          </p>
          <p className="pricing-subtitle">
            We handle deployment, monitoring, fixes, updates, backups, and support. You focus on your business.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card ${plan.highlight ? 'pricing-card-highlight' : ''}`}
            >
              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">/ {plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="pricing-card-body">
                <ul className="features-list">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="feature-item">
                      <svg className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="pricing-note">
          <p><strong>Note:</strong> Hosting/cloud bills are paid by the client separately. You pay us for responsibility and maintenance.</p>
          <p>Optional one-time setup fee: ₹1,000 – ₹2,000</p>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-section">
          <h3 className="section-subtitle">Why choose us</h3>
          <p className="section-description">
            Because hosting alone doesn't protect your website. We give you:
          </p>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">👤</div>
              <p>A human who monitors your site</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔧</div>
              <p>A human who fixes problems</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">✅</div>
              <p>A human who takes responsibility</p>
            </div>
          </div>
          <p className="contrast-text">
            Cloud providers give servers. <strong>We give peace of mind.</strong>
          </p>
        </div>

        {/* Why Choose Each Plan */}
        <div className="choose-plan-section">
          <h3 className="section-subtitle">Why choose each plan</h3>
          <div className="choose-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="choose-card">
                <h4 className="choose-title">{item.title}</h4>
                <ul className="choose-list">
                  {item.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="pricing-cta">
          <blockquote className="cta-quote">
            We keep your website online, fast, and stress-free. You run your business. We run your infrastructure.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
