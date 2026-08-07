import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Check } from "./Icons";
import "@/styles/contact.css";

const DEFAULT_SERVICE_ID = "service_l1g15hh";
const DEFAULT_TEMPLATE_ID = "template_3los4no";
const DEFAULT_PUBLIC_KEY = "BF9jO2Qd8_YhRjXSi";

const SERVICE_ID = (import.meta.env.VITE_EMAILJS_SERVICE_ID ||
  DEFAULT_SERVICE_ID) as string;
const TEMPLATE_ID = (import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
  DEFAULT_TEMPLATE_ID) as string;
const PUBLIC_KEY = (import.meta.env.VITE_EMAILJS_PUBLIC_KEY ||
  DEFAULT_PUBLIC_KEY) as string;
const IS_EMAIL_CONFIGURED = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!IS_EMAIL_CONFIGURED || !SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("Email send failed", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-layout">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  className="contact-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="success-icon">
                    <Check size={32} />
                  </div>
                  <h3>Message sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  ref={formRef}
                  className="contact-form"
                  onSubmit={sendEmail}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
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
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary contact-submit"
                    disabled={status === "sending"}
                  >
                    {status === "sending"
                      ? "Sending..."
                      : IS_EMAIL_CONFIGURED
                        ? "Send message"
                        : "Email service unavailable"}
                    {status === "sending" ? null : <Send size={16} />}
                    {status === "error" && (
                      <span className="form-error">
                        {IS_EMAIL_CONFIGURED
                          ? "Failed. Try again."
                          : "Email service is not configured yet."}
                      </span>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
