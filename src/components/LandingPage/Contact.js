import React, { useState } from 'react';
import 'animate.css';
import { Spinner } from 'react-bootstrap'; // Make sure to install react-bootstrap or replace with your preferred spinner
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);
  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    isError: false,
    isSubmitting: false
  });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
    if (id === 'message') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormStatus({ isSubmitted: false, isError: false, isSubmitting: true });

    const isValid =
      formData.name &&
      validateEmail(formData.email) &&
      formData.phone &&
      formData.message;

    if (!isValid) {
      setFormStatus({ isSubmitted: false, isError: true, isSubmitting: false });
      return;
    }

    // Simulate API request
    setTimeout(() => {
      setFormStatus({ isSubmitted: true, isError: false, isSubmitting: false });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setCharCount(0);
    }, 1000);
  };

  return (
    <div className="d-flex flex-column">
      <main className="flex-shrink-0">
        <section className="py-5">
          <div className="container px-5">
            <div className="bg-light rounded-4 py-5 px-4 px-md-5">
              <div className="text-center mb-5">
                <h1 className="fw-bold display-4 mainTextColor">Get In Touch</h1>
                <p className="lead fw-normal text-muted mb-0">
                  You have a question? Do not hesitate!
                </p>
              </div>

              <div className="col-lg-8 col-xl-6 mx-auto">
                <form id="contactForm" onSubmit={handleSubmit}>
                  {/* Name input */}
                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${formData.name ? 'is-valid' : ''}`}
                      id="name"
                      type="text"
                      placeholder="Enter your name..."
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="name">Full name</label>
                  </div>

                  {/* Email input */}
                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${formData.email && validateEmail(formData.email) ? 'is-valid' : ''}`}
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="email">Email address</label>
                  </div>

                  {/* Phone input */}
                  <div className="form-floating mb-3">
                    <input
                      className={`form-control ${formData.phone ? 'is-valid' : ''}`}
                      id="phone"
                      type="tel"
                      placeholder="(123) 456-7890"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="phone">Phone number</label>
                  </div>

                  {/* Message input */}
                  <div className="form-floating mb-3 position-relative">
                    <textarea
                      className={`form-control ${formData.message ? 'is-valid' : ''}`}
                      id="message"
                      placeholder="Enter your message here..."
                      style={{ height: '10rem' }}
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={500}
                      required
                    ></textarea>
                    <label htmlFor="message">Message</label>
                    <small
                      className="text-muted position-absolute"
                      style={{ right: 15, bottom: 10 }}
                    >
                      {charCount}/500
                    </small>
                  </div>

                  {/* Feedback messages */}
                  {formStatus.isSubmitted && (
                    <div className="text-center mb-3 animate__animated animate__fadeInDown">
                      <div className="fw-bolder text-success">
                        Form submission successful!
                      </div>
                      <p className="text-muted">
                        We'll get back to you as soon as possible.
                      </p>
                    </div>
                  )}

                  {formStatus.isError && (
                    <div className="text-center text-danger mb-3 animate__animated animate__shakeX">
                      Error sending message! Please check all fields and try again.
                    </div>
                  )}

                  {/* Submit button */}
                  <div className="d-grid">
                    <button
                      className="btn mainButton btn-lg"
                      id="submitButton"
                      type="submit"
                      disabled={formStatus.isSubmitting}
                    >
                      {formStatus.isSubmitting ? (
                      <>
                        <Spinner animation="border" size="sm" className="me-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="me-2" />
                        Submit
                      </>
                    )}
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContactForm;
