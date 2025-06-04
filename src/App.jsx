import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import storefrontImage from './assets/storefront_no_bg.png';

export default function LandingPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="bg-white text-dark">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 sticky-top border-bottom">
        <div className="container">
          <a className="navbar-brand fw-bold fs-4 text-brand-gold brand-heading" href="#">
            🍯 Cerana
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
      <header className="py-5 brand-bg-gradient">
        <div className="container">
          <div className="row align-items-center g-5" style={{minHeight: '75vh'}}>
            <div className="col-lg-6 pe-lg-4">
              <div className="mb-3">
                <span className="badge bg-brand-gold text-white px-3 py-2 rounded-pill">
                  55,000+ trusted Businesses
                </span>
              </div>
              <h1 className="display-3 fw-bold mb-4 lh-1 brand-heading">
                Focus on what matters
              </h1>
              <p className="lead mb-4 fs-5 brand-body">
                Being a small business owner is difficult. We're here to help.
              </p>
              <div className="d-flex flex-column gap-3 mb-4">
                <button className="btn btn-brand-primary btn-lg px-4 py-3">Join the Waitlist</button>
                <button className="btn btn-brand-primary btn-lg px-4 py-3">Book a Call</button>
              </div>
              <div className="small brand-body">
                <div>*No long-term commitment, cancel anytime.*</div>
                <div>*Quick setup, seamless integration with your current tools.*</div>
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

      {/* Why Choose Us */}
      <section className="py-5" id="benefits">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-brand-resin text-uppercase display-5 fw-bold mb-3 brand-heading">The Cerana Difference</h2>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="text-center h-100">
                <div className="bg-brand-gold bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fs-2">⏱</span>
                </div>
                <h4 className="fw-bold mb-3 brand-heading">Take Back Your Time</h4>
                <p className="brand-body">Automate your time-consuming tasks and free up work hours for you and your employees.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="text-center h-100">
                <div className="bg-brand-gold bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{width: '80px', height: '80px'}}>
                  <span className="fs-2">➡</span>
                </div>
                <h4 className="fw-bold mb-3 brand-heading">Seamless Transition</h4>
                <p className="brand-body">Quiet and smooth integrations that co-exist with your current system. No need to reinvent the wheel.</p>
              </div>
            </div>
            <div className="col-lg-4">
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

      {/* Benefits Grid */}
      <section className="py-5 brand-bg-ivory">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-brand-gold text-uppercase fw-bold small mb-2">BENEFITS</p>
            <h2 className="display-5 fw-bold mb-3 brand-heading">Why We Shine?</h2>
            <p className="lead brand-body">
              Leverage the power of AI to automatically handle time-consuming tasks, giving you hours back each week to focus on growing your business.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="text-brand-gold mb-3">
                  <span className="fs-1">⚡</span>
                </div>
                <h5 className="fw-bold mb-3 brand-heading">Instant Time Recovery</h5>
                <p className="brand-body small">Get immediate time back on every process, powered by AI to handle repetitive tasks in real-time. No setup required, just seamless automation.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="text-brand-gold mb-3">
                  <span className="fs-1">📈</span>
                </div>
                <h5 className="fw-bold mb-3 brand-heading">Background Integration</h5>
                <p className="brand-body small">Works quietly behind the scenes with your existing tools and workflows. No disruption to your current processes, just more time in your day.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="text-brand-gold mb-3">
                  <span className="fs-1">🔧</span>
                </div>
                <h5 className="fw-bold mb-3 brand-heading">Zero Learning Curve</h5>
                <p className="brand-body small">Start saving time immediately without training or complex setup. Our intuitive system works with how you already operate your business.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="text-brand-gold mb-3">
                  <span className="fs-1">🔒</span>
                </div>
                <h5 className="fw-bold mb-3 brand-heading">Secure Operations</h5>
                <p className="brand-body small">Every operation is protected with the latest encryption technology, ensuring your business is always secure and your data safe.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="text-brand-gold mb-3">
                  <span className="fs-1">🎯</span>
                </div>
                <h5 className="fw-bold mb-3 brand-heading">Adaptive Features</h5>
                <p className="brand-body small">Enjoy automatic adjustments to your automations and plans, tailored to match your business's operational patterns and goals.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="text-brand-gold mb-3">
                  <span className="fs-1">🎧</span>
                </div>
                <h5 className="fw-bold mb-3 brand-heading">Dedicated Support</h5>
                <p className="brand-body small">Access personalized assistance whenever you need it from our expert support team, helping you make the most of your benefits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-5" id="process">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-success text-uppercase fw-bold small mb-2">PROCESS</p>
            <h2 className="display-5 fw-bold mb-3">Our Approach</h2>
            <p className="lead text-muted">
              Our streamlined process ensures quick, efficient results, from setup to completion. Enjoy clear steps and full transparency at every stage.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
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
            <div className="col-md-6 col-lg-3">
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
            <div className="col-md-6 col-lg-3">
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
            <div className="col-md-6 col-lg-3">
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

      {/* Product Sections */}
      <section className="py-5 bg-light" id="product">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <p className="text-success text-uppercase fw-bold small mb-2">Product</p>
              <h2 className="display-5 fw-bold mb-3">AI-Driven Automation</h2>
              <p className="lead text-muted mb-4">
                Save more time on every process with AI-powered optimization that ensures you get the best possible value for your business, automatically.
              </p>
              <button className="btn btn-success btn-lg px-4">Get Started</button>
            </div>
            <div className="col-lg-6">
              <img
                src="https://via.placeholder.com/500x300/22c55e/ffffff?text=AI+Dashboard"
                alt="AI Dashboard"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>

          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-2">
              <p className="text-success text-uppercase fw-bold small mb-2">Product</p>
              <h2 className="display-5 fw-bold mb-3">Real-Time Insights</h2>
              <p className="lead text-muted mb-4">
                Track your operations with detailed analytics and real-time updates, giving you full transparency and control over every process.
              </p>
              <button className="btn btn-success btn-lg px-4">Get Started</button>
            </div>
            <div className="col-lg-6 order-lg-1">
              <img
                src="https://via.placeholder.com/500x300/22c55e/ffffff?text=Analytics+Dashboard"
                alt="Analytics Dashboard"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="text-success text-uppercase fw-bold small mb-2">Product</p>
              <h2 className="display-5 fw-bold mb-3">Customizable Plans</h2>
              <p className="lead text-muted mb-4">
                Choose flexible plans designed to grow with your business, offering personalized options that adapt to meet your unique needs.
              </p>
              <button className="btn btn-success btn-lg px-4">Get Started</button>
            </div>
            <div className="col-lg-6">
              <img
                src="https://via.placeholder.com/500x300/22c55e/ffffff?text=Custom+Plans"
                alt="Custom Plans"
                className="img-fluid rounded-3 shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-5" id="pricing">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-success text-uppercase fw-bold small mb-2">PRICING</p>
            <h2 className="display-5 fw-bold mb-3">Choose the Perfect Plan</h2>
            <p className="lead text-muted">
              We offer flexible pricing plans that align with where your business stands today and where it's headed.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-lg-4">
              <div className="bg-white border rounded-3 p-4 h-100 shadow-sm">
                <h5 className="fw-bold mb-3">Starter Plan</h5>
                <div className="mb-3">
                  <span className="display-6 fw-bold">$99</span>
                  <span className="text-muted">/month</span>
                </div>
                <p className="text-muted mb-4">Ideal for small businesses looking to streamline operations and boost efficiency effortlessly.</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><span className="text-success me-2">✓</span>Core AI-powered automation features</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>Real-time operational insights</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>Basic customer support via email</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>Access to standard reporting tools</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>Monthly plan adjustments</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>No long-term commitments</li>
                </ul>
                <button className="btn btn-outline-success w-100 mb-3">Get Started</button>
                <p className="small text-muted text-center">*No commitment – cancel anytime*</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-success text-white rounded-3 p-4 h-100 shadow position-relative">
                <div className="position-absolute top-0 start-50 translate-middle">
                  <span className="badge bg-warning text-dark px-3 py-1">MOST POPULAR</span>
                </div>
                <h5 className="fw-bold mb-3 mt-3">Pro Plan</h5>
                <div className="mb-3">
                  <span className="display-6 fw-bold">$199</span>
                  <span className="opacity-75">/month</span>
                </div>
                <p className="opacity-75 mb-4">Designed for growing teams that need advanced tools to maximize value and performance.</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><span className="me-2">✓</span>Advanced AI optimization</li>
                  <li className="mb-2"><span className="me-2">✓</span>Detailed analytics</li>
                  <li className="mb-2"><span className="me-2">✓</span>Priority support via chat and email</li>
                  <li className="mb-2"><span className="me-2">✓</span>Flexible, customizable plan options</li>
                  <li className="mb-2"><span className="me-2">✓</span>Multi-user access for teams</li>
                  <li className="mb-2"><span className="me-2">✓</span>Monthly performance reviews</li>
                </ul>
                <button className="btn btn-light w-100 mb-3 text-success fw-bold">Get Started</button>
                <p className="small opacity-75 text-center">*No commitment – cancel anytime*</p>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-white border rounded-3 p-4 h-100 shadow-sm">
                <h5 className="fw-bold mb-3">Enterprise Plan</h5>
                <div className="mb-3">
                  <span className="display-6 fw-bold">$299</span>
                  <span className="text-muted">/month</span>
                </div>
                <p className="text-muted mb-4">Perfect for large organizations seeking tailored solutions with dedicated support and features.</p>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2"><span className="text-success me-2">✓</span>Tailored solutions for large-scale</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>Dedicated account manager</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>Full access to all premium features</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>Enterprise-level security</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>Customized analytics dashboards</li>
                  <li className="mb-2"><span className="text-success me-2">✓</span>24/7 priority customer support</li>
                </ul>
                <button className="btn btn-outline-success w-100 mb-3">Get Started</button>
                <p className="small text-muted text-center">*No commitment – cancel anytime*</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
                  <span className="text-success">✓ 100% Safe Purchase</span>
                  <span className="text-success">✓ 7-Day Money Back Guarantee</span>
                  <span className="text-success">✓ Delivery In &lt;24h</span>
                </div>
                <h5 className="fw-bold mb-3">Not sure if we're a fit?</h5>
                <p className="text-muted mb-3">Let's setup a 15 minute call to figure out if we can help you.</p>
                <button className="btn btn-outline-success btn-lg">Schedule A Call</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-light" id="reviews">
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-success text-uppercase fw-bold small mb-2">REVIEWS</p>
            <h2 className="display-5 fw-bold mb-3">Our Valued Clients</h2>
            <p className="lead text-muted">
              We're here to help you make the right decision. See what our clients say about their experience.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="mb-3">
                  <span className="text-warning">★★★★★</span>
                </div>
                <p className="mb-3">"A fantastic tool! It saved us time and money beyond expectations."</p>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50x50/22c55e/ffffff?text=B" alt="Brendan" className="rounded-circle me-3" />
                  <div>
                    <div className="fw-bold">Brendan</div>
                    <div className="small text-muted">Owner of TechCorp</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="mb-3">
                  <span className="text-warning">★★★★★</span>
                </div>
                <p className="mb-3">"An absolute must-have! The intuitive features, real-time insights, and seamless performance have greatly improved our operations."</p>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50x50/22c55e/ffffff?text=W" alt="Wilson" className="rounded-circle me-3" />
                  <div>
                    <div className="fw-bold">Wilson</div>
                    <div className="small text-muted">Owner of DataFlow</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="bg-white p-4 rounded-3 shadow-sm h-100">
                <div className="mb-3">
                  <span className="text-warning">★★★★★</span>
                </div>
                <p className="mb-3">"Incredible tool! It helped us save time and resources while improving efficiency."</p>
                <div className="d-flex align-items-center">
                  <img src="https://via.placeholder.com/50x50/22c55e/ffffff?text=M" alt="Maya" className="rounded-circle me-3" />
                  <div>
                    <div className="fw-bold">Maya</div>
                    <div className="small text-muted">Owner of SmartSolutions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
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
      <section className="py-5" style={{background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)'}}>
        <div className="container">
          <div className="text-center">
            <p className="text-success text-uppercase fw-bold small mb-2">KEY TAKEAWAYS</p>
            <h2 className="display-5 fw-bold mb-4">Get Your Time Back with Smart Automation</h2>
            <p className="lead text-muted mb-4">
              Reclaim hours each week with smart automation that handles repetitive tasks seamlessly, giving you time to focus on what truly matters.
            </p>
            <button className="btn btn-success btn-lg px-5 py-3 mb-4">Join the Waitlist</button>

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
                <a className="navbar-brand fw-bold fs-4 text-brand-gold text-decoration-none brand-heading" href="#">
                  🍯 Cerana
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
