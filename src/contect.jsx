import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import "./contect.css";


const EMAILJS_PUBLIC_KEY = "MqeRZdhdo1IQZYY-s";
const EMAILJS_SERVICE_ID = "service_5ars2wj";
const EMAILJS_TEMPLATE_ID = "template_1vv3k5n";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "",phone:"", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setStatus({ state: "error", message: "Please fill in all fields." });
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.email.trim())) {
      setStatus({ state: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ state: "sending", message: "" });

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setStatus({ state: "success", message: "Message sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch((err) => {
        console.error(err);
        setStatus({ state: "error", message: "Failed to send message. Please try again later." });
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">

        {/* Left: info */}
        <div className="contact-info-col">
          <p className="contact-label">CONTACT</p>
          <h2 className="contact-heading">Let's work together</h2>
          <p className="contact-subtext">
            I'm currently open to new opportunities. Drop a message and I'll get back to you soon.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon-circle">
                <FaMapMarkerAlt className="contact-icon" />
              </div>
              <span className="contact-info-text">Velachery, Chennai, Tamil Nadu</span>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-circle">
                <FaEnvelope className="contact-icon" />
              </div>
              <span className="contact-info-text">vijayponnusamy78100@gmail.com</span>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-circle">
                <FaPhoneAlt className="contact-icon" />
              </div>
              <span className="contact-info-text">+91 78100 66371</span>
            </div>
          </div>

          <div className="contact-social-row">
            <a
              href="https://github.com/vijayponnusamy78100-droid"
              className="contact-social-icon"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/vijay-p-525463380/"
              className="contact-social-icon"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="contact-form-card">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* -----  Phone ---------- */}
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Phone</label>
              <input
                className="form-input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                className="form-textarea"
                id="message"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className="submit-btn" type="submit" disabled={status.state === "sending"}>
              {status.state === "sending" ? "Sending..." : "Send message"}
              <FiArrowRight className="btn-icon" />
            </button>

            {status.message && (
              <p className={`form-status ${status.state === "success" ? "success" : "error"}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}