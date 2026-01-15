import './Header.css';

export default function Header({ scrolled }) {
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">

        {/* LOGO */}
        <a href="#top" className="header-logo">
          ja<span>cloudstudio</span>
        </a>

        {/* NAV */}
        <nav className="header-nav">
          <a href="#what-we-do">What we do</a>
          <a href="#how-it-works">How it works</a>
          <a onClick={() => window.open('pricing.html', '_blank')} style={{ cursor: 'pointer' }}>Pricing</a>
        </nav>

        {/* CTA */}
        <div className="header-actions">
          <a href="#contact" className="header-contact">
            Contact
          </a>
        </div>

      </div>
    </header>
  );
}
