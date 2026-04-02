import React from 'react';
import './Blog4'
import 'bootstrap/dist/css/bootstrap.min.css';

const Blog4 = () => {
  // Custom Styles
  const themeStyles = {
    backgroundColor: '#0b0b0b',
    color: '#c6ff00',
    minHeight: '100vh',
    fontFamily: 'serif'
  };

  const accentBorder = {
    borderLeft: '4px solid #c6ff00',
    paddingLeft: '20px',
    color: '#ffffff',
    fontStyle: 'italic'
  };

  const hrStyle = {
    backgroundColor: '#c6ff00',
    opacity: 0.3,
    height: '1px'
  };

  return (
    <div style={themeStyles} className="py-5">
      <div className="container" style={{ maxWidth: '800px' }}>
        
        {/* Header Section */}
        <header className="mb-4">
          <span className="badge mb-2" style={{ backgroundColor: '#ff4d8d' }}>ARTICLE</span>
          <h1 className="display-4 fw-bold mb-3" style={{ color: '#ffffff' }}>
            Secrets Your Parents Never Told You About Fashion
          </h1>
          <div className="d-flex align-items-center text-secondary small">
            <span className="me-3">By <strong>John Doe</strong></span>
            <span className="me-3">12 August 2024</span>
            <span className="me-3">0 Comments</span>
            <span>5 Minute Read</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-5">
          <img 
            src="https://images.pexels.com/photos/36706576/pexels-photo-36706576.jpeg" 
            alt="Hero Fashion" 
            className="img-fluid rounded"
          />
        </div>

        {/* Introduction Text */}
        <article className="mb-5 text-light opacity-75" style={{ lineHeight: '1.8' }}>
          <p>Aenean vitae mattis elit. Aenean justo risus, mollis sit amet molestie, aliquam id massa sit amet enim tristique, fringilla sapien id, laoreet elit. Suspendisse tristique est ut felis bibendum, eu maximus ex dignissim.</p>
          <p>Nullam non ex elit. Sed purus odio, mattis neque nec mauris vitae, tristique interdum diam. Maecenas faucibus pede at finibus egestas. Curabitur vitae scelerisque, maecenas dapibus sapien dolor, sit amet vulputate velit cursus vitae.</p>
        </article>

        {/* Blockquote */}
        <blockquote className="my-5" style={accentBorder}>
          <p className="h4">
            "Pellentesque tincidunt malesuada nunc dapibus, purus id dictum elit justo a turpis tempus, ullamcorper dui id faucibus semper quam nec erat convallis volutpat felis feugiat."
          </p>
        </blockquote>

        {/* Section: Ultimate Guide */}
        <section className="mb-5">
          <h2 className="fw-bold mb-4" style={{ color: '#ffffff' }}>The Ultimate Guide To Fashion</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500" className="img-fluid rounded h-100 object-fit-cover" alt="Fashion 1" />
            </div>
            <div className="col-md-6">
              <div className="row g-3">
                <div className="col-12">
                  <img src="https://images.pexels.com/photos/7562026/pexels-photo-7562026.jpeg" className="img-fluid rounded" alt="Fashion 2" />
                </div>
                <div className="col-12">
                  <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&q=80&w=500" className="img-fluid rounded" alt="Fashion 3" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr style={hrStyle} className="my-5" />

        {/* Section: The Next Big Thing */}
        <section className="mb-5">
          <h2 className="fw-bold mb-4" style={{ color: '#ffffff' }}>The Next Big Thing in Fashion</h2>
          <ul className="list-unstyled text-light opacity-75">
            <li className="mb-2">• Phasellus tempor ante a nisi placerat, eget ultrices.</li>
            <li className="mb-2">• Curabitur tempor ante a nisi placerat.</li>
            <li className="mb-2">• Curabitur tempor ante a nisi placerat, eget ultrices.</li>
            <li className="mb-2">• Sed ultrices curabitur tempor ante a nisi placerat, eget ultrices.</li>
          </ul>
        </section>

        {/* Section: Will AI Rule? */}
        <section className="mb-5">
          <h2 className="fw-bold mb-4" style={{ color: '#ffffff' }}>Will AI Ever Rule The World?</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=400" className="img-fluid rounded shadow" alt="Model" />
            </div>
            <div className="col-md-8 text-light opacity-75">
              <p>Morbi eu finibus mi, at tincidunt velit pellentesque elementum. Curabitur fermentum odio ac odio gravida, a eu elementum malesuada eros viverra.</p>
              <p>Curabitur vitae scelerisque, maecenas dapibus sapien dolor, sit amet vulputate velit cursus vitae. Suspendisse potenti.</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Blog4;