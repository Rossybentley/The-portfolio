import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as
  | string
  | undefined;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as
  | string
  | undefined;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as
  | string
  | undefined;

function Contact() {
  const form = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (PUBLIC_KEY) {
      try {
        emailjs.init(PUBLIC_KEY);
      } catch (err) {
        console.error("EmailJS init error:", err);
      }
    }
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      alert(
        "Email service not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY to your .env file.",
      );
      return;
    }

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current);
      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's build something great</h2>
            <p className="contact-text">
              Have a project in mind or want to collaborate? Drop me a message
              and I'll get back to you as soon as possible.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="contact-detail-label">Email</span>
                <span className="contact-detail-value">Open to inquiries</span>
              </div>
              <div className="contact-detail">
                <span className="contact-detail-label">Response time</span>
                <span className="contact-detail-value">Within 24 hours</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-card glass-card"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary contact-submit">
                Send message
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14 2L7 9M14 2l-4.5 12L7 9M14 2L2 6.5 7 9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
