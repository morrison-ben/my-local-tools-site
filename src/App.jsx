import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function LandingPage() {
  return (
    <div className="bg-white text-dark min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light border-bottom px-4 py-3">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Simple Fix</a>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav mb-2 mb-lg-0 me-3">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Beta</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
            <button className="btn btn-outline-danger me-2">Log In</button>
            <button className="btn btn-danger">Join Beta</button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="flex-grow-1 d-flex align-items-center">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-4">
                Save Time Running Your Business. <br />
                <span className="text-danger text-decoration-underline">Automatically.</span>
              </h1>
              <p className="lead text-muted mb-4">
                I’m working 1-on-1 with local owners to learn what slows them down and build lightweight, time-saving automations — no extra apps, no long ramp-ups.
              </p>
              <button className="btn btn-danger btn-lg">Join the Beta for Free</button>
            </div>
          </div>
        </div>
      </header>

      {/* Mockup */}
      <section className="py-5">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <img
                src="https://via.placeholder.com/1000x500?text=Tool+Preview"
                alt="Placeholder Preview"
                className="img-fluid rounded shadow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">What You Can Do With LocalTools</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow h-100">
                <h4 className="fw-bold mb-2">⏱ Save Hours Per Week</h4>
                <p className="text-muted">No more copy-pasting or juggling spreadsheets and inboxes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow h-100">
                <h4 className="fw-bold mb-2">🧩 Works With Your Current Tools</h4>
                <p className="text-muted">Integrate quietly behind the scenes without replacing your stack.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-white rounded shadow h-100">
                <h4 className="fw-bold mb-2">🛠 Built With Local Feedback</h4>
                <p className="text-muted">Test tools built from real conversations with business owners.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-5">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="fw-semibold mb-3">Want to help shape what we build?</h3>
              <p className="text-muted mb-4">Share your biggest workflow challenges and be first to try tools made to fix them.</p>
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <button className="btn btn-danger btn-lg">Join the Beta Waitlist</button>
                <button
                  className="btn btn-outline-danger btn-lg"
                  onClick={() => window.open('https://calendly.com/yourname/15min', '_blank')}
                >
                  Book a Quick Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-muted py-4 border-top">
        <small>
          I’m Ben, a local engineer working with small businesses to build practical automations. No pressure — just trying to build something useful.
        </small>
      </footer>
    </div>
  );
}