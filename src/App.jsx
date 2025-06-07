import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import storefrontImage from './assets/storefront_no_bg.png';
import ceranaLogo from './assets/another_logo_no_bg.png';
import ceranaCoolPic from './assets/cerana_cool_pic.png';

export default function LandingPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Waitlist form state management
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Email validation function
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Form submission handler
  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setSubmitStatus(null);
    setErrorMessage('');

    // Validate email
    if (!email.trim()) {
      setSubmitStatus('error');
      setErrorMessage('Please enter your email address');
      return;
    }

    if (!isValidEmail(email)) {
      setSubmitStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    // Submit to Google Apps Script Web App
    setIsSubmitting(true);

    try {
      console.log('Submitting email:', email);

      // Try fetch first
      const response = await fetch('https://script.google.com/macros/s/AKfycbzAOnulCx54IvCvMHkuPiPvP147z4BZbxfqEfkK6iOdvmRbc896tOZlIhr918ZrKsy6pQ/exec', {
        redirect: "follow",
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString()
        })
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Response data:', data);

      if (!data.success) {
        throw new Error(data.message || 'Failed to join waitlist');
      }

      // Success
      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Fetch error:', error);
      console.error('Error type:', typeof error);
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);

      setSubmitStatus('error');

      // Provide more specific error messages
      if (error.name === 'TypeError' && (error.message.includes('fetch') || error.message.includes('Failed to fetch'))) {
        setErrorMessage('Network error. Please check your internet connection and try again.');
      } else if (error.message.includes('CORS') || error.message.includes('cors')) {
        setErrorMessage('Security error. Please try again or contact support.');
      } else if (error.message.includes('HTTP error')) {
        setErrorMessage(`Server error (${error.message}). Please try again later.`);
      } else {
        setErrorMessage(error.message || 'Something went wrong. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };



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
              <li className="nav-item"><a className="nav-link fw-medium brand-body" href="#benefits">Benefits</a></li>
              <li className="nav-item"><a className="nav-link fw-medium brand-body" href="#product">Product</a></li>
              <li className="nav-item"><a className="nav-link fw-medium brand-body" href="#process">Process</a></li>
              <li className="nav-item"><a className="nav-link fw-medium brand-body" href="#faq">FAQ</a></li>
            </ul>
            <a href="https://calendly.com/morrisonb84/30min" className="btn btn-brand-primary btn-lg px-4" target="_blank" rel="noopener noreferrer">Book a call</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header>
        <div className="container py-5">
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
              <form onSubmit={handleWaitlistSubmit} className="d-flex flex-column gap-3 mb-4">
                <div className="input-group">
                  <input
                    type="email"
                    className={`form-control form-control-lg py-3 ${submitStatus === 'error' ? 'is-invalid' : ''}`}
                    placeholder="Enter your email address"
                    aria-label="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                  <button
                    className="btn btn-brand-primary btn-lg px-4"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing...
                      </>
                    ) : 'Join the Waitlist'}
                  </button>
                </div>

                {submitStatus === 'error' && (
                  <div className="waitlist-feedback text-danger">{errorMessage}</div>
                )}

                {submitStatus === 'success' && (
                  <div className="waitlist-feedback text-success">Thank you! You've been added to our waitlist.</div>
                )}
              </form>
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

      {/* The Cerana Difference */}
      <section className="py-5" id="benefits" scroll-margin-top="200px">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-brand-resin display-5 fw-bold mb-3 brand-heading">The Cerana Difference</h2>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="text-center h-100">
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fs-1">⏱</span>
                </div>
                <h4 className="fw-bold mb-3 brand-heading text-brand-orange">Take Back Your Time</h4>
                <p className="brand-body">Automate your time-consuming tasks and free up work hours for you and your employees.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center h-100">
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fs-1">➡</span>
                </div>
                <h4 className="fw-bold mb-3 brand-heading text-brand-orange">Seamless Transition</h4>
                <p className="brand-body">Quiet and smooth integrations that co-exist with your current system. No need to reinvent the wheel.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center h-100">
                <div className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fs-1">⚡</span>
                </div>
                <h4 className="fw-bold mb-3 brand-heading text-brand-orange">Speed is everything</h4>
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

      {/* Product Showcase Section */}
      <section className="py-5" id="product" style={{
        minHeight: '600px'
      }}>
        <div className="container py-5">
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
                  <a href="https://calendly.com/morrisonb84/30min" className="btn btn-brand-primary btn-lg px-4 py-3 align-self-start" style={{width: "90%"}} target="_blank" rel="noopener noreferrer">
                    Book a Call
                  </a>
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

      {/* Process Section */}
      <section className="py-6" id="process">
        <div className="container">
          <div className="text-center mb-approach">
            <h2 className="display-5 fw-bold mb-3 text-brand-resin brand-heading">Our Approach</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-brand-gold text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">01</span>
                </div>
                <h5 className="fw-bold mb-3">Discover</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">• One-on-one consultation</li>
                  <li className="mb-2">• This is about learning, not selling</li>
                  <li className="mb-2">• Find out what’s slowing you down the most </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-brand-gold text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">02</span>
                </div>
                <h5 className="fw-bold mb-3">Plan</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">• Prioritize simple wins</li>
                  <li className="mb-2">• Fine tune / make adjustments where needed </li>
                  <li className="mb-2">• Align on vision going forward</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-brand-gold text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">03</span>
                </div>
                <h5 className="fw-bold mb-3">Build</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">• MVP to address your biggest pain point</li>
                  <li className="mb-2">• Regular updates from our end as we build</li>
                  <li className="mb-2">• Minimal learning curve / ramp-up</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="text-center">
                <div className="bg-brand-gold text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '60px', height: '60px'}}>
                  <span className="fw-bold">04</span>
                </div>
                <h5 className="fw-bold mb-3">Scale</h5>
                <ul className="list-unstyled text-muted small">
                  <li className="mb-2">• Ongoing feedback sessions</li>
                  <li className="mb-2">• Easy-to-use dashboard for metric tracking</li>
                  <li className="mb-2">• Add more automations as needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>







      {/* FAQ Section */}
      <section className="py-5" id="faq">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-brand-resin brand-heading">Got a quick question?</h2>
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
                      Do I need to be technical to use this?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === 0 ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3 mt-2">
                      Not at all - we will walk you through anything you need to do on your end in terms of setup. Aside from inputting your credentials to enable access to certain tools, we won't really require anything else from you.
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
                      Will this replace the systems I already use?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === 1 ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3 mt-2">
                      The goal is to help smooth out parts of your current workflow, not force you to start over. We focus on tools that complement what already works for you. If you do want a complete overhaul of your system we can do that as well, but generally we are looking to integrate - not replace.
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
                      Once we devise a plan for your use case, you can expect to be up and running within a couple of days. Our streamlined onboarding process ensures quick setup with step-by-step guidance.
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
                      How much does this cost? Are there pricing tiers?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === 3 ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3 mt-2">
                      We are offering free setup for anyone participating in our initial trial phase. Once the trial phase is complete, it is completely up to you whether you want to continue with us or not. If you feel we have provided value and do wish to continue, we will work with you at that point to determine the best pricing structure for your needs.
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
                      Will you offer support throughout the process?
                    </button>
                  </h2>
                  <div className={`accordion-collapse collapse ${activeAccordion === 4 ? 'show' : ''}`}>
                    <div className="accordion-body bg-light rounded-3 mt-2">
                      Absolutely. After initial setup, we will check in periodically to ensure everything is running smoothly. And you are welcome to reach out to us through any of our various support channels if you have any questions or need assistance.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="mb-3 mb-lg-0">
                <a className="navbar-brand fw-bold fs-4 text-brand-gold text-decoration-none brand-heading d-flex align-items-center" href="#">
                  <img src={ceranaLogo} alt="Cerana Logo" style={{height: '32px', marginRight: '8px'}} />
                  Cerana
                </a>
                <p className="text-light opacity-75 mb-0 mt-2 small">
                  Streamlining business automation for local companies.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mb-3 mb-lg-0">
                <h6 className="fw-bold mb-3 text-center">Quick Links</h6>
                <ul className="list-unstyled d-flex justify-content-center gap-4 mb-0">
                <li><a href="#benefits" className="text-light opacity-75 text-decoration-none small">Benefits</a></li>
                  <li><a href="#product" className="text-light opacity-75 text-decoration-none small">Product</a></li>
                  <li><a href="#process" className="text-light opacity-75 text-decoration-none small">Process</a></li>
                  <li><a href="#faq" className="text-light opacity-75 text-decoration-none small">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-lg-end">
                <p className="small opacity-75 mb-1">© 2025 Cerana</p>
                <p className="small opacity-75 mb-0">
                  Made with ❤️ for local businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
