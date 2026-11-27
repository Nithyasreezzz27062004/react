
import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      setStatusMessage("Please fill in your name, email, and message.");
      return;
    }
    setStatusMessage(
      `Thank you, ${contactData.name}! Your message regarding Vijay has been received.`
    );
    setContactData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-card">
        <h2>Contact & Fan Mail</h2>
        <p className="contact-subtitle">
          Have a question, event inquiry, or message for Vijay? Send it below.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="contact-row">
            <label htmlFor="name" className="contact-label">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="contact-input"
              placeholder="Enter your name"
              value={contactData.name}
              onChange={handleChange}
            />
          </div>

          <div className="contact-row">
            <label htmlFor="email" className="contact-label">
              Email Address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="contact-input"
              placeholder="Enter your email"
              value={contactData.email}
              onChange={handleChange}
            />
          </div>

          <div className="contact-row">
            <label htmlFor="subject" className="contact-label">
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="contact-input"
              placeholder="e.g., Fan Club Query, Movie Feedback"
              value={contactData.subject}
              onChange={handleChange}
            />
          </div>

          {/* Textarea Section */}
          <div className="contact-row textarea-row">
            <label htmlFor="message" className="contact-label">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="contact-textarea"
              placeholder="Write your message or wishes for Vijay here..."
              value={contactData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="contact-btn">
            Send Message
          </button>

          {statusMessage && (
            <div className="contact-status">{statusMessage}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;