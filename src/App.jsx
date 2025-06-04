import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import storefrontImage from './assets/storefront_no_bg.png';
import ceranaLogo from './assets/cerana_logo.png';
import ceranaCoolPic from './assets/cerana_cool_pic.png';

export default function LandingPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Scroll Animation Setup
  useEffect(() => {
    // Configure the Intersection Observer
    const observerOptions = {
      root: null, // Use viewport as root
      rootMargin: '0px', // No margin
      threshold: 0.15 // Trigger when 15% of element is visible
    };

    // Create observer instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add active class when element is visible
          entry.target.classList.add('animate-active');
          // Optionally unobserve after animation is triggered
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all elements with animation classes
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    // Add a small delay before starting to observe elements
    setTimeout(() => {
      animatedElements.forEach(el => observer.observe(el));
    }, 100);

    // Clean up observer on component unmount
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="brand-bg-gradient text-dark">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-brand-gold brand-heading d-flex align-items-center" href="#">
            <img src={ceranaLogo} alt="Cerana Logo" style={{height: '32px', marginRight: '8px'}} />
            Cerana
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link fw-medium brand-body" href="#product">Product</a></li>
              <li className="nav-item"><a className="nav-link fw-medium brand-body" href="#reviews">Reviews</a></li>
              <li className="nav-item"><a className="nav-link fw-medium brand-body" href="#benefits">Benefits</a></li>
              <li className="nav-item"><a className="nav-link fw-medium brand-body" href="#pricing">Pricing</a></li>
            </ul>
            <button className="btn btn-brand-primary btn-lg px-4">Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="py-5 animate-on-scroll fade-in">
        <div className="container">
          <div className="row align-items-center g-5" style={{minHeight: '75vh'}}>
            <div className="col-lg-6 pe-lg-4">
              <div className="mb-3">
              </div>
              <h1 className="display-3 fw-bold mb-4 lh-1 brand-heading">
                Focus on what matters
              </h1>
              <p className="lead mb-4 fs-5 brand-body">
                Being a small business owner is difficult. We're here to help.
              </p>
              <div className="d-flex flex-column gap-3 mb-4">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control form-control-lg py-3"
                    placeholder="Enter your email address"
                    aria-label="Email address"
                  />
                </div>
                <button className="btn btn-brand-primary btn-lg px-4 py-3">Join the Waitlist</button>
              </div>
            </div>
            <div className="col-lg-6 ps-lg-4">
              <div className="text-center">
                <img
                  src={storefrontImage}
                  alt="Business Dashboard"
                  className="img-fluid rounded-3"
                  style={{maxWidth: '85%', height: 'auto'}}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Product Showcase Section */}
      <section className="py-5 animate-on-scroll slide-in-left" style={{
        minHeight: '600px'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="text-white">
                <h2 className="display-4 fw-bold mb-4 text-brand-resin">
                  Automate workflows <span className="text-brand-gold">mindfully</span>
                </h2>
                <p className="lead text-brand-resin opacity-75 mb-4">
                  We help you streamline repetitive tasks in a way that works for your business.
                </p>
                <p className="text-brand-resin opacity-75 mb-4">
                  It all starts with a one on one consultation, where we learn about your business, the challenges you face, and the toolset you currently use. From there, we can pick and choose the tools and workflows that fit your use case perfectly.
                </p>
                <div className="d-flex flex-column gap-4 mb-4 align-items-start">
                  <button className="btn btn-brand-primary btn-lg px-4 py-3 align-self-start" style={{width: "90%"}}>
                    Book a Call
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-center">
                <img
                  src={ceranaCoolPic}
                  alt="Cerana Automation Platform"
                  className="img-fluid"
                  style={{
                    maxHeight: '500px',
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))',
                    transform: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 animate-on-scroll slide-in-up" id="benefits">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-brand-resin text-uppercase display-5 fw-bold mb-3 brand-heading">The Cerana Difference</h2>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4 animate-on-scroll slide-in-up delay-100">
              <div className="text-center h-100">
                <div className="bg-brand-gold bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fs-2">⏱</span>
                </div>
                <h4 className="fw-bold mb-3 brand-heading">Take Back Your Time</h4>
                <p className="brand-body">Automate your time-consuming tasks and free up work hours for you and your employees.</p>
              </div>
            </div>
            <div className="col-lg-4 animate-on-scroll slide-in-up delay-300">
              <div className="text-center h-100">
                <div className="bg-brand-gold bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fs-2">➡</span>
                </div>
                <h4 className="fw-bold mb-3 brand-heading">Seamless Transition</h4>
                <p className="brand-body">Quiet and smooth integrations that co-exist with your current system. No need to reinvent the wheel.</p>
              </div>
            </div>
            <div className="col-lg-4 animate-on-scroll slide-in-up delay-500">
              <div className="text-center h-100">
                <div className="bg-brand-gold bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fs-2">⚡</span>
                </div>
                <h4 className="fw-bold mb-3 brand-heading">Speed is everything</h4>
                <p className="brand-body">Onboarding with us is lightning fast - we want you to use our tools and reap the benefits as soon as possible.</p>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="text-brand-gold me-2">✓</span>
                    <span className="small brand-body">Hours Saved Weekly</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="text-brand-gold me-2">✓</span>
                    <span className="small brand-body">Zero Learning Curve</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="text-brand-gold me-2">✓</span>
                    <span className="small brand-body">Works With Current Tools</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="text-brand-gold me-2">✓</span>
                    <span className="small brand-body">Quick Implementation</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="text-brand-gold me-2">✓</span>
                    <span className="small brand-body">Instant Time Recovery</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="text-brand-gold me-2">✓</span>
                    <span className="small brand-body">Background Automation</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="text-brand-gold me-2">✓</span>
                    <span className="small brand-body">Focus on What Matters</span>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <span className="text-brand-gold me-2">✓</span>
                    <span className="small brand-body">Seamless Integration</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5 animate-on-scroll slide-in-right" id="process">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-success text-uppercase fw-bold small mb-2">PROCESS</p>
            <h2 className="display-5 fw-bold mb-3">Our Approach</h2>
            <p className="lead text-muted">
              Our streamlined process ensures quick, efficient results, from setup to completion. Enjoy clear steps and full transparency at every stage.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3 animate-on-scroll slide-in-up delay-100">
              <div className="text-center">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">01</span>
                </div>
                <h5 className="fw-bold mb-3">Simplified Onboarding</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">• Quick and easy setup for immediate use.</li>
                  <li className="mb-2">• Step-by-step guidance for smooth integration.</li>
                  <li className="mb-2">• No technical expertise required to get started.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 animate-on-scroll slide-in-up delay-200">
              <div className="text-center">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">02</span>
                </div>
                <h5 className="fw-bold mb-3">AI-Powered Efficiency</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">• Automatic optimization on every operation.</li>
                  <li className="mb-2">• Real-time analytics to track performance.</li>
                  <li className="mb-2">• Seamless adjustments to maximize efficiency.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 animate-on-scroll slide-in-up delay-300">
              <div className="text-center">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">03</span>
                </div>
                <h5 className="fw-bold mb-3">Transparent Communication</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">• Regular updates on progress and changes.</li>
                  <li className="mb-2">• Clear terms and no hidden fees.</li>
                  <li className="mb-2">• Dedicated support available at all stages.</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 animate-on-scroll slide-in-up delay-400">
              <div className="text-center">
                <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">04</span>
                </div>
                <h5 className="fw-bold mb-3">Flexible Solutions</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">• Customizable plans based on your needs.</li>
                  <li className="mb-2">• Monthly adjustments to suit business changes.</li>
                  <li className="mb-2">• Freedom to upgrade or adjust anytime.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* FAQ Section */}
      <section className="py-5 animate-on-scroll fade-in">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-success text-uppercase fw-bold small mb-2">FAQ'S</p>
            <h2 className="display-5 fw-bold mb-3">Got a quick question?</h2>
            <p className="lead text-muted">
              We're here to help you make the right decision. Explore our frequently asked questions and find answers below.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeAccordion !== 0 ? 'collapsed' : ''} bg-light border-0 rounded-3`}
                      type="button"
                      onClick={() => toggleAccordion(0)}
                    >
                      How does the platform ensure data accuracy?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === 0 ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3 mt-2">
                      Our system uses advanced AI verification and triple-checks every data point to guarantee accuracy, ensuring reliable and verified information.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeAccordion !== 1 ? 'collapsed' : ''} bg-light border-0 rounded-3`}
                      type="button"
                      onClick={() => toggleAccordion(1)}
                    >
                      Can I integrate this platform with other tools?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === 1 ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3 mt-2">
                      Yes, our platform offers seamless integration with most popular business tools and software through our API and built-in connectors.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeAccordion !== 2 ? 'collapsed' : ''} bg-light border-0 rounded-3`}
                      type="button"
                      onClick={() => toggleAccordion(2)}
                    >
                      How long does it take to get started?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === 2 ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3 mt-2">
                      You can get started in less than 24 hours. Our streamlined onboarding process ensures quick setup with step-by-step guidance.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeAccordion !== 3 ? 'collapsed' : ''} bg-light border-0 rounded-3`}
                      type="button"
                      onClick={() => toggleAccordion(3)}
                    >
                      What kind of support do you offer?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === 3 ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3 mt-2">
                      We offer comprehensive support including email, chat, and phone support depending on your plan, plus dedicated account managers for enterprise clients.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3">
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${activeAccordion !== 4 ? 'collapsed' : ''} bg-light border-0 rounded-3`}
                      type="button"
                      onClick={() => toggleAccordion(4)}
                    >
                      Is my data secure?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === 4 ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3 mt-2">
                      Absolutely. We use enterprise-level encryption, secure data centers, and comply with all major security standards to protect your business data.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-5 animate-on-scroll slide-in-up" style={{background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'}}>
        <div className="container">
          <div className="text-center">
            <p className="text-success text-uppercase fw-bold small mb-2">KEY TAKEAWAYS</p>
            <h2 className="display-5 fw-bold mb-4">Get Your Time Back with Smart Automation</h2>
            <p className="lead text-muted mb-4">
              Reclaim hours each week with smart automation that handles repetitive tasks seamlessly, giving you time to focus on what truly matters.
            </p>


            <div className="row justify-content-center mt-4">
              <div className="col-md-8">
                <div className="row g-3 small text-muted">
                  <div className="col-md-6">• Reclaim Hours Each Week for What Matters</div>
                  <div className="col-md-6">• Zero Learning Curve, Instant Implementation</div>
                  <div className="col-md-6">• Seamless Integration with Current Tools</div>
                  <div className="col-md-6">• Background Automation, No Disruption</div>
                  <div className="col-md-12">• Focus on Growing Your Business, Not Managing Tasks</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="mb-4">
                <a className="navbar-brand fw-bold fs-4 text-brand-gold text-decoration-none brand-heading d-flex align-items-center" href="#">
                  <img src={ceranaLogo} alt="Cerana Logo" style={{height: '32px', marginRight: '8px'}} />
                  Cerana
                </a>
              </div>
              <h4 className="fw-bold mb-3 text-white">Start Saving Time and Streamlining Your Business Today.</h4>
              <p className="text-light opacity-75 mb-4">
                Experience the power of automated efficiency and optimized operations. Get started now to reclaim your time and focus on what matters most.
              </p>
              <button className="btn btn-brand-primary btn-lg px-4">Get Started</button>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="fw-bold mb-3">Quick Links</h6>
                  <ul className="list-unstyled">
                    <li className="mb-2"><a href="#product" className="text-light opacity-75 text-decoration-none">Product</a></li>
                    <li className="mb-2"><a href="#benefits" className="text-light opacity-75 text-decoration-none">Benefits</a></li>
                    <li className="mb-2"><a href="#reviews" className="text-light opacity-75 text-decoration-none">Reviews</a></li>
                    <li className="mb-2"><a href="#pricing" className="text-light opacity-75 text-decoration-none">Pricing</a></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6 className="fw-bold mb-3">Follow Us</h6>
                  <div className="d-flex gap-3">
                    <a href="#" className="text-light opacity-75 text-decoration-none">
                      <span className="fs-5">📘</span>
                    </a>
                    <a href="#" className="text-light opacity-75 text-decoration-none">
                      <span className="fs-5">🐦</span>
                    </a>
                    <a href="#" className="text-light opacity-75 text-decoration-none">
                      <span className="fs-5">💼</span>
                    </a>
                    <a href="#" className="text-light opacity-75 text-decoration-none">
                      <span className="fs-5">📺</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 opacity-25" />
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="small opacity-75 mb-0">© 2024 Simple Fix Template</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="small opacity-75 mb-0">
                Made with ❤️ for local businesses
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
