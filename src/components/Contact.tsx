import "../styles/Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useEffect } from "react";

// Use Vite env vars (must start with VITE_ and be defined in a .env file)
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
        // ignore init errors; sendForm will also fail if misconfigured
        // eslint-disable-next-line no-console
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
      // eslint-disable-next-line no-console
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2>Contact Me</h2>

        <p className="contact-text">
          Feel free to reach out to me using the form below or through my email.
        </p>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="user_name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={5}
              required
            ></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
