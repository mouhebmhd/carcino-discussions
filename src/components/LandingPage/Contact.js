import React, { useState } from 'react';
import NavBr from './NavBr';
import Footer from './Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    isError: false
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFormStatus({
        isSubmitted: false,
        isError: true
      });
      return;
    }
    
    // In a real application, you would send the form data to your server here
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormStatus({
      isSubmitted: true,
      isError: false
    });
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="d-flex flex-column">
      <main className="flex-shrink-0">
        {/* Navigation */}
      <NavBr /> 

        {/* Page content */}
        <section className="py-5">
          <div className="container px-5">
            {/* Contact form */}
            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
              <div className="text-center mb-5">
                <div className="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3">
                  <i className="bi bi-envelope"></i>
                </div>
                <h1 className="fw-bolder">Get in touch</h1>
                <p className="lead fw-normal text-muted mb-0">Give us your feedback!</p>
              </div>
              <div className="row gx-5 justify-content-center">
                <div className="col-lg-8 col-xl-6">
                  <form id="contactForm" onSubmit={handleSubmit}>
                    {/* Name input */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="name"
                        type="text"
                        placeholder="Enter your name..."
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Full name</label>
                      <div className="invalid-feedback">A name is required.</div>
                    </div>
                    
                    {/* Email address input */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Email address</label>
                      <div className="invalid-feedback">An email is required.</div>
                    </div>
                    
                    {/* Phone number input */}
                    <div className="form-floating mb-3">
                      <input
                        className="form-control"
                        id="phone"
                        type="tel"
                        placeholder="(123) 456-7890"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phone">Phone number</label>
                      <div className="invalid-feedback">A phone number is required.</div>
                    </div>
                    
                    {/* Message input */}
                    <div className="form-floating mb-3">
                      <textarea
                        className="form-control"
                        id="message"
                        placeholder="Enter your message here..."
                        style={{ height: "10rem" }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                      <div className="invalid-feedback">A message is required.</div>
                    </div>
                    
                    {/* Submit success message */}
                    {formStatus.isSubmitted && (
                      <div className="text-center mb-3">
                        <div className="fw-bolder">Form submission successful!</div>
                        <p className="text-muted">We'll get back to you as soon as possible.</p>
                      </div>
                    )}
                    
                    {/* Submit error message */}
                    {formStatus.isError && (
                      <div className="text-center text-danger mb-3">
                        Error sending message! Please check all fields and try again.
                      </div>
                    )}
                    
                    {/* Submit Button */}
                    <div className="d-grid">
                      <button 
                        className="btn btn-primary btn-lg" 
                        id="submitButton" 
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactForm;