import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import { personal } from '../data/portfolioData';
import { MapPin, Mail, Phone, Send, AlertCircle } from 'lucide-react';

const INITIAL_FORM = { name: '', email: '', message: '' };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.message.trim()) errors.message = 'Message is required.';
  else if (form.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';
  return errors;
}

/* -------------------------------------------------------
   Contact Section — mailto fallback (no backend required)
   To connect a real email service later, replace the
   handleSubmit body with your API call and keep the
   same form field names: name, email, message.
------------------------------------------------------- */
export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name]) {
      const newErrors = validate({ ...form, [name]: value });
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const newErrors = validate(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // --- mailto fallback ---
      // Opens the visitor's email client with your address, subject and message pre-filled.
      // Replace this block with an API/backend call when ready.
      const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <section id="contact" className="section section--alt contact" aria-label={`Contact ${personal.name}`}>
      <div className="container">
        <SectionHeading
          number="08"
          light
          label="Contact"
          title="Let's Connect"
          subtitle="Have a project in mind or just want to connect? Fill in the form — your email client will open with everything filled in."
        />

        <div className="contact__grid">
          {/* Info side */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="contact__details">
              <div className="contact__detail">
                <MapPin size={17} aria-hidden="true" />
                <div>
                  <p className="contact__detail-label">Location</p>
                  <p className="contact__detail-value">{personal.location}</p>
                </div>
              </div>
              <div className="contact__detail">
                <Mail size={17} aria-hidden="true" />
                <div>
                  <p className="contact__detail-label">Email</p>
                  <a href={`mailto:${personal.email}`} className="contact__detail-value contact__detail-link">
                    {personal.email}
                  </a>
                </div>
              </div>
              <div className="contact__detail">
                <Phone size={17} aria-hidden="true" />
                <div>
                  <p className="contact__detail-label">Phone</p>
                  <a href={`tel:${personal.phone}`} className="contact__detail-value contact__detail-link">
                    {personal.phone}
                  </a>
                </div>
              </div>
            </div>
            <div className="contact__social-wrap">
              <p className="contact__social-label">Find me on</p>
              <SocialLinks size="md" />
            </div>
          </motion.div>

          {/* Form side */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <form
              className="contact__form"
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
            >
              {/* Name */}
              <div className={`form-group ${errors.name && touched.name ? 'form-group--error' : ''}`}>
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                  aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                  aria-invalid={!!(errors.name && touched.name)}
                />
                {errors.name && touched.name && (
                  <p className="form-error" id="name-error" role="alert">
                    <AlertCircle size={12} aria-hidden="true" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className={`form-group ${errors.email && touched.email ? 'form-group--error' : ''}`}>
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                  aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                  aria-invalid={!!(errors.email && touched.email)}
                />
                {errors.email && touched.email && (
                  <p className="form-error" id="email-error" role="alert">
                    <AlertCircle size={12} aria-hidden="true" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className={`form-group ${errors.message && touched.message ? 'form-group--error' : ''}`}>
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-input form-textarea"
                  placeholder="Tell me about your project or just say hello..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-describedby={errors.message && touched.message ? 'message-error' : undefined}
                  aria-invalid={!!(errors.message && touched.message)}
                />
                {errors.message && touched.message && (
                  <p className="form-error" id="message-error" role="alert">
                    <AlertCircle size={12} aria-hidden="true" /> {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                variant="primary"
                className="contact__submit"
                iconRight={<Send size={15} />}
              >
                Send Message
              </Button>

              <p className="contact__form-note">
                Clicking "Send Message" will open your email client with the message pre-filled, addressed to {personal.email}.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
